import React from "react";
import styles from "./CreateAccount.module.css";
import { useForm } from "react-hook-form";
import accountCreatedLogo from '../../../assets/img/account_created.png'

require('dotenv').config();

export default function CreateAccount() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {

    // create today's date in US format
    const todayDate = new Date().toLocaleString("en-US").split(',')[0] + '';

    data.creation_date = todayDate;
    data.last_login_date = todayDate;

    //
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data })
    }

    fetch(`${process.env.REACT_APP_API_URL}/account/createAccount`, requestOptions)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson)
            if(responseJson.status === 201) {
                document.getElementById('form-div').innerHTML= validatedFormHTML(accountCreatedLogo, data.first_name);
            }
        });
  };

  const validatedFormHTML = (accountCreatedLogo: string, userName: string): any => {
      return (`
        <div>
            <img src=${accountCreatedLogo} alt="account created" />
            <h2>Compte créé avec succès !</h2>
            <h3>Bievenue sur Memopedia ${userName} :)</h3>
        </div>
      `)
  }

  return (
      <div id="form-div">
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="string" {...register("first_name", { required: true })} />
              <input type="string" {...register("last_name", { required: true })} />
              <input type="email"  {...register("email", { required: true })}/>
              <input type="password" {...register("password", { required: true })}/>
              <input type="submit" />
          </form>
      </div>
  );
}
