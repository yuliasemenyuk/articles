'use client'
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { useState, FormEvent} from "react";
import { generateArticles } from " @component/utils/generateArticles";
import getArticle from " @component/utils/getArticle";
import ClipLoader from "react-spinners/ClipLoader";

type ArtData = {
  _id: string
  artTitle: string
  body: string
  meta?: object
  image?: string
};

export default function Home() {
  const [articles, setArticles] = useState<ArtData[]>([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const articlesList = async (id: string) => {
    console.log(id);
    const art = await getArticle(id);
    console.log(art);
    
    setArticles((prevArticles) => [...prevArticles, art]);
  };

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true);
    const ids = await generateArticles(url);
     
    ids.forEach((id: string) => {
      articlesList(id);
    });
    setLoading(false);
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
          >
            Generate articles
          </button>
        </form>
        {loading && (
          <div className="flex items-center justify-center">
            <p className="mr-2">Please wait. The magic is happening...</p>
            <ClipLoader />
          </div>
        )}

        {articles.length !== 0 && (
         <div>
         <ul>
           {articles.map((article) => (
             <li key={article._id} className="mb-8">
               <h2 className="text-2xl font-bold mb-2">{article.artTitle}</h2>
               <img src={article.image} alt={article.artTitle} />
               <GrammarlyEditorPlugin clientId="client_JqTPMhBNkcRiyaAeyiusv4" >
               <p className="prose dark:prose-dark mb-4">{article.body}</p>
               </GrammarlyEditorPlugin>
             </li>
           ))}
         </ul>
       </div>
        )}
      </section>
    </main>
  );
}
