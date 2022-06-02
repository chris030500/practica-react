import React, {useState} from 'react';
import {Form, Button, FormInput, Image} from 'semantic-ui-react';
import "./LoginForm.scss";
import instaclone from './usuario.png'

export default function LoginForm() {
  return (
    <>
        <Image src={instaclone} className='image-fom' />
        <h2 className='login-form-title'>Ingresa al listado de personas</h2>
        <Form className="login-form" >
            <FormInput 
                type="text" 
                placeholder="Correo" 
                name="email" 
            />
            <FormInput 
                type="password" 
                placeholder="Contraseña" 
                name="password" 
            />
            
        </Form>
    </>
  )
}

function initialValues(){
    return{
        email:"",
        password:"",
    };
}