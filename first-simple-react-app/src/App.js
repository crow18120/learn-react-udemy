import logo from "./logo.svg";
import "./App.css";
import FormUser from "./components/FormUser/FormUser";
import ListUser from "./components/ListUser/ListUser";
import { useState } from "react";

function App() {
  const DATA = [
    {
      key: "a1",
      username: "Trang",
      age: 21,
    },
    {
      key: "a2",
      username: "Anh",
      age: 21,
    },
  ];

  const [userList, setUserList] = useState(DATA);

  const handlerSaveData = (usernameInput, ageInput) => {
    setUserList((userList) => {
      return [
        ...userList,
        {
          key: Math.random().toString(),
          username: usernameInput,
          age: ageInput,
        }
      ]
    })
  } 

  return (
    <>
      <FormUser action={handlerSaveData}/>
      <ListUser data={userList}/>
    </>
  );
}

export default App;
