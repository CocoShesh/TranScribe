import React from "react";

interface Language {
  id: number;
  name: string;
  code: string;
}

interface languageProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const languages: Language[] = [
  {
    id: 1,
    name: "Tagalog",
    code: "ta",
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
}: languageProps) => {
  const handleSelectedLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      <section className="flex items-center justify-between w-full px-3 text-xl">
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
    </>
  );
};

export default Translation;
