import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList,setUsersList]=useState([])

  const addUserHandler=(usr,uage)=>{
    setUsersList((prevState)=>{
      return [...prevState,{name:usr,age:uage,id:Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
