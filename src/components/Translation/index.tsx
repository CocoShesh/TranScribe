import React from "react";

interface Language {
  id: number;
  name: string;
  code: string;
}

interface languageProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
  translate: any[];
}

const languages: Language[] = [
  {
    id: 1,
    name: "Tagalog",
    code: "fil",
  },
  {
    id: 2,
    name: "English",
    code: "en",
  },
];

const Translation = ({
  selectedLanguage,
  setSelectedLanguage,
  translate,
}: languageProps) => {
  const handleSelectedLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      <section className="flex flex-col items-center h-full w-full px-3 text-xl">
        <section className="flex justify-between  w-full items-center">
          <h1>Translation</h1>

          <select
            name="language"
            id="language"
            className="w-[200px] h-10 border px-3"
            value={selectedLanguage}
            onChange={handleSelectedLanguage}
          >
            {languages.map(language => (
              <option key={language.id} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        </section>
        <section className="h-[200px] flex items-center justify-center">
          {translate.map((item, index) => {
            return <div key={index}>{item.translations[0].text}</div>;
          })}
        </section>
      </section>
    </>
  );
};

export default Translation;
