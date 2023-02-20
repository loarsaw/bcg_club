import { useLanguage } from "@/hooks/useLanguage";
import { socialMedia } from "@/mock/footer";
import Link from "next/link";
import React from "react";

type Props = {};

const SocialColumn = (props: Props) => {
  const { t } = useLanguage();
  return (
    <div className="mt-8 rtl:md:mt-0 ltr:xl:mt-0 rtl:lg:mr-12 ltr:xl:ml-12 ltr:2xl:ml-48">
      <div>
        <h2 className="text-md sm:text-lg">{t.beWithUs}</h2>
        <div className="flex mt-3">
          {socialMedia.map((SocialItem) => {
            return (
              <Link href={SocialItem.href} key={SocialItem.name} legacyBehavior>
                <a
                  className="px-2 opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  aria-label={SocialItem.name}
                >
                  <SocialItem.icon
                    style={{
                      fontSize: "2rem",
                      color: "inherit",
                    }}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-md sm:text-lg">{t.emailRegister}</h2>
        <form
          className="flex items-center flex-wrap sm:flex-nowrap mt-4"
          action="
        onSubmit={(e)=>{
          e.preventDefault()
        }}
        "
        >
          <input
            type="text"
            placeholder={t.yourEmail}
            className=" w-full py-3 px-4 outline-none rounded-lg sm:rounded-none ltr:sm:rounded-tl-lg ltr:sm:rounded-bl-lg rtl:sm:rounded-tr-lg rtl:sm:rounded-br-lg shadow-md sm:shadow-none focus:shadow-sm"
          />

          <button className="outline-none py-3 px-4 w-full sm:w-auto mt-2 sm:mt-0 rounded-lg sm:rounded-none md:w-auto bg-palette-primary text-palette-side rtl:sm:rounded-tl-lg rtl:sm:rounded-bl-lg ltr:sm:rounded-tr-lg ltr:sm:rounded-br-lg">
            {t.register}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SocialColumn;
