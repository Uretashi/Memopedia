import React from "react";
import styles from "./CreateAccount.module.css";
import { useForm } from "react-hook-form";
import accountCreatedLogo from '../../../assets/img/account_created.png'

require('dotenv').config();

export default function CreateAccount() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {

    // today's date in US format
    const todayDate = new Date().toLocaleString("en-US").split(',')[0];

    //
    data.creation_date = todayDate;
    data.last_login_date = todayDate;

    // request configuration
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data })
    }

    // POST request for account creation
    fetch(`${process.env.REACT_APP_API_URL}/account/createAccount`, requestOptions)
        .then(response => response.json())
        .then(responseJson => {
            // if account successfully created
            if(responseJson.status === 201) {
                document.getElementById('form-div').innerHTML= validatedFormHTML(accountCreatedLogo, data.first_name);
            }
        });
  };

  const validatedFormHTML = (accountCreatedLogo: string, userName: string): any => {
      return (`
        <div style="margin: 8% 0;">
            <img src=${accountCreatedLogo} alt="account created" />
            <h2>Compte créé avec succès !</h2>
            <h3>Bievenue sur Memopedia ${userName} :)</h3>
        </div>
      `)
  }

  return (
      <div id="form-div">
          <form className={styles.accountForm} onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <label htmlFor="first_name">Prénom :</label>
                  <input type="string" {...register("first_name", { required: true })} />

                  <label htmlFor="last_name">Nom de famille :</label>
                  <input type="string" {...register("last_name", { required: true })} />
              </div>

              <div>
                  <label htmlFor="email">Email :</label>
                  <input type="email"  {...register("email", { required: true })}/>

                  <label htmlFor="password">Mot de passe :</label>
                  <input type="password" {...register("password", { required: true })}/>
              </div>

              <div>
                  <input type="submit" />
              </div>
          </form>
      </div>
  );
}
