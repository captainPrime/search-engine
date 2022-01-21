import React from "react";
import { PopoverAddFnc } from "./BootstrapFunctions";
import Divider from "./divider";
import "../assets/css/searchPageResult.css";
function SearchResult() {
  return (
    <div className="search-result">
      <h3>900 results found:</h3>
      <br />
      <ul>
        <li>
          <div className="search-result_header">
            <div id="search-result_link">
              <a href="#">
                <h2>Result preview section</h2>
              </a>
            </div>

            <div id="popover-button">
              <PopoverAddFnc /* SelectedUrlId={bookmark.id}  */ />
            </div>

          </div>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porta ultrices nisl et commodo. Donec ac pretium ex. Aenean et urna
            in turpis dignissim euismod ac et augue. Maecenas viverra euismod
            ex, sed tristique ante mollis at. Nulla facilisi. Quisque rhoncus
            est euismod nisl vulputate, nec rutrum enim dictum. Maecenas
            sollicitudin nisl ut dictum semper. Maecenas molestie dolor quis
            libero fermentum, nec posuere tellus hendrerit. Aenean sed suscipit
            enim. Mauris quis turpis in arcu tristique congue in vel libero.
            Suspendisse potenti. Phasellus sed consectetur justo.
          </p>
          <Divider />
        </li>

        <li>
          <div className="search-result_header">
            <div id="search-result_link">
              <a href="#">
                <h2>Result preview section</h2>
              </a>
            </div>

            <div id="popover-button">
              <PopoverAddFnc /* SelectedUrlId={bookmark.id}  */ />
            </div>

          </div>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porta ultrices nisl et commodo. Donec ac pretium ex. Aenean et urna
            in turpis dignissim euismod ac et augue. Maecenas viverra euismod
            ex, sed tristique ante mollis at. Nulla facilisi. Quisque rhoncus
            est euismod nisl vulputate, nec rutrum enim dictum. Maecenas
            sollicitudin nisl ut dictum semper. Maecenas molestie dolor quis
            libero fermentum, nec posuere tellus hendrerit. Aenean sed suscipit
            enim. Mauris quis turpis in arcu tristique congue in vel libero.
            Suspendisse potenti. Phasellus sed consectetur justo.
          </p>
          <Divider />
        </li>

        <li>
          <div className="search-result_header">
            <div id="search-result_link">
              <a href="#">
                <h2>Result preview section</h2>
              </a>
            </div>

            <div id="popover-button">
              <PopoverAddFnc /* SelectedUrlId={bookmark.id}  */ />
            </div>

          </div>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porta ultrices nisl et commodo. Donec ac pretium ex. Aenean et urna
            in turpis dignissim euismod ac et augue. Maecenas viverra euismod
            ex, sed tristique ante mollis at. Nulla facilisi. Quisque rhoncus
            est euismod nisl vulputate, nec rutrum enim dictum. Maecenas
            sollicitudin nisl ut dictum semper. Maecenas molestie dolor quis
            libero fermentum, nec posuere tellus hendrerit. Aenean sed suscipit
            enim. Mauris quis turpis in arcu tristique congue in vel libero.
            Suspendisse potenti. Phasellus sed consectetur justo.
          </p>
          <Divider />
        </li>

        <li>
          <div className="search-result_header">
            <div id="search-result_link">
              <a href="#">
                <h2>Result preview section</h2>
              </a>
            </div>

            <div id="popover-button">
              <PopoverAddFnc /* SelectedUrlId={bookmark.id}  */ />
            </div>

          </div>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porta ultrices nisl et commodo. Donec ac pretium ex. Aenean et urna
            in turpis dignissim euismod ac et augue. Maecenas viverra euismod
            ex, sed tristique ante mollis at. Nulla facilisi. Quisque rhoncus
            est euismod nisl vulputate, nec rutrum enim dictum. Maecenas
            sollicitudin nisl ut dictum semper. Maecenas molestie dolor quis
            libero fermentum, nec posuere tellus hendrerit. Aenean sed suscipit
            enim. Mauris quis turpis in arcu tristique congue in vel libero.
            Suspendisse potenti. Phasellus sed consectetur justo.
          </p>
          <Divider />
        </li>
      </ul>
    </div>
  );
}

export default SearchResult;
