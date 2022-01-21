import * as React from 'react';
import { FaTwitter } from 'react-icons/fa';
import '../assets/css/bookmark.css';
import '../assets/css/loader.css';
import { truncate } from '../utils/helper';
import { PopoverFnc } from './BootstrapFunctions';


function Bookmarks(props) {
    const { bookmarks } = props;
    return (
        <ul className="bookmark-container">
            {bookmarks.map((bookmark) => {
                return (
                    <div className="section">
                        <PopoverFnc SelectedUrlId={bookmark.id} />
                        <a href={`https://${bookmark.name}`}>
                            <li className="bookmark">
                                <FaTwitter style={{ color: 'white' }} />
                            </li>
                        </a>
                        <div>
                            <a
                                className="bookmark-link"
                                href={`https://${bookmark.name}`}
                            >
                                <p>{truncate(`${bookmark.name}`, 12)}</p>
                            </a>
                        </div>
                    </div>
                );
            })}
        </ul>
    );
}

export default Bookmarks;
