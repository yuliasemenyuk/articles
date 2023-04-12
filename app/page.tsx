"use client";

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { useState, FormEvent } from "react";


export default function Home() {
  const [url, setUrl] = useState("");

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(url);
  };

  return (
    <main className="px-6 pt-10 mx-auto">
      <form onSubmit={handleSubmit} className="mb-6">
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          URL
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          name="url"
          placeholder="Enter URL to scope titles"
          autoComplete="off"
          autoFocus
          required
          value={url}
          onChange={(evt) => setUrl(evt.target.value)}
        />

        <button
          className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded hover:bg-blue-700 focus:bg-blue-700"
          type="submit"
          // disabled={isLoading}
        >
          Generate articles
        </button>
      </form>
    </main>
  );
}
