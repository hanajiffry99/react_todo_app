import React, { useState } from "react";
import { Container,Row,Col, Form, Button } from "react-bootstrap";
import data from "./data.json";
import "./Table.css";

function Table(){

    const [tasks,settasks]=useState(data);

    return(
        <>
        <h1>This is Todo page</h1>
        <Container>
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
                    </tr>
                    ))}
                </tbody>
            </table>
        </Container>
        <Form>
            <label>Date</label><br/>
            <input type="datetime-local" placeholder="Enter the date"/><br/><br/>
            <label>Task</label><br/>
            <input type="text" placeholder="Enter the task"/><br/><br/>
            <label>Status</label><br/>
            <input type="text" placeholder="Enter the status"/><br/><br/>
            <Button >Add Task</Button>
        </Form>
        </>
    )
}

export default Table;