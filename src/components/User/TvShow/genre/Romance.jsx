import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Link,useLocation} from "react-router-dom";
import {Pagination,PaginationItem} from '@material-ui/lab'
import { filterTvRomance } from '../../../../action/filter/tvshow';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Romance = () => {
  const {Romance}=useSelector((state)=>state.filterTvShow)
  const query=useQuery()
  const dispatch=useDispatch()
  const {romtotalPages}=useSelector((state)=>state.filterTvShow)
  const page = query.get("page") || 1;

    useEffect(()=>{
      if(page) dispatch(filterTvRomance(page))
  },[page])
  return (
      <>
      <div className="main-movies">
        <div className="cards">
          {Romance?.map((data) => (
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
          count={romtotalPages}
          variant='outlined'
          page={Number(page) || 1}
          variant='outlined'
          color='secondary'
          renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/tvshow/genre/romance?page=${item.page}`} />
          )}
        />
      </div>
    </>
    
  );
};

export default Romance;
