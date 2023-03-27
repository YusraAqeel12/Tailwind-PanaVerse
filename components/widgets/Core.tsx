import Wrapper from "../layout/Wrapper"
import React from "react"
import QuarterBox from "../shared/QuarterBox"
 
{/* create an array usmai objects banalo */}
const CoreObjects=[
  {
    Heading : " Quarter 1" ,
    Paragraph : "CS:101 Object Oriented Programming using typescript" ,
    Number : 1
  } ,
  {
    Heading : " Quarter 2" ,
    Paragraph : "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform" ,
    Number : 2
  },
  {
    Heading : " Quarter 3" ,
    Paragraph : "$-101: Dollar Making BootCamp - Full-Stack Template and API Product Development " ,
    Number : 3
  } ]

const CoreObjects9 = [
   {
    Heading : " Quarter 4" ,
    Paragraph : "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps" ,
    Number : 4
  } ,
  {
    Heading : " Quarter 5" ,
    Paragraph : "MV-361: Developing Planet-Scale Open Virtual and Augmented MetaVerse Experiences " ,
    Number : 5
  } ,
  
]


const Core = () => {
  return (
    <>
      <Wrapper>
        {/* Text Content */
          //yahaan contents ko mainay max width di hai kai is width sai aagay maira content na aayi 
        }

        <div className="mt-4 max-w-md mb-4">
          <div>
            <h4 className="text-teal-800 font-semibold text-lg">Program Of Studies</h4>
            <h1 className="text-black text-3xl font-bold">Core Courses</h1>
            <h1 className="text-black text-3xl font-bold">(Common in all Specialization): </h1>
            <p className="text-gray-900  text-l  font-sans font-normal mt-4 ">Every participant will start by competing in following three courses .</p>
          </div>
        </div>

        {/* Boxes 
        //width % mai di hai  12 columns mai sai chaar dai di
        span mai absolote mai jo bhee hoga wo width aur heighgt nahi laiga relative 
        width aur height box kai hisaab sai hogi
        relative ki width aur height hoti hai absolte ki width and height nahi hoti
        relative ko parent elements mai set karo warna it will stick to the header
        peechay ki taraf cheez kai liyae we will use z index 
        */
        
        //waisay flex-columns rahay medium screen sai flexrow mai aagai
        //flex one sai teenon items nai screen mai equally widhth lai li
        }
      

        <div className="flex gap-4 flex-col  md:flex-row">
         {/**  {CoreObjects.map((items,i)=>(
            <div className=" border rounded-md flex-1 relative flex flex-col justify-center px-8 py-12">
            <h4 className="font-bold text-lg">{items.Heading}</h4>
            <p className="mt-2 text-gray-900">{items.Paragraph}</p>
            <div className=" text-gray-300 absolute top-0 text-[150px] font-bold right-12 -z-10">{items.Number}</div>
            </div>
          ))} */}

              {CoreObjects.map((items,i)=>(
                <div>
                  <QuarterBox 
                  Heading={items.Heading}
                  Paragraph={items.Paragraph}
                  Number={i+1}/>


                </div>
              ))}
          
          
          
          </div>
      

      

      </Wrapper>
      </>

  )
}
//absolute hai uspai flex nahi lagta

export default Core