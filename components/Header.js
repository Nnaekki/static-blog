import Link from "next/link";


const Header = () => {
  const bg = {
    backgroundImage: "url('/images/header.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundheight: "100%",
    backgroundPosition: "cover"
  };
  return (
    <header style={bg}>
      <div>
        <Link href='/' passHref><h1 className="text-white uppercase text-5xl text-center justify-center pt-40">The Blog</h1></Link>
        <p className="text-white uppercase text-center text-xl justify-center px-10 py-20" >Hello and welcome to my online diary where I share my random thoughts</p>
      </div>
    </header>
  )
}

export default Header