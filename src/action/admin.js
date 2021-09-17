import * as api from '../api/index'

export const signup=(formdata,history)=>async(dispatch)=>{
    try {
        const {data}=await api.createAdmin(formdata)

        dispatch({type:'AUTH',data})
        history.push('/#/admin/signin')
    } catch (error) {
        console.log(error)
    }
}
export const signin=(formdata)=>async(dispatch)=>{
    try {
        const {data}=await api.verifyAdmin(formdata)

        dispatch({type:'AUTH',data})
        window.location.href='/#/admin'
    } catch (error) {
        console.log(error)
    }
}