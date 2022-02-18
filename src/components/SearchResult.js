import React from "react";
import { PopoverAddFnc } from "./BootstrapFunctions";
import Divider from "./divider";
import "../assets/css/searchPageResult.css";
import { createDocument } from "../services/firebase-config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SearchResult() {
  const searchResultRedux = useSelector((state) => state);
  const result = searchResultRedux.searchResults.data;
  const navigate = useNavigate();

  const CreateUrlFnc = async (dataName, dataID) => {
    try {
      if (result) {
        await createDocument("Bookmarks", { name: dataName, selector: dataID });
        alert("Added to bookmark");
        document.body.click();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Navigation = (id) => {
    navigate(`/search/${id}`);
  };

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
                    <a onClick={() => Navigation(each.id)}>
                      <h2>{each.title}</h2>
                    </a>
                  </div>

                  <div id="popover-button">
                    <PopoverAddFnc
                      CreateUrlFnc={() => CreateUrlFnc(each.title, each.id)}
                    />
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
