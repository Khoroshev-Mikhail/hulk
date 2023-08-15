import { DRUK_WIDE } from "@/pages/_app";
import { useEffect, useState } from "react"
import supply from '../../public/img/04Tokenomics/supply.svg'
import security from '../../public/img/04Tokenomics/security.svg' 
import contract from '../../public/img/04Tokenomics/contract.svg'
import sell from '../../public/img/04Tokenomics/sell.svg'
import buy from '../../public/img/04Tokenomics/buy.svg'
import Image from "next/image";
import Ticker from "../elements/Ticker";

export default function Tokenomics(){
    const [isVisible, setIsVisible] = useState(false);
    const [timeOut, setTimeOut] = useState<NodeJS.Timeout | null>(null)
    const copy = () => {
        navigator.clipboard.writeText('0x57a6d8E214C0CAb9FF3fB5d38F940f52026BbD64')
        if(!isVisible){
            setIsVisible(true)
            if (timeOut) {
                clearTimeout(timeOut)
            }
            setTimeOut(setTimeout(() => setIsVisible(false), 3000))
        }
    }
    useEffect(() => {
        return () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
        }
      }, [timeOut])
    return(
        <section id="04Tokenomics" className="_section relative ">
            {isVisible && <div className="_animate-fade-out text-_black fixed bottom-0 left-0 z-50 w-full h-auto p-4 rounded-t-2xl text-center bg-_green _text-26-40">
                Copied!
            </div>}

            <div className="hidden md:block w-full h-[150%] absolute -bottom-1/4 -z-50 bg-[url('/img/eclipse.webp')] bg-contain bg-no-repeat"></div>
            <div className="hidden md:block w-full scale-x-[-1] h-[150%] absolute -top-1/2 -z-50 bg-[url('/img/eclipse.webp')] bg-contain bg-no-repeat"></div>
            <div className="md:hidden w-full h-full absolute left-0 -top-1/4 -z-50 bg-[url('/img/eclipse_mobile.webp')] bg-left-top bg-contain bg-no-repeat"></div>
            <div className="md:hidden w-full h-full absolute right-0 -bottom-[20%] scale-x-[-1] -z-50 bg-[url('/img/eclipse_mobile.webp')] bg-left-bottom bg-contain bg-no-repeat"></div>
            {/* <div className="md:hidden w-full h-full absolute left-0 -bottom-1/4 -z-50 bg-[url('/img/04Tokenomics/eclipse_l_b_mobile.webp')] bg-left-bottom bg-contain bg-no-repeat"></div> */}

            <div className="_wrapper">
            <h2 className={`${DRUK_WIDE} _h`}>
                OUR <span className="text-_green"> TOKENOMICS</span>
            </h2>

                <div className="mt-[30px] md:mt-[60px] grid gird-cols-1 md:grid-cols-4 gap-2.5 md:gap-5">

                    <div data-aos="fade-right" data-aos-duration="1500" className="md:col-span-2 bg-_green-dark rounded-5 p-[30px] md:p-10">
                        <div>
                            <Image className="inline mr-4 mb-3" src={supply} alt="icon"/><p className="inline _text-20-28 font-extrabold">Total Supply</p>
                        </div>
                        <div className="_text-14-20 font-extrabold">
                            10,000,000,000,00
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" className="md:col-span-2 bg-_green-dark rounded-5 p-[30px] md:p-10">
                        <div>
                            <Image className="inline mr-4 mb-3" src={security} alt="icon"/><p className="inline _text-20-28 font-extrabold">Total Security</p>
                        </div>
                        <div className="_text-14-20 font-extrabold">
                            Liquidity locked up for a 1 year
                        </div>
                    </div>
                    <a data-aos="fade-right" data-aos-duration="1500" href="https://bscscan.com/address/0x57a6d8E214C0CAb9FF3fB5d38F940f52026BbD64" className="block cursor-pointer md:col-span-2 md:order-none order-last bg-_green-dark rounded-5 p-[30px] md:p-10" >
                        <div>
                            <Image className="inline mr-4 mb-3" src={contract} alt="icon"/><p className="inline _text-20-28 font-extrabold">Smart Contract</p>
                        </div>
                        <div className="_text-14-20 font-extrabold underline hover:no-underline">
                            0x57a6d8E214C0CAb9FF3<wbr/>fB5d38F940f52026BbD64
                        </div>
                    </a>
                    <div data-aos="fade-right" data-aos-duration="1500" className="md:col-span-1 bg-_green-dark rounded-5 p-[30px] md:p-10">
                        <div>
                            <Image className="inline mr-4 mb-3" src={sell} alt="icon"/><p className="inline _text-20-28 font-extrabold">Sell Tax </p>
                        </div>
                        <div className="_text-14-20 font-extrabold">
                            3%
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" className="md:col-span-1 bg-_green-dark rounded-5 p-[30px] md:p-10">
                        <div>
                            <Image className="inline mr-4 mb-3" src={buy} alt="icon"/><p className="inline _text-20-28 font-extrabold">Buy Tax</p>
                        </div>
                        <div className="_text-14-20 font-extrabold">
                            0%
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full mt-[90px] md:mt-[135px]">
                <Ticker />
            </div>
        </section>
    )
}