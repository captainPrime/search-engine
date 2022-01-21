import React from "react";
import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import "../assets/css/bookmark.css";
import "../assets/css/search.css";
import "../assets/css/searchPage.css";
import {
  getDocument,
  createDocument,
  deleteDocument,
} from "../services/firebase-config";
import Bookmarks from "../components/bookmarks";
import Search from "../components/search";
import Logo from "../components/logo";
import { AlertFnc } from "../components/BootstrapFunctions";
import BGModal from "../components/Modal";

function SearchPage(props) {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [bookmarkFromStore, setBookmarks] = useState([]);

  const handlechangeFn = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="main-search">
      {error ? (
        <AlertFnc errorMessage="You have inputed an invalid url... please try again" />
      ) : (
        <div></div>
      )}
      <Logo width={"245px"} />
      <div className="search-input_container">
        <Search handlechange={handlechangeFn} />
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
