import {  DRUK_WIDE } from "@/pages/_app";
import Image from "next/image";
import main_mobile from '../../public/img/02Header/main_mobile.webp'
import main from '../../public/img/02Header/main.webp'
import coin_1 from '../../public/img/02Header/coin_1.webp'
import coin_2 from '../../public/img/02Header/coin_2.webp'
import coin_3 from '../../public/img/02Header/coin_3.webp'
import coin_4 from '../../public/img/02Header/coin_4.webp'
import menu from '../../public/img/02Header/menu.webp'
import menu_mobile from '../../public/img/02Header/menu_mobile.webp'
import burger from '../../public/img/02Header/burger.svg'
import cross from '../../public/img/02Header/cross.svg'
import { useState } from "react";
import Social from "../elements/Social";


export default function Header(){
    const [ isHidden, setIsHidden ] = useState<boolean>(true)
    return(
        <section id="02Header" className="_section relative bg-_green p-1 md:p-4">
            <div className="relative flex flex-col bg-_black rounded-3xl">
                <div className="absolute _animate-moveDown -top-1/4 -left-1 md:-left-4 h-full md:h-[130%] w-full md:bg-[url('/img/eclipse.webp')] bg-[url('/img/eclipse_mobile.webp')] bg-contain bg-left bg-no-repeat"></div>
                <div className="absolute _animate-moveUp bottom-0 -right-1 md:-right-4 scale-x-[-1] h-full md:h-[130%] w-full md:bg-[url('/img/eclipse.webp')] bg-[url('/img/eclipse_mobile.webp')] bg-contain bg-left bg-no-repeat"></div>
                <div className="_wrapper w-full">
                    <div className="flex justify-between my-4 md:my-8 xl:my-10">
                        <div className="">
                            <Social />
                        </div>
                        <div className="flex flex-col justify-center pb-1 relative z-40 cursor-pointer" onClick={()=> setIsHidden(false) }>
                            <Image src={burger} alt="Menu" className="w-[39px] md:w-auto"/>
                        </div>
                    </div>
                </div>

                {/* Выдвижное меню */}
                <div className={`${isHidden ? 'hidden' : 'block'} absolute z-50 top-0 left-0 w-full min-h-screen bg-_green rounded-b-2xl `}>
                {/* md:bg-[url('/img/02Header/menu.webp')] bg-[url('/img/02Header/menu_mobile.webp')] bg-cover bg-bottom md:bg-right-bottom bg-no-repeat */}
                    <div className="">
                        <Image src={menu} alt="" className="absolute max-w-[1200px] hidden md:block bottom-0 right-0 w-full" />
                        <Image src={menu_mobile} alt="" className="absolute md:hidden bottom-0 right-0 w-full" />
                        <menu className={`${DRUK_WIDE} _wrapper relative z-50 text-[24px] xs:text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[66px] text-black`}>
                            <li className="flex justify-end py-[13px] sm:py-[26px] md:py-[39px]">
                                <Image className="cursor-pointer w-[30px] h-[30px] sm:w-[49px] sm:h-[49px]" src={ cross } alt="menu-toggle" onClick={()=> setIsHidden(true) }/>
                            </li>
                            <li className="flex justify-end md:justify-start w-full" onClick={()=> setIsHidden(true) }><a href="#02Header">HOME</a></li>
                            <li className="flex justify-end md:justify-start w-full"><a href="#04Tokenomics">TOKENOMICS</a></li>
                            <li className="flex justify-end md:justify-start w-full"><a href="#05Partners">PARTNERS</a></li>
                            <li className="flex justify-end md:justify-start w-full"><a href="#06Roadmap">ROADMAP</a></li>
                            <li className="flex justify-end md:justify-start w-full"><a href="#07Feedback">CONTACTS</a></li>
                            <li className="flex justify-end md:justify-start w-full"><a href="https://instruction.hulkmemcoach.top">WHITE PAPER</a></li>
                            <li className="flex justify-end md:justify-start w-full py-[60px] xl:py-[100px] ">
                                <Social />
                            </li>
                        </menu>
                    </div>
                    
                </div>
                {/* Выдвижное меню */}

                <div className="w-full max-w-[1200px] mx-auto relative flex flex-col justify-between">
                    <p className="mt-4 block w-full text-center font-extrabold uppercase text-_green _text-14-20">
                        Pump yourself up with our team
                    </p>
                    <h1 className={`${DRUK_WIDE} relative z-40 mt-4 block leading-[90%] w-full text-center text-[50px] xs:text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px]`}>
                        <span className="text-_green">HULK</span> MEM COACH
                    </h1>

                    <div className="mt-8 w-full pb-16 md:pb-[5%] md:px-[5%]">
                        <div className="relative z-20 w-auto h-auto">
                            <div className="absolute w-full h-[200%] md:h-[140%] -z-50 bottom-0 bg-[url('/img/bg.webp')] bg-contain bg-no-repeat bg-bottom">

                            </div>
                            <Image src={main} alt="hulk" className="hidden md:block relative z-40" />
                            <Image src={main_mobile} alt="hulk" className="w-full md:hidden relative z-40" />

                            <Image src={coin_1} alt="Mem-Coin" className="_animate-scale w-[15%] absolute -bottom-[1%] md:-bottom-[6%] left-[2%] md:left-[8%] z-20"/>
                            <Image src={coin_2} alt="Mem-Coin" className="_animate-scale w-[15%] absolute -bottom-[1%] md:-bottom-[6%] left-[12%] md:left-[18%] z-20" />
                            <Image src={coin_4} alt="Mem-Coin" className="_animate-scale w-[15%] absolute -bottom-[1%] md:-bottom-[6%] right-[0%] md:right-[6%] z-20"/>
                            <Image src={coin_3} alt="Mem-Coin" className="_animate-scale w-[15%] absolute -bottom-[1%] md:-bottom-[6%] right-[8%] md:right-[16%] z-20"/>

                            <button className="w-[95%] md:w-auto absolute uppercase bg-_green -bottom-14 md:bottom-[1%] font-extrabold text-black py-5 px-10 xl:py-7 xl:px-20 rounded-[20px] left-1/2 md:left-[51%] _text-14-20 z-0 md:z-50 transform -translate-x-1/2 ">Buy now</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}