import React, { useEffect, FC } from 'react'
import { useDispatch } from 'react-redux'
import { fetchLogin } from '../../store/action'

 const Login:FC<any> = ()=> {
     const dispatch = useDispatch()
     useEffect(()=>{
        dispatch(fetchLogin({username:'alex',password: '123456'}))
     },[dispatch])
    return(<div>111222222329989890901</div>)
}

export default Login