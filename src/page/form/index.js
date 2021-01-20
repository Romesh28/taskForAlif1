import React from 'react'
import classes from "./index.css"
import LeftForm from "../../components/leftForm/leftForm";
import RightForm from "../../components/rightForm/rightForm";
import {useSelector,shallowEqual} from "react-redux";
const Form=()=>{
    const user = useSelector(state=>state,shallowEqual)
    if (!Object.values(user).some(e=>!e.length)){
        console.log(JSON.stringify(user))
    }
    return <div className={classes.Form}>
        <LeftForm/>
        <RightForm/>
    </div>
}
export default Form;