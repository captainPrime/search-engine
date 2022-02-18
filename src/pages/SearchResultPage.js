import React from "react";
import Logo from "../components/logo";
import Search from "../components/search";
import "../assets/css/searchPageResult.css";
import SearchResult from "../components/SearchResult";
function SearchResultPage() {
  return (
    <div>
      <div className="header">
        <Logo width={"145px"} />
        <Search />
      </div>
      <div>
        <hr class="solid"></hr>
      </div>
      <SearchResult />
    </div>
  );
}
export default SearchResultPage;
