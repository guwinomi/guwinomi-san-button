import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

import AudioButton from "../components/AudioButton";
import QuestionModal from "../components/QuestionModal";
import { baseUrl, repositoryName, repositoryUrl } from "../lib/env";
import { sounds } from "../lib/sounds";

const Home: NextPage = () => {
  const [isOpenQiestionModal, setQuestionModalOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>グヰノミさんボタン</title>
        <meta name="description" content="グヰノミさんボタンだよ" />

        <meta property="og:title" content="グヰノミさんボタン" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="グヰノミさんボタンだよ" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={`${baseUrl}/favicon.png`} />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="container pt-4 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
          グヰノミさんボタン
          <button
            type="button"
            className="m-3"
            onClick={() => setQuestionModalOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isOpenQiestionModal && (
            <QuestionModal close={() => setQuestionModalOpen(false)} />
          )}
        </h1>

        <ul className="flex flex-wrap">
          {sounds.map((s, i) => (
            <li key={i} className="flex-initial p-1">
              <AudioButton src={s.src}>{s.text}</AudioButton>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-2xl text-center">
          <a
            title={repositoryName}
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="inline" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
