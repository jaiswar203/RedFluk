import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { filterWebAction, filterWebAdven, filterWebCrime, filterWebRomance, filterWebScifi,filterWebThriller  } from "../../../action/filter/webShow";

const Option = () => {
  const dispatch=useDispatch()
  useEffect(()=>{

  },[dispatch])
  return (
    <>
      <br />
      <div className="option">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li onClick={()=>dispatch(filterWebAction())}>
              <Link class="dropdown-item" to="/webshows/genre/action">
                Action
              </Link>
            </li>
            <li onClick={()=>dispatch(filterWebAdven())}>
              <Link class="dropdown-item" to="/webshows/genre/adventure">
                Adventure
              </Link>
            </li>
            <li onClick={()=>dispatch(filterWebCrime())}>
              <Link class="dropdown-item" to="/webshows/genre/crime">
                Crime
              </Link>
            </li>
            <li onClick={()=>dispatch(filterWebThriller())}>
              <Link class="dropdown-item" to="/webshows/genre/thriller">
                Thriller
              </Link>
            </li>
            <li onClick={()=>dispatch(filterWebRomance())}>
              <Link class="dropdown-item" to="/webshows/genre/romance">
                Romance
              </Link>
            </li>
            <li onClick={()=>dispatch(filterWebScifi())}>
              <Link class="dropdown-item" to="/webshows/genre/scifi">
                SciFi
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <br />
    </>
  );
};

export default Option;
