import React, { FC } from "react";

type Props = { close: () => void };

const QuestionModal: FC<Props> = (props) => {
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={props.close}
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="site_description mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="description_title text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  グヰノミさんボタンについて
                </h3>
                <div className="description_body mt-2 text-sm text-gray-500">
                  <div className="description_element mt-3">
                    <div className="element_title">【サイト説明】</div>
                    <div className="element_body">
                      グヰノミさんの音声を再生することができるサイトです。
                      グヰノミ、および有志（以下「制作元」）によって開発、運営されています。
                      GitHubのリポジトリも公開していますので、開発、運営に興味がある場合は制作元までご連絡ください。
                    </div>
                  </div>

                  <div className="description_element mt-3">
                    <div className="element_title">【利用規約】</div>
                    <div className="element_body">
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

                  <div className="description_element mt-3">
                    <div className="element_title">【問い合わせ】</div>
                    <div className="element_body">
                      不明な点、不具合報告や感想はこちらまで グヰノミ
                      VRChat:guwinomi Discord:グヰノミ#8265 Twitter:@ci12mori
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={props.close}
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
