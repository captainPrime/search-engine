import React from "react";
import Logo from "../components/logo";
import Search from "../components/search";
import "../assets/css/searchPageResult.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function DetailsPage() {
  const { id } = useParams();
  const searchResultRedux = useSelector((state) => state);
  const result = searchResultRedux.searchResults.data;

  let data = result.filter(function (data) {
    return data.id == id;
  });

  return (
    <div>
      <div className="header">
        <Logo width={"145px"} />
        <Search />
      </div>
      <div>
        <hr className="solid"></hr>
      </div>
      <div className="result-section">
        <h1>{data[0].title}</h1>
        <br></br>
        <p>{data[0].body}</p>
      </div>
    </div>
  );
}

export default DetailsPage;
