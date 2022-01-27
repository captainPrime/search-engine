import React from "react";
import { useState } from "react";
/* import { FaTwitter } from "react-icons/fa"; */
import "../assets/css/bookmark.css";
import "../assets/css/search.css";
import "../assets/css/searchPage.css";
import Bookmarks from "../components/bookmarks";
import Search from "../components/search";
import Logo from "../components/logo";
import { useSelector } from "react-redux";
import { AlertFnc } from "../components/BootstrapFunctions";
import BGModal from "../components/Modal";

function SearchPage(props) {
  const [loading, setloading] = useState(false);
  const [bookmarkFromStore, setBookmarks] = useState([]);

  const error = useSelector((state) => state.error);
  console.log(error);

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
      {loading ? (
        <Bookmarks bookmarks={bookmarkFromStore} />
      ) : (
        <div>
          <div className="loader"></div>
          <br />
          <h4>Loading Bookmarks...</h4>
        </div>
      )}
      <BGModal />
    </div>
  );
}
export default SearchPage;
