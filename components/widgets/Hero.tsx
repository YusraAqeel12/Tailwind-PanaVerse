import Image from "next/image";
import hero from "../../public/hero-poster.webp"
import Button from "../shared/Button"
import Wrapper from "../layout/Wrapper";

export default function Hero() {
  return (
    <section className="  ">
      <Wrapper>
      <div className="flex flex-col md:flex-row  items-center ">
        {/* Heading and text */}
        <div className=" flex-1">
          <h5 className=" text-teal-800 font-semibold text-lg mb-2 sm:mt-4  ">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h5>
          <h1 className=" text-black text-4xl sm:text-5xl font-bold  leading-snug ma">Certified Web 3.0 and Metaverse Developer</h1>
          <p className="text-gray-900 text-l font-sans  mt-6 font-normal">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet.</p>
          <p className="text-gray-900 text-l font-sans font-normal mt-2">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies.</p>
          </div>

          
        {/* Picture */}
        <div className="flex-1 ">
          <Image src={hero} alt="hero-poster" />
        </div>
      </div>
      </Wrapper>

    </section>
  )
}
//Mobile sai start karo , waisay flex column ho medium screen sai flex row karo
//small screen sai jao toh 6px kardo
//breakpoint banado for each