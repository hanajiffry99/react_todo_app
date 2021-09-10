import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Container,Row,Col, Form, Button } from "react-bootstrap";
import data from "./data.json";
import "./Table.css";

function Table(){

    const [tasks,settasks] = useState(data);
    const [add,setadd]=useState({
        date:'',task:'',status:' '
    });//values used for name tag in form are used here

    const handleadd= (e) =>
    {
        e.preventDefault();
        
        const fieldname = e.target.getAttribute('name');
        const newformdata = {...add};

        newformdata[fieldname]=e.target.value;
        setadd(newformdata);
    };

    const handleaddsubmit = (e) =>{
        e.preventDefault();

        const newtask = {
            id: nanoid(),
            date : add.date,
            task : add.task,
            status : add.status,
        };

        const newtasks = [...tasks,newtask];
        settasks(newtasks);
    };

    return(
        <>
        <h1>This is Todo page</h1>
        <Container>
        <h2>Todo List</h2>
            <table>
                <thead>
                    <th>Date</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {tasks.map( (task) => (
                        <tr>
                        <td>{task.date}</td>
                        <td>{task.task}</td>
                        <td>{task.status}</td>
                        <td><Button>Add</Button>  <Button>Delete</Button>  <Button>Edit</Button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </Container>
        <hr/><h2>Adding a task</h2>
        <Form>
            <label>Date</label><br/>
            <input type="date" name="date" placeholder="Enter the date" required onChange={handleadd}/><br/><br/>
            <label>Task</label><br/>
            <input type="text" name="task" placeholder="Enter the task" required onChange={handleadd}/><br/><br/>
            <label>Status</label><br/>
            <input type="text" name="status" placeholder="Enter the status" required onChange={handleadd}/><br/><br/>
            <Button onClick={handleaddsubmit}>Add Task</Button>
        </Form>
        </>
    )
}

export default Table;