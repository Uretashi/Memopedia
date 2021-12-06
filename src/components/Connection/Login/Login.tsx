import React, {useContext} from 'react';
import styles from './Login.module.css';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";

require('dotenv').config();


export default function Login() {

    // import form validation functions from useForm
    const { register, handleSubmit } = useForm();
    // redirection function
    const navigate = useNavigate();
    // user context (data update)
    const userContext = useContext(UserContext);

    const onSubmit = (data: any) => {
        // request configuration
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data })
        }

        // POST request for login
        fetch(`${process.env.REACT_APP_API_URL}/account/login`, requestOptions)
            .then(response => response.json())
            .then(responseJson => {
                // if account successfully founded
                if(responseJson.status === 302) {
                    // store the user account information in the local storage
                    localStorage.setItem('user', JSON.stringify(responseJson.res));
                    // set the user logged account
                    userContext.setUser(responseJson.res);
                    // home redirection
                    navigate('/');

                // if account not found
                } else {
                    // show an error message
                    document.getElementById('accountNotFound').innerText = 'Votre E-Mail/Mot de passe est incorrect';
                }
            });
    }

    return (
        <div className={styles.Login}>
            <form className={styles.accountForm} onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input type="email"  {...register("email", { required: true })}/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" {...register("password", { required: true })}/>
                </div>

                <div>
                    <input className={styles.lastInput} type="submit" />
                </div>
            </form>
            <h5 id="accountNotFound"> </h5>
        </div>
    )
}
