import { useState } from "react";

type TranscriptProps = {
  transcript: string;
};

const Transcript = ({ transcript }: TranscriptProps) => {
  const [isTranscriptionView, setIsTranscriptionView] = useState(true);

  const toggleView = () => {
    setIsTranscriptionView(!isTranscriptionView);
  };

  return (
    <>
      <section className="mt-3 flex flex-col text-center w-[500px] h-[300px]">
        {isTranscriptionView ? (
          <h1 className="font-bold text-2xl text-[#183153] dark:text-white">
            Your Transcription
          </h1>
        ) : (
          <h1 className="font-bold text-2xl text-[#183153] dark:text-white">
            Your Translation
          </h1>
        )}
        <section className="flex w-full h-fit p-2 border-2 mt-5 border-[#0079ea] rounded-lg">
          <section className="w-full">
            <div
              className={` rounded-md p-2 cursor-pointer ${
                isTranscriptionView &&
                "font-bold bg-[#183153] dark:bg-white dark:text-black text-white"
              }`}
              onClick={toggleView}
            >
              Transcription
            </div>
          </section>
          <section className="w-full">
            <div
              className={`p-2 cursor-pointer rounded-lg ${
                !isTranscriptionView &&
                "font-bold bg-[#183153] dark:bg-white dark:text-black text-white"
              }`}
              onClick={toggleView}
            >
              Translation
            </div>
          </section>
        </section>
        <p className="mt-10">
          {isTranscriptionView ? "Transcription" : "Translation"}: {transcript}
        </p>
      </section>
    </>
  );
};

export default Transcript;
