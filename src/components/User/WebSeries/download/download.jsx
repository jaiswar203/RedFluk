import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { getWebShowById } from '../../../../action/movies/WebShow';

function useQuery(){
    return new URLSearchParams(useLocation().search)
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));

const Download = () => {
    const { detail } = useSelector((state) => state.webshow);
    const {id}=useParams()
    const dispatch=useDispatch()
    const query=useQuery()
    var url=''
    const [test, setTest] = useState(false)
    const quality=query.get("quality")
    const index=query.get("index")
    


    useEffect(()=>{
        dispatch(getWebShowById(id))

        setTimeout(function(){
            setTest(true)
        }
        ,[5000])
    },[id])

    if(quality==='480p'){
        url=detail?.gdrive1[index] ;
    }else if(quality==='720p'){
        url=detail?.gdrive2[index] ;
    }else if(quality==='1080p'){
        url=detail?.gdrive3[index] ;
    }else{
        url=[] ;
    }
    
    return (
        <>
            <div className="movies-download">
                <div className="movies-download-box">
                    <div className="download-img">
                        <img src={detail?.poster} alt="" />
                    </div>
                    <div className="download-data">
                        <div className="download-data-title">
                            <h4>Movie:  </h4><h5>{detail?.title}</h5>
                        </div>
                        <div className="download-data-title">
                            <h6>Quality:  </h6><p>{quality}</p>
                        </div>
                        <div className="download-data-button">
                            { test ? <a href={url}><button>Download</button></a> : <CircularProgress />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Download
