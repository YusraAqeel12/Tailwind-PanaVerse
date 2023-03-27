import Image from "next/image"
import Link from "next/link"
import Panaverse from "../../public/Panaverse.png"
import Wrapper from "../layout/Wrapper"

export default function Header() {
  return (
    <Wrapper>
    <header className=" bg-white flex justify-between py-3 sticky top-0 items-center">
        
        {/* logo */}
        <div className="flex">
            <Image src={Panaverse} alt="Panaverse" height={90} width={90}/>

        </div>
        
         {/* Navigation Bar */}
        <div >
            <ul className="flex space-x-4 font-medium">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={" "}>Courses</Link></li>
            </ul>
        </div>


    </header>
    </Wrapper>


  )
}

//two divs banaingay first is logo sec is navigation bar
//dono div ko aik line mai laanay kai liyae i used flex in header
//list ko line mai laanay kai liaye i used flex in ul
//max w daidy apnay screen ko ab mx auto ka matlab marginx axis per sab center mai aajainagy
//py daido q kai uper sai chipka howa hai px daido 
//sticky top 0 sai header uper chipka hoga 
//horizontally justify  items centre vertically