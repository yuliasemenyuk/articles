'use client'

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { useState, FormEvent } from "react";
import styles from './page.module.css';


export default function Home() {

  const [url, setUrl] = useState('');


  const handleSubmit =  async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(url);
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleSubmit}>
        <label>URL</label>
        <input 
          type="text" 
          name="url" 
          placeholder="Enter URL to scope titles"
          autoComplete="off"
          autoFocus
          required
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}/>

        <button
        type="submit"
        // disabled={isLoading}
        >
        Generate articles
      </button>
      </form>
    </main>
  )
}
