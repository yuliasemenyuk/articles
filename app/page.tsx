"use client";

import { Grammarly, GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { useState, FormEvent, useEffect } from "react";
import { generateArticles } from " @component/utils/generateArticles";
import getArticle from " @component/utils/getArticle";
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";

type ArtData = {
  _id: string
  artTitle: string
  body: string
  meta?: object
};

export default function Home() {
  const [articles, setArticles] = useState<ArtData[]>([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const articlesList = async (id: string) => {
    console.log(id);
    const art = await getArticle(id);
    setArticles((prevArticles) => [...prevArticles, art]);
    console.log(articles);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true)
    const ids = await generateArticles(url);
     
    ids.forEach((id: string) => {
      articlesList(id);
    });
    setLoading(false)
  };

  return (
    <main className="px-6 pt-10 mx-auto">
      <section>
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
        {loading && (
          <div>
            <p>Plese wait. The magic is happening...</p>
            <ClipLoader />
          </div>
        )}

        {articles.length !== 0 && (
          <div>
            <ul>
              {articles.map((article) => (
                <li key={article._id}>
                  <h2>{article.artTitle}</h2>
                  <p>{article.body}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* {ids.length !== 0 && <Link href='articles'>Done! Click to get your articles</Link>} */}
      </section>
    </main>
  );
}