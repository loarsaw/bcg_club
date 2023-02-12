import React, { useState, FC } from "react";
import { useRouter } from "next/router";
import { useLanguage } from "@/hooks/useLanguage";
import Link from "next/link";
interface Props {
  language: string;
  onCloseBox: (isLangOpen: boolean) => void;
}

const LanguageItem: FC<Props> = ({ language, onCloseBox }) => {
  const { t, locale } = useLanguage();
  const router = useRouter();
  const [lang, setLang] = useState(locale);
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setLang(e.currentTarget.id);
  }
  return (
    <Link href={`${router.asPath}`} locale={language}>
      <div className="whitespace-nowrap flex justify-between items-center py-1 md:py-2">
        <div className="flex items-center" onClick={() => onCloseBox(false)}>
          <input
            type="radio"
            id={language}
            name="language"
            value={language}
            className="block accent-rose-600"
            checked={locale === language ? true : false}
            onChange={onChangeHandler}
          />
          <label
            htmlFor={language}
            className={`font-farsi mx-3 grow ${
              locale === language && "font-bold"
            }`}
          >
            {t[`${language}`]}
          </label>
        </div>
      </div>
    </Link>
  );
};

export default LanguageItem;
