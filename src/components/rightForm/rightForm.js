import React from 'react'
import classes from "./rightForm.css"
import {useSelector,shallowEqual} from "react-redux";

const RightForm=()=>{
     const user = useSelector((state)=> state,shallowEqual)
    return <div className={classes.RightForm}>
        <p>Name: {user.name}</p>
        <p>Surname: {user.surname}</p>
        <p>Birth date: {user.birthDate}</p>
        <p>Select: {user.select}</p>
    </div>
}
export default RightForm;