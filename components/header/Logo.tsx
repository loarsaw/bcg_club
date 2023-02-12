import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="block md:flex items-center justify-center w-full flex-grow md:flex-grow-0">
        <Image
          src="/images/logo.png"
          alt="shop"
          width={120}
          height={35}
          // objectFit="contain"
          style={{ objectFit: "contain" }}
          className="cursor-pointer md:ltr:-mr-3"
        />
      </div>
    </Link>
  );
};
export default Logo;
