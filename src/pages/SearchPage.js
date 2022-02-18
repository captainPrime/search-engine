import React from "react";
import { useState, useEffect } from "react";
import "../assets/css/bookmark.css";
import "../assets/css/search.css";
import "../assets/css/searchPage.css";
import Bookmarks from "../components/bookmarks";
import Search from "../components/search";
import Logo from "../components/logo";
import { useSelector } from "react-redux";
import { AlertFnc } from "../components/BootstrapFunctions";
import { getDocument } from "../services/firebase-config";
import { useDispatch } from "react-redux";
import {  SetError } from "../redux/actions/searchAction";
function SearchPage(props) {
  const [loading, setloading] = useState(true);
  const [bookmarkFromStore, setBookmarks] = useState([]);
  const [noContent, setNoContent] = useState();

  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUrl = async () => {
      try {
        const data = await getDocument("Bookmarks");
        if (data.docs.length === 0) {
          setNoContent(0);
          dispatch(SetError(true));
          setTimeout(() => {
            dispatch(SetError(false));
          }, 3000);
        }
        setBookmarks(
          data.docs.map((doc) => ({
            name: doc.data().name,
            id: doc.id,
            selector: doc.data().selector,
          }))
        );
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUrl();
  }, []);

  const renderContent = () => {
    if (!loading && noContent !== 0) {
      return <Bookmarks bookmarks={bookmarkFromStore} />;
    } else if (noContent === 0 && !loading) {
      return <h2 className="bookmark-error">No bookmark found</h2>;
    } else {
      return (
        <div>
          <div className="loader"></div>
          <br />
          <h4>Loading Bookmarks...</h4>
        </div>
      );
    }
  };

  return (
    <div className="main-search">
      {error ? (
        <AlertFnc errorMessage="Please check your internet connection" />
      ) : (
        <div></div>
      )}
      <Logo width={"245px"} />
      <div className="search-input_container">
        <Search />
      </div>
      {renderContent()}
    </div>
  );
}
export default SearchPage;
