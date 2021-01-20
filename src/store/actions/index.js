export const USER = 'USER'

export const editUSER=({name,value})=>{
    return {type:USER,payload:{name,value}}
}
