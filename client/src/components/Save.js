import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <span className="save-btn" {...props} role="button" tabIndex="0">
      <button type="button" className="btn btn-warning">Save the Book</button>
    </span>
  );
}

export default SaveBtn;
