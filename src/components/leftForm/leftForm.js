import React from 'react'
import classes from "./leftForm.css"
import {editUSER} from "../../store/actions";
import {useSelector,useDispatch,shallowEqual} from "react-redux";
const LeftForm=()=>{
    const dispatch = useDispatch()
    const user = useSelector(state=>state,shallowEqual)
    const options=[
        {text:'select',value:''},
        {text:'star',value:'star'},
        {text:'heart',value:'heart'},
        {text:'cube',value:'cube'},
    ]
    const changeHandle=(e)=>{
        const {name} = e.target
        const {value} = e.target
        dispatch(editUSER({name,value}))
    }
    return <div className={classes.LeftForm}>
        <form>
            <input type="text" name="name" value={user.name}  placeholder="name" onChange={changeHandle} autoComplete="off"/>
            <input type="text" name="surname" value={user.surname} placeholder="surname" onChange={changeHandle} autoComplete="off"/>
            <input type="date" name="birthDate" value={user.birthDate}  placeholder="name" onChange={changeHandle} autoComplete="off"/>
            <select name="select" value={user.select} onChange={changeHandle}>
                {
                    options.map((el,idx)=>{
                        return <option value={el.value} key={idx}>{el.text}</option>
                    })
                }
            </select>
        </form>
    </div>
}
export default LeftForm;