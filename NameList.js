// import React from 'react'
// const names=['Relative name','Relative name','Relative name','Relative name']
// const NameList = () => {
//     // const names=['Relative1','Relative2','Relative3','Relative4']
//     const nameList=names.map((name,i)=><li key={name.split(' ').splice(0,1).toString().toLowerCase()+"list"+(i+1)}>{name+(i+1)}</li>)
//     console.log(nameList)
//   return (
//     <div><ol>Relative List{nameList}</ol></div>
    
//   )
// }

// export default NameList
import { useState } from "react";
const List=()=>{
const[toDoitems,settoDoitems]=useState([""])
const renderList=()=>{
    return toDoitems.map((item,index)=>{
        const nameList= <li key={item.split(' ').splice(0,1).toString().toLowerCase()+"list"+(index)}>{item+(index)}</li>
        console.log(nameList)
        return nameList
        
        
    })
    // console.log(nameList)
}
const handleAddItem=()=>{
    settoDoitems([...toDoitems,"Relative name"])
}
 return(
    <div>
        <ol>
        {renderList()}
        </ol>
        <button onClick={handleAddItem}>Add Relatives</button>
    </div>
 )
}
export default List;