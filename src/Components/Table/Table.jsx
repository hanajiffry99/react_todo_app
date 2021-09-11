import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Container,Row,Col, Form, Button,Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import "./Table.css";

function Table(){

    const [tasks,settasks] = useState(data);
    const [add,setadd]=useState({
        date:'',task:'',status:' '
    });//values used for name tag in form are used here


    //Adding a new task
    const handleadd= (e) =>
    {
        e.preventDefault();
        
        const fieldname = e.target.getAttribute('name');
        const newformdata = {...add};

        newformdata[fieldname]=e.target.value;
        setadd(newformdata);
    };


    //displayng the newly addedtask in table
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

    //adding model
    const [isOpen, setIsOpen] = useState(false);

    
    return(
        <>
        <h1>This is Todo page</h1>
        <Container>
        
        <button type="button" class="btn btn-primary" onClick={()=>setIsOpen(true)}>
        Add a new task </button>
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
                        <td><Button>Delete</Button>  <Button>Update</Button></td>
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

       
        <Modal show={isOpen} onHide={()=>setIsOpen(false)}>
            <Modal.Header>
                <Modal.Title>Add a new Task</Modal.Title>
                <Button onClick={()=>setIsOpen(false)}>
                    <span aria-hidden="true">&times;</span>
                </Button>
            </Modal.Header>
            <Modal.Body>
                <Form>
                   <label>Date</label><br/>
                   <input type="date" name="date" placeholder="Enter the date" required onChange={handleadd}/><br/><br/>
                   <label>Task</label><br/>
                   <input type="text" name="task" placeholder="Enter the task" required onChange={handleadd}/><br/><br/>
                   <label>Status</label><br/>
                   <input type="text" name="status" placeholder="Enter the status" required onChange={handleadd}/><br/><br/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button onClick={()=>setIsOpen(false)}>Cancel</Button>
               <Button onClick={handleaddsubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default Table;