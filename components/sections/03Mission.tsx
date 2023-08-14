import Image from "next/image";
import coin from '../../public/img/03Mission/coin.png'
import { DRUK_WIDE } from "@/pages/_app";
import Ticker from "../elements/ticker";

export default function Mission(){
    return(
        <section id="03Mission" className="_section ">
            <div className="_wrapper pt-20 mt-20 relative flex flex-col justify-between gap-y-10 ">

                <div className="absolute h-[120%] -z-50 -top-[5%] left-1/2 transform -translate-x-1/2 mx-auto aspect-square bg-[url('/img/03Mission/bg.png')] bg-center bg-cover bg-no-repeat">
                    {/* BG_GRID */}
                </div>

                <p className={`${DRUK_WIDE} leading-none _text-18-40 w-full block text-center uppercase`}>
                    <span className="text-_green">HULK MEM COACH</span> <br />
                    is a fast growing community aiming to become one of the most popular  in the crypto world
                </p>
                <p className="text-_green mt-5 md:mt-7 md:w-1/2 mx-auto w-full block text-center _text-14-20 font-extrabold uppercase">
                    We are creating a modern ecosystem that will bring together people from all over the world to provide financial assistance to support sports around the world.
                </p>
                <Image src={coin} alt="Frog" className="block mx-auto"/>

            </div>
        </section>
    )
}