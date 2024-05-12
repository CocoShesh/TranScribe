import React from "react";

interface languageProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
  translation: any[];
}

const Translation = ({
  selectedLanguage,
  setSelectedLanguage,
  translation,
}: languageProps) => {
  const handleSelectedLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      <section className="flex flex-col  gap-10 h-full w-full px-3 text-xl">
        <section className="flex justify-between  h-[100px] w-full items-center">
          <h1>Translation</h1>

          <select
            name="language"
            id="language"
            className="w-[200px] h-10 border px-3 dark:bg-transparent  dark:text-white border-none outline-none"
            value={selectedLanguage}
            onChange={handleSelectedLanguage}
          >
            {languages.map(language => (
              <option
                key={language.id}
                value={language.code}
                className="dark:bg-[#183153] "
              >
                {language.name}
              </option>
            ))}
          </select>
        </section>
        <section className="h-full  pb-10 flex items-center justify-center">
          {translation.map((item, index) => {
            return <div key={index}>{item.translations[0].text}</div>;
          })}
        </section>
      </section>
    </>
  );
};

export default Translation;
