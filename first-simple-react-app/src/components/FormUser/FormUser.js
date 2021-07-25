import { useState } from "react";

const FormUser = (props) => {
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const handlerNameInput = (event) => {
    setNameInput((nameInput) => {
      return event.target.value;
    });
  };

  const handlerAgeInput = (event) => {
    setAgeInput((ageInput) => {
      return event.target.value;
    });
  };

  const saveData = () => {
    props.action(nameInput, ageInput);
    setNameInput("");
    setAgeInput("");
  };

  const handlerSubmit = () => {
    if(nameInput === '' || ageInput === '') return;
    saveData();
  };

  return (
    <>
      <label>Username</label>
      <input value={nameInput} onChange={handlerNameInput} />
      <label>Age (Years)</label>
      <input value={ageInput} onChange={handlerAgeInput} />
      <button onClick={handlerSubmit}>Add User</button>
    </>
  );
};

export default FormUser;
