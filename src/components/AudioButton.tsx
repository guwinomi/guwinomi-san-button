import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  src: string;
};

const AudioButton: React.FC<Props> = (props) => {
  const audio = new Audio(props.src);
  const handleClick = () => {
    if (!audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    }
    audio.play();
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {props.children}
    </button>
  );
};

export default AudioButton;
