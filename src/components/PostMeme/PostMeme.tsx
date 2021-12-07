import React from "react";
import styles from './PostMeme.module.css';
import { useForm } from "react-hook-form";
import accountCreatedLogo from '../../assets/img/account_created.png'

require('dotenv').config();

export default function PostMeme() {
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
    fetch(`${process.env.REACT_APP_API_URL}/postMeme`, requestOptions)
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
            <img src=${accountCreatedLogo} alt="meme posted" />
            <h2>Meme posté avec succès !</h2>
            <h3>Bievenue sur Memopedia ${userName} :)</h3>
        </div>
      `)
  }

  return (
      <div id="form-div">
          <form className={styles.accountForm} onSubmit={handleSubmit(onSubmit)}>
              <div>
                  <label htmlFor="title">Titre :</label>
                  <input type="string" {...register("title", { required: true })} />

                  <label htmlFor="tags">Tags :</label>
                  <input type="string" {...register("tags", { required: true })} />
              </div>

              <div>
                  <label htmlFor="description">Description :</label>
                  <input type="string"  {...register("description", { required: true })}/>

                  <label htmlFor="file">Fichier :</label>
                  <input type="file"  {...register("file", { required: true })}/>
              </div>

              <div>
                  <input type="submit" className={styles.submitButton}/>
              </div>
          </form>
      </div>
  );
}
