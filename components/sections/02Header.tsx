import {  DRUK_WIDE } from "@/pages/_app";
import Image from "next/image";
import xxx from '../../public/img/02Header/xxx.svg'
import main from '../../public/img/02Header/main.webp'
import main_mobile from '../../public/img/02Header/main_mobile.webp'
import burger from '../../public/img/02Header/burger.svg'
import cross from '../../public/img/02Header/cross.svg'
import { useState } from "react";
import Social from "../elements/Social";
import Ticker from "../elements/ticker";

export default function Header(){
    const [ isHidden, setIsHidden ] = useState<boolean>(true)
    return(
        <section id="02Header" className="_section bg-_green p-4">
            <div className="relative flex flex-col bg-_black rounded-3xl">
                <div className="_wrapper w-full">
                    <div className="flex justify-between my-4 md:my-8 xl:my-10">
                        <div className="hidden md:block">
                            <Social />
                        </div>

                        <div className="flex flex-col justify-center pb-1 relative z-40" onClick={()=> setIsHidden(false) }>
                            <Image src={burger} alt="Menu" className="w-[39px] md:w-auto"/>
                        </div>
                    </div>
                </div>

                {/* Выдвижное меню */}
                <div className={`${isHidden ? 'hidden' : 'block'} absolute z-50 top-0 left-0 w-full min-h-screen bg-_green rounded-b-2xl `}>
                    <menu className={`${DRUK_WIDE} _wrapper text-[40px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[66px] text-white`}>
                        <li className="flex justify-end py-[13px] sm:py-[26px] md:py-[39px]">
                            <Image className="cursor-pointer w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                        </li>
                        <li className="flex justify-end w-full" onClick={()=> setIsHidden(true) }><a href="#02Header">HOME</a></li>
                        <li className="flex justify-end w-full"><a href="#03Mission">MISSION</a></li>
                        <li className="flex justify-end w-full"><a href="#04Tokenomics">TOKENOMICS</a></li>
                        <li className="flex justify-end w-full"><a href="#05Partners">PARTNERS</a></li>
                        <li className="flex justify-end w-full"><a href="#06Roadmap">ROADMAP</a></li>
                        <li className="flex justify-end w-full"><a href="#07Feedback">CONTACTS</a></li>
                        <li className="flex justify-end w-full"><a href="https://wp.syndicatecrypto.io">WHITE PAPER</a></li>
                        <li className="flex justify-end w-full py-[60px] xl:py-[100px] ">
                            <Social white/>
                        </li>
                    </menu>
                </div>
                {/* Выдвижное меню */}

                <div className="w-full mx-auto relative flex flex-col justify-between">
                    <p className="block w-full text-center">
                        Pump yourself up with our team
                    </p>
                    <h1 className="block w-full text-center">
                        HULK MEM COACH
                    </h1>
                    <div>
                        
                    </div>
                </div>

                <div className="w-full relative z-40">
                    <Ticker />
                </div>
            </div>
        </section>
    )
}