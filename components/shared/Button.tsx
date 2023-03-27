import React, { FC } from "react"
const Button: FC<{ text: string }> = ({text}) => {
    //const {text}=props
    return (
        //  {text}
       <div className="bg-[#00616c] text-white font-semibold px-3 py-4 rounded-full">
        {text}
       </div>
        
    )
}
export default Button
//Fc aaraha hai react sai, arrow function mai type <> aisay aati hai, ab type define karo
//jo bhee ham paas karahay hain hero section mai buttonka name wo props mai recieve hoga
//thats how you would do but destructuring karni hao toh props ki jagah karo 
//you would pass props in arg (props) text ki jagah