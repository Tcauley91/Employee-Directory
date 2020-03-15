import React from "react";

function SortButton (props) {
  return (
   <>
    <button 
    onClick={props.sortByNameAZ}
    className='button' 
    > Sort A-Z
    </button>
    <button 
    onClick={props.sortbyLNameAZ}
    className='button' 
    > Sort Z-A
    </button>
   </> 
  );
}

export default SortButton;
