import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { filterAction, filterAdven, filterCrime, filterRomance, filterScifi,filterThriller  } from "../../../action/filter/movies";

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
            <li onClick={()=>dispatch(filterAction())}>
              <Link class="dropdown-item" to="/movie/genre/action">
                Action
              </Link>
            </li>
            <li onClick={()=>dispatch(filterAdven())}>
              <Link class="dropdown-item" to="/movie/genre/adventure">
                Adventure
              </Link>
            </li>
            <li onClick={()=>dispatch(filterCrime())}>
              <Link class="dropdown-item" to="/movie/genre/crime">
                Crime
              </Link>
            </li>
            <li onClick={()=>dispatch(filterThriller())}>
              <Link class="dropdown-item" to="/movie/genre/thriller">
                Thriller
              </Link>
            </li>
            <li onClick={()=>dispatch(filterRomance())}>
              <Link class="dropdown-item" to="/movie/genre/romance">
                Romance
              </Link>
            </li>
            <li onClick={()=>dispatch(filterScifi())}>
              <Link class="dropdown-item" to="/movie/genre/scifi">
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
