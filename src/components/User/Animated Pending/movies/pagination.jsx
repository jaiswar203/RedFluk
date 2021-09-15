import React,{useEffect} from 'react'
import {Pagination,PaginationItem} from '@material-ui/lab'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { getAllAnimeMovie } from '../../../../action/movies/animated/Mov'



const Paginate = ({page}) => {
    const dispatch=useDispatch()
    const {totalPages}=useSelector((state)=>state.animatedMovie)
    useEffect(()=>{
        if(page) dispatch(getAllAnimeMovie(page))
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
            <PaginationItem {...item} component={Link} to={`/movies?page=${item.page}`} />
          )}
        />
    )
}

export default Paginate
