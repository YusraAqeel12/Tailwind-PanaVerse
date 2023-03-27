import React, { FC } from 'react'
//interface hai Props ka 
// ab ts ko batana hai kai quauterbox components jahaan bhee use karain waahan interface props laazmi aana cahiyae warna error daiday
//Fc aik functional component hai usmai iprops paas kardiya hai
interface IProps{
    Heading : string ,
    Paragraph : string ,
    Number : number  ,
}
const QuarterBox :FC<IProps> = ({Heading , Paragraph ,Number}) =>{
    return(
        <div>
             <div className=" border rounded-md flex-1 relative flex flex-col justify-center px-8 py-12">
            <h4 className="font-bold text-lg">{Heading}</h4>
            <p className="mt-2 text-gray-900">{Paragraph}</p>
            <div className=" text-gray-300 absolute top-0 text-[150px] font-bold right-12 -z-10">{Number}</div>
            </div>



        </div>
    )
}
export default QuarterBox