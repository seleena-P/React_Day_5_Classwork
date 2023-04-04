import React from 'react'
const List = (props) => {
  if(props.a.every((ele)=>typeof ele==='string')){
    return (
        <div>
          <ul>
            <li>{props.a[0]}</li>
            <li>{props.a[1]}</li>
            <li>{props.a[2]}</li>
            <li>{props.a[3]}</li>
          </ul>
      </div>
    )
  }
  else{
      throw new Error('Error caught!!!');
  }
}
  export default List

