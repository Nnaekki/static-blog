import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

const Format = ({ children }) => {
  return (
    <>
      <Head>
        <title>The Blog</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Format;
