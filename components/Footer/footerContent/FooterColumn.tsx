import Link from "next/link";
import React from "react";
import { footerContent } from "../../../mock/footer";
import { useLanguage } from "../../../hooks/useLanguage";

type Props = {};

const FooterColumn = (props: Props) => {
  const { t, locale } = useLanguage();
  return (
    <div className="flex justify-between flex-wrap flex-grow min-width-[800px] xl:rtl:pl-60">
      {footerContent.map((item) => {
        return (
          <div className="mt-6 md:mt-0">
            <h2 className="text-md rtl:border-r-4 ltr:border-l-4 border-palette-primary px-2">
              {t[item.title]}
            </h2>
            <div className="flex flex-col mt-2">
              {item.subtitles.map((subItem) => {
                return (
                  <a
                  className="text-sm text-palette-base/90 px-4 py-2 hover:text-palette-base/100"
                  >
                    {t[subItem.text]}
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumn;
