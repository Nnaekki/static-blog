import {ImMail3, ImInstagram, ImTwitter, ImWhatsapp } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./_child/Newsletter";

const Footer = () => {

  return (
    <footer className="bg-green-50">
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
          <Link href={"/"}>
              <ImMail3 color="#888888" />
            </Link> 
            <Link href={"/"}>
              <ImInstagram color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImTwitter color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImWhatsapp color="#888888" />
            </Link>
          </div>

          <p className="py-5 text-gray-400 sm:text-black">
            Copyright &copy; 2023 All rights reserved | Made by SandieCodes
          </p>
          <p className="text-gray-400  sm:text-black text-center">
            Terms & Conditions{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
