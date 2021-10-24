import type { NextPage } from "next";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";

import AudioButton from "../components/AudioButton";
import { baseUrl, repositoryName, repositoryUrl } from "../lib/env";
import { sounds } from "../lib/sounds";

const Home: NextPage = () => {
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
