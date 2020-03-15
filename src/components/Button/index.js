import React from "react";

function SortButton (props) {
  return (
   <>
    <button 
    onClick={props.sortByNameZA}
    className='button' 
    > Sort Z-A
    </button>
    <button 
    onClick={props.sortByNameAZ}
    className='button' 
    > Sort A-Z
    </button>
   </> 
  );
}

export default SortButton;
