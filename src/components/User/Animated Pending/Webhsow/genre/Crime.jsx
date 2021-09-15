import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Link,useLocation} from "react-router-dom";
import {Pagination,PaginationItem} from '@material-ui/lab'
import { filterWebCrime } from '../../../../action/filter/webShow';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Crime = () => {
  const {Crime}=useSelector((state)=>state.filterWebShow)
  const query=useQuery()
  const dispatch=useDispatch()
  const {crimetotalPages}=useSelector((state)=>state.filterWebShow)
  const page = query.get("page") || 1;

    useEffect(()=>{
      if(page) dispatch(filterWebCrime(page))
  },[page])
  return (
      <>
      <div className="main-movies">
        <div className="cards">
          {Crime?.map((data) => (
            <div className="cards-poster" key={data._id}>
              <Link to={`/webshowdetails/${data._id}`}>
                <img src={data.poster} alt={data.detailtitle}  />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pagination">
      <Pagination 
          className='paginate'
          count={crimetotalPages}
          variant='outlined'
          page={Number(page) || 1}
          variant='outlined'
          color='secondary'
          renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/webshow/genre/crime?page=${item.page}`} />
          )}
        />
      </div>
    </>
    
  );
};

export default Crime;
