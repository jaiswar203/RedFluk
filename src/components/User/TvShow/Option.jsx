import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { filterTvAction, filterTvAdven, filterTvCrime, filterTvRomance, filterTvScifi, filterTvThriller } from "../../../action/filter/tvshow";


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
            <li onClick={()=>dispatch(filterTvAction())}>
              <Link class="dropdown-item" to="/tvshows/genre/action">
                Action
              </Link>
            </li>
            <li onClick={()=>dispatch(filterTvAdven())}>
              <Link class="dropdown-item" to="/tvshows/genre/adventure">
                Adventure
              </Link>
            </li>
            <li onClick={()=>dispatch(filterTvCrime())}>
              <Link class="dropdown-item" to="/tvshows/genre/crime">
                Crime
              </Link>
            </li>
            <li onClick={()=>dispatch(filterTvThriller())}>
              <Link class="dropdown-item" to="/tvshows/genre/thriller">
                Thriller
              </Link>
            </li>
            <li onClick={()=>dispatch(filterTvRomance())}>
              <Link class="dropdown-item" to="/tvshows/genre/romance">
                Romance
              </Link>
            </li>
            <li onClick={()=>dispatch(filterTvScifi())}>
              <Link class="dropdown-item" to="/tvshows/genre/scifi">
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
