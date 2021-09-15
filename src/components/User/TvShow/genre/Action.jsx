import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Link,useLocation} from "react-router-dom";
import {Pagination,PaginationItem} from '@material-ui/lab'
import { filterTvAction } from '../../../../action/filter/tvshow';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Genre = () => {
  const {Action}=useSelector((state)=>state.filterTvShow)
  
  const query=useQuery()
  const dispatch=useDispatch()
  const {actiontotalPages}=useSelector((state)=>state.filterTvShow)
  const page = query.get("page") || 1;

    useEffect(()=>{
      if(page) dispatch(filterTvAction(page))
  },[page])
  return (
      <>
      <div className="main-movies">
        <div className="cards">
          {Action?.map((data) => (
            <div className="cards-poster" key={data._id}>
              <Link to={`/tvshowdetails/${data._id}`}>
                <img src={data.poster} alt={data.detailtitle}  />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pagination">
      <Pagination 
          className='paginate'
          count={actiontotalPages}
          variant='outlined'
          page={Number(page) || 1}
          variant='outlined'
          color='secondary'
          renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/tvshow/genre/action?page=${item.page}`} />
          )}
        />
      </div>
    </>
    
  );
};

export default Genre;
