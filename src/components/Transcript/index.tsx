type TranscriptProps = {
  transcript: string;
};

const Transcript = ({ transcript }: TranscriptProps) => {
  return (
    <>
      <section className="h-screen w-full flex flex-col gap-5 mt-32 items-center dark:text-white">
        <h1>{transcript}</h1>
      </section>
    </>
  );
};

export default Transcript;
