import React, { useCallback } from "react";
import useStore from "../../store/use-store";
import useLanguage from "../../store/use-language";
import languages from "../../store/languageList";
import { languageSwitchTitle } from "../../data/language";
import "./style.css";

function LanguageSwitch() {
  const store = useStore();

  const callbacks = {
    setLanguage: useCallback(
      (language) => store.actions.language.setLanguage(language),
      [store]
    ),
  };

  return (
    <div className="Language-switch">
      {useLanguage(languageSwitchTitle)}
      {languages.map((language) => {
        return (
          <div
            className="Language-switch__item"
            key={language}
            onClick={() => callbacks.setLanguage(language)}
          >
            {language}
          </div>
        );
      })}
    </div>
  );
}

export default LanguageSwitch;
