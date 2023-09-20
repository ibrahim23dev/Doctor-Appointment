import React from 'react';
import "../Asset/Css/bootstrap.min_2.css";
import "../Asset/Css/Registation.css";
import {Link} from "react-router-dom"
import {Form} from "antd";

const Registation = () => {
    const onFinishhandelar=(values)=>{
        console.log(values)
    }

    return (
        <>
            <div className="container1">
               <Form layout="vertical" onFinish={onFinishhandelar} className="register-form">
                   <h3 className="text-center">Register Form</h3>
            <Form.Item label="Name" name="name">
                <input type="text" required/>
            </Form.Item>
                   <Form.Item label="Email" name="email">
                       <input type="text" required/>
                   </Form.Item>
                   <Form.Item label="Password" name="password">
                       <input type="password" required/>
                   </Form.Item>
                   <Form.Item label="Conforim Password" name="password">
                       <input type="password" required/>
                   </Form.Item>
                    <Link to="/login" className="ms-2">Already User Login Here</Link>
                   <button className="btn btn-primary" type="submit">Registation</button>
               </Form>
            </div>
        </>
    );
};

export default Registation;