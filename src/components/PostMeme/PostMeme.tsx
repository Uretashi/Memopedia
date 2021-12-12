import React from "react";
import { useForm } from "react-hook-form";

import styles from './PostMeme.module.css';
import accountCreatedLogo from '../../assets/img/account_created.png'

require('dotenv').config();


export default function PostMeme() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {

        // post data
        const formData = new FormData();
        formData.append('file', data.file[0]);
        formData.append('url', data.file[0].name);
        formData.append('title', data.title);
        formData.append('tags', data.tags);
        formData.append('description', data.description);
        formData.append('author_id', JSON.parse(localStorage.getItem('user')).id_user);
        formData.append('like_nb', '0');
        formData.append('publication_date', new Date().toLocaleString("en-US").split(',')[0]);

        // request configuration
        const requestOptions = {
            method: 'POST',
            header: {
                'Content-Type': undefined
            },
            body: formData
        }

        fetch(`${process.env.REACT_APP_API_URL}/memes/postMeme`, requestOptions)
            .then(response => response.json())
            .then(responseJson => {
                if(responseJson.status === 201) {
                    document.getElementById('form-div').innerHTML= validatedFormHTML(accountCreatedLogo);
                }
            });
    };

    // HTML for server response validation
    const validatedFormHTML = (accountCreatedLogo: string): any => {
        return (`
            <div style="margin: 8% 0;">
                <img src=${accountCreatedLogo} style="margin-bottom: 3%" alt="meme posted" />
                <h4>Meme posté avec succès !</h4>
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
              <input type="string" {...register("tags", { required: true, pattern: new RegExp(/^(#[0-9a-zA-ZÀ-ÿ]{2,20})+$/) })} />
              { errors.tags && errors.tags.type === 'pattern' && (
                  <span className={styles.errorSpan}>Les tags doivent être une série de mot précédé d'un "#" (#tag1#tag2 etc...)</span>
              )}
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
