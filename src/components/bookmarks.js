import axios from "axios";
import * as React from "react";
import { FaTwitter } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "../assets/css/bookmark.css";
import "../assets/css/loader.css";
import { truncate } from "../utils/helper";
import { PopoverFnc } from "./BootstrapFunctions";
import { FetchSearchData, SetError } from "../redux/actions/searchAction";

function Bookmarks(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const findURL = async (selectedId) => {
    let Id = selectedId.toString();
    try {
      await axios
        .get(`${process.env.REACT_APP_API_URI}${Id}`)
        .then((response) => {
          dispatch(FetchSearchData([response.data]));
          navigate(`/search/${Id}`);
        });
    } catch (error) {
      dispatch(SetError(true));
      setTimeout(() => {
        dispatch(SetError(false));
      }, 3000);

      console.log(error);
    }
  };
  const { bookmarks } = props;
  return (
    <ul className="bookmark-container">
      {bookmarks.map((bookmark) => {
        return (
          <div key={bookmark.id} className="section the-bookmark">
            <PopoverFnc SelectedUrlId={bookmark.id} />
            <a onClick={() => findURL(bookmark.selector)}>
              <li className="bookmark">
                <FaTwitter style={{ color: "white" }} />
              </li>
            </a>
            <div>
              <a className="bookmark-link">
                <p>{truncate(`${bookmark.name}`, 12)}</p>
              </a>
            </div>
          </div>
        );
      })}
    </ul>
  );
}
export default Bookmarks;
