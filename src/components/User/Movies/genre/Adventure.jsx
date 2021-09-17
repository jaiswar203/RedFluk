import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Link,useLocation} from "react-router-dom";
import {Pagination,PaginationItem} from '@material-ui/lab'
import { filterAdven } from '../../../../action/filter/movies';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Adventure = () => {
  const {Adventure}=useSelector((state)=>state.filterMovie)
  const query=useQuery()
  const dispatch=useDispatch()
  const {adventotalPages}=useSelector((state)=>state.filterMovie)
  const page = query.get("page") || 1;

    useEffect(()=>{
      if(page) dispatch(filterAdven(page))
  },[page,dispatch])
  return (
      <>
      <div className="main-movies">
        <div className="cards">
          {Adventure?.map((data) => (
            <div className="cards-poster" key={data._id}>
              <Link to={`/movdetails/${data._id}`}>
                <img src={data.poster} alt={data.detailtitle}  />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pagination">
      <Pagination 
          className='paginate'
          count={adventotalPages}
          variant='outlined'
          page={Number(page) || 1}

          color='secondary'
          renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/movie/genre/adventure?page=${item.page}`} />
          )}
        />
      </div>
    </>
    
  );
};

export default Adventure;
