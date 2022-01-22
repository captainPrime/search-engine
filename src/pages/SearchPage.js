import React from "react";
import { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import "../assets/css/bookmark.css";
import "../assets/css/search.css";
import "../assets/css/searchPage.css";
import Bookmarks from "../components/bookmarks";
import Search from "../components/search";
import Logo from "../components/logo";
import { AlertFnc } from "../components/BootstrapFunctions";
import BGModal from "../components/Modal";
import axios from "axios";
function SearchPage(props) {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [bookmarkFromStore, setBookmarks] = useState([]);
  const [apiResult, setApiResult] = useState();
  const [searchResult, setSearchResult] = useState();
  const handlechangeFn = (e) => {
    setSearchValue(e.target.value);
  };
  const SearchFnc = async () => {
    try {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => {
          setApiResult(response.data);
          setSearchResult(
            response.data.filter((result) =>
              result.body.toLowerCase().includes(searchValue.toLowerCase())
            )
          );
        });
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
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
        <Search handlechange={handlechangeFn} SearchFnc={SearchFnc} />
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
