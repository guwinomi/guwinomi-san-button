import React from "react";

import AudioButton from "./components/AudioButton";
import { sounds } from "./sounds";

const App: React.FC = () => {
  return (
    <div className="container mx-auto pt-4">
      <h1 className="text-gray-800 text-4xl font-bold text-center mb-8">
        グヰノミさんボタン
      </h1>

      <ul className="flex flex-wrap">
        {sounds.map((s, i) => (
          <li key={i} className="flex-initial p-1">
            <AudioButton src={s.src}>{s.text}</AudioButton>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
