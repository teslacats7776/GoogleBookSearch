import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SearchBtn(props) {
  return (
    <span className="search-btn" {...props} role="button" tabIndex="0">
    
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        
    </span> 
  );
}

export default SearchBtn;
