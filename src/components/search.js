import * as React from "react";
import { useState } from "react";
import { FaPaperPlane, FaSearch } from "react-icons/fa";
import "../assets/css/search.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { FetchSearchData, SetError } from "../redux/actions/searchAction";
import { useNavigate } from "react-router-dom";

function Search(props) {
  const [apiResult, setApiResult] = useState();
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handlechangeFn = (e) => {
    setSearchValue(e.target.value);
  };

  const dispatch = useDispatch();

  const SearchFnc = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => {
          setApiResult(response.data);

          dispatch(
            FetchSearchData(
              response.data.filter((result) =>
                result.body.toLowerCase().includes(searchValue.toLowerCase())
              )
            )
          );
          navigate("/search");
        });
    } catch (error) {
      dispatch(SetError(true));
      setTimeout(() => {
        dispatch(SetError(false));
      }, 3000);
    }
  };
  return (
    <div className="container">
      <div className="input-form">
        <button className="btn2" disabled>
          <FaSearch />
        </button>
        <input
          required
          type="text"
          onChange={handlechangeFn}
          className="search-field"
          onKeyPress={(e) => e.key === "Enter" && SearchFnc()}
          placeholder="type a url"
        />
        <button onClick={props.SearchFnc} className="submit-btn">
          <FaPaperPlane style={{ color: "rgb(210, 210, 210)" }} />
        </button>
      </div>
    </div>
  );
}
export default Search;
