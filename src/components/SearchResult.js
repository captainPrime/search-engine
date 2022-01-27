import React from "react";
import { PopoverAddFnc } from "./BootstrapFunctions";
import Divider from "./divider";
import "../assets/css/searchPageResult.css";
import { useSelector } from "react-redux";

function SearchResult() {
  const searchResultRedux = useSelector((state) => state);
  const result = searchResultRedux.searchResults.data

  console.log(result)
  return (
    <div className="search-result">
      <h3>{result.length} results found:</h3>
      {result.map((each) => {
        return (
          <div key={each.id}>
            <br />
            <ul>
              <li>
                <div className="search-result_header">
                  <div id="search-result_link">
                    <a href="#">
                      <h2>{each.title}</h2>
                    </a>
                  </div>

                  <div id="popover-button">
                    <PopoverAddFnc /* SelectedUrlId={bookmark.id}  */ />
                  </div>
                </div>
                <br />
                <p>{each.body}</p>
                <Divider />
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;
