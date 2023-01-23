import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from "./AddUser.module.css"
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props =>{

    const [username,setUsername]=useState('');
    const [age,setAge]=useState('');
    const [error,setError]=useState()

    const usernameHandler=(event)=>{
        setUsername(event.target.value);
    }
    const ageHandler = (event) => {
      setAge(event.target.value);
    };

    const addUserHandler=(event)=>{
        event.preventDefault();

        if(username.trim().length===0 || age.trim().length===0 || +age<1){ // force converting age(ie a string) to number
            setError({
                title:'Invalid Input',
                message:'Please enter a valid name and age'
            })
            return
        }

        console.log(username+" "+age)
        props.onAddUser(username,age)

        setUsername('')
        setAge('')
    }

    const errorHandler=()=>{
        setError(null)
    }

    return (
      <div>
        {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />}
        <Card className={classes.input}>
          <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input value={username} id="username" type="text" onChange={usernameHandler} />
            <label htmlFor="age">Age</label>
            <input value={age} id="age" type="number" onChange={ageHandler} />

            <Button type="Submit">Add User</Button>
          </form>
        </Card>
      </div>
    );
}

export default AddUser