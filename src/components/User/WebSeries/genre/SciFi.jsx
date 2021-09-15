import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Link,useLocation} from "react-router-dom";
import {Pagination,PaginationItem} from '@material-ui/lab'
import { filterWebScifi } from '../../../../action/filter/webShow';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SciFI = () => {
  const {Scifi}=useSelector((state)=>state.filterWebShow)
  const query=useQuery()
  const dispatch=useDispatch()
  const {scifitotalPages}=useSelector((state)=>state.filterWebShow)
  const page = query.get("page") || 1;

    useEffect(()=>{
      if(page) dispatch(filterWebScifi(page))
  },[page])
  return (
      <>
      <div className="main-movies">
        <div className="cards">
          {Scifi?.map((data) => (
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
          count={scifitotalPages}
          variant='outlined'
          page={Number(page) || 1}
          variant='outlined'
          color='secondary'
          renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/webshow/genre/scifi?page=${item.page}`} />
          )}
        />
      </div>
    </>
    
  );
};

export default SciFI;
