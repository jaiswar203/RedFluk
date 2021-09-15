import React from 'react'
import {useLocation,useHistory} from 'react-router-dom'
import {Breadcrumbs as MUIBreadCrumbs,Link,Typography} from '@material-ui/core'

const Breadcrump = (props) => {
    const {pathname}=useLocation()
    const history=useHistory()
    const paths=pathname.split('/').filter(x => x)
    return (
        <>
            <MUIBreadCrumbs arial-label='breadcrumb' style={{color:'white'}}>
                
                    {paths.map((name,index)=>{
                        const routeto=`/${paths.slice(0,index+1).join("/")}`
                        return (
                            <Link onClick={()=> history.push(routeto)} style={{color:'red' ,fontSize:'2rem',textTransform:'capitalize',textDecoration:'none'}} className='breadcrump'>{name} </Link>
                        )
                    })}
            </MUIBreadCrumbs>
        </>
    )
}

export default Breadcrump
