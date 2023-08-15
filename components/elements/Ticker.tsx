import Image from "next/image";
import Marquee from "react-fast-marquee";
import hulk from '../../public/img/ticker/hulk.png'
import { DRUK_WIDE } from "@/pages/_app";

export default function Ticker({ left } : { left?: boolean }){
    return(
        <div className="relative">
            <Marquee autoFill direction={left ? 'right' : 'left'}>
                <div className={`${DRUK_WIDE} mx-[-1px] bg-_green text-_black uppercase flex xs:text-[30px]`}>
                    <div className="px-[9px] flex flex-col justify-center">
                        <Image src={hulk} alt="hulk" className="h-[33px] w-[33px]"/>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="block px-[9px] -mb-[3px]">HULK MEM COACH</p>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}