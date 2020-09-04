import React, { useState } from "react";
import ReactDOM from "react-dom";

const Form = () => {
  const [formValue, setFormValue] = useState(null);

  const onChange = (e) => setFormValue(e.target.value);

  return (
    <form>
      <input type="text" value={formValue} onChange={onChange}></input>
    </form>
  );
};

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
