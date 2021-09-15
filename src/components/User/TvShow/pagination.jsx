import React,{useEffect} from 'react'
import {Pagination,PaginationItem} from '@material-ui/lab'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getAllTvShow } from '../../../action/movies/TvShow'


const Paginate = ({page}) => {
    const dispatch=useDispatch()
    const {totalPages}=useSelector((state)=>state.tvshow)

    useEffect(()=>{
        if(page) dispatch(getAllTvShow(page))
    },[page])
    return (
        <Pagination 
          className='paginate'
          count={totalPages}
          variant='outlined'
          page={Number(page) || 1}
          variant='outlined'
          color='secondary'
          renderItem={(item)=>(
            <PaginationItem {...item} component={Link} to={`/webshow?page=${item.page}`} />
          )}
        />
    )
}

export default Paginate
