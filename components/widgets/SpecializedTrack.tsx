import React from "react"
import Wrapper from "../layout/Wrapper"
import QuarterBox from "../shared/QuarterBox"
import ai from "../../public/ai.webp"
import am from "../../public/ambient.webp"
import cloud from "../../public/cloud.webp"
import geno from "../../public/genomics.webp"

export const ProgramData=[
  {
    header : " Web 3.0 (Blockchain) and MetaVerse Specialization " , 
    description : " This Web 3.0 and MetaVerse specialization focuses on developing full-stack Web 3.0 and MetaVerse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences." ,
    Quarter : [
      {
        header : " Quarter 4 " ,
       description : " W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps " , 
       number : 4 } ,

       {
        header : " Quarter 5 " ,
       description : " MV-361: Developing Planet-Scale Open Virtual and Augmented MetaVerse Experiences " , 
       number : 5 } 
    ]
  }  , 

  {
    header : " Artificial Intelligence (AI) and Deep Learning Specialization " , 
    description : " The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models. " ,
    Quarter : [
      {
        header : " Quarter 4 " ,
       description : " W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps " , 
       number : 4 } ,

       {
        header : " Quarter 5 " ,
       description : " MV-361: Developing Planet-Scale Open Virtual and Augmented MetaVerse Experiences " , 
       number : 5 } 
    ]
  }  , 

  {
    header : " Cloud-Native Computing Specialization    " , 
    description : "  The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes. " ,
    Quarter : [
      {
        header : " Quarter 4 " ,
       description : " W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps " , 
       number : 4 } ,

       {
        header : " Quarter 5 " ,
       description : " MV-361: Developing Planet-Scale Open Virtual and Augmented MetaVerse Experiences " , 
       number : 5 } 
    ]
  } , 
  {
    header : " Ambient Computing and IoT Specialization    " , 
    description : "  The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices " ,
    Quarter : [
      {
        header : " Quarter 4 " ,
       description : " W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps " , 
       number : 4 } ,

       {
        header : " Quarter 5 " ,
       description : " MV-361: Developing Planet-Scale Open Virtual and Augmented MetaVerse Experiences " , 
       number : 5 } 
    ]
  } 
  , 
  {
    header : " Genomics and Bioinformatics Specialization    " , 
    description : "  Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications. " ,
    Quarter : [
      {
        header : " Quarter 4 " ,
       description : " W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps " , 
       number : 4 } ,

       {
        header : " Quarter 5 " ,
       description : " MV-361: Developing Planet-Scale Open Virtual and Augmented MetaVerse Experiences " , 
       number : 5 } 
    ]
  } 
  , 
  {
    header : "  Network Programmability and Automation Specialization  " , 
    description : "  More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git. " ,
    Quarter : [
      {
        header : " Quarter 4 " ,
       description : " W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps " , 
       number : 4 } ,

       {
        header : " Quarter 5 " ,
       description : " MV-361: Developing Planet-Scale Open Virtual and Augmented MetaVerse Experiences " , 
       number : 5 } 
    ]
  } 
] 


export default function SpecializedTrack() {
  return (
    <>
    <section className="">
        <Wrapper>
                <div>
                <h2 className=" text-black text-4xl  font-bold  ">  Specialized Tracks: </h2>
                <p className=" text-gray-900  text-l  font-sans font-normal mt-3 mb-6 "> After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                </div>  

                <div className=" mt-10 flex gap-x-8 gap-y-8">
                <div className="shadow-xl rounded-xl border border-teal-500 px-4 py-8 gap-6  basis-8/12" >
                    <h4 className=" text-teal-800 font-semibold text-lg">Specialized Track</h4>
                    <h1 className="text-black text-3xl font-bold"> Web 3.0 (Blockchain) and MetaVerse Specialization</h1>
                    <p className="text-gray-900  text-l  font-sans font-normal">This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D MetaVerse client experiences.</p>
                    <div className=" ">
                    <QuarterBox
                    Heading={" Quarter 4 "}
                    Paragraph={" W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps"} 
                    Number={4}
                    />

                    <QuarterBox
                    Heading={" Quarter 5 "}
                    Paragraph={" MV-361: Developing Planet-Scale Open Virtual and Augmented MetaVerse Experiences "} 
                    Number={5}
                    />
                    </div>
                    </div>

                    <div className=" px-4 py-4 basis-4/12 ">
                      <div className=" flex items-center w-20 h-10">
                        <div className=" bg-black rounded"></div>
                        

                      </div>


                    </div>
                
                
                    
                
                </div>

              







        </Wrapper>

    </section>
    </>
  )
}