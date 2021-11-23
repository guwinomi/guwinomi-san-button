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

        <div class="site_description">
          <div class="description_title">グヰノミさんボタンについて</div>

          <div class="description_body">
            <div class="description_element">
              <div class="element_title">【サイト説明】</div>
              <div class="element_body">
                グヰノミさんの音声を再生することができるサイトです。
                グヰノミ、および有志（以下「制作元」）によって開発、運営されています。
                GitHubのリポジトリも公開していますので、開発、運営に興味がある場合は制作元までご連絡ください。
              </div>
            </div>

            <div class="description_element">
              <div class="element_title">【利用規約】</div>
              <div class="element_body">
                本サイトを利用した時点で本規約に同意したものとみなします。
                また、本サイトの開発、運営に携わる方にも本規約は適用されます。
                合理性のある範囲で本規約を一部変更する場合があります。
                本サイトの利用によって生じたトラブル、損失に関しては制作元は一切責任を負わないものとします。

                ・キャラクターのイメージを損なうような利用を禁止します。
                ・制作元、および第三者に不快感を与えるような利用を禁止します。
                ・本サイト内で使用されている音声、画像素材の再配布、販売を禁止します。
                ・制作元に直接の許可を得ない営利目的・商用目的の利用を禁止します。
                ・政治・宗教・反社会的・差別的なメッセージをもたせる利用を禁止します。
              </div>
            </div>

            <div class="description_element">
              <div class="element_title">【問い合わせ】</div>
              <div class="element_body">
                不明な点、不具合報告や感想はこちらまで
                グヰノミ
                VRChat:guwinomi
                Discord:グヰノミ#8265
                Twitter:@ci12mori
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
