import Image from "next/image";
import coin from '../../public/img/03Mission/coin.webp'
import { DRUK_WIDE } from "@/pages/_app";

export default function Mission(){
    return(
        <section id="03Mission" className="_section overflow-hidden pb-[90px]">
            <div className="_wrapper pt-20 mt-20 relative flex flex-col justify-between gap-y-10 ">
                <div className="absolute w-full h-full -z-50  left-1/2 transform -translate-x-1/2 mx-auto  bg-[url('/img/bg.webp')] bg-center bg-contain bg-no-repeat"></div>

                <p data-aos="fade-right" data-aos-duration="1500" className={`${DRUK_WIDE} leading-none _text-18-40 w-full block text-center uppercase`}>
                    <span className="text-_green">HULK MEM COACH</span> <br />
                    is a fast growing community aiming to become one of the most popular  in the crypto world
                </p>
                <p data-aos="fade-right" data-aos-duration="1500" className="text-_green mt-5 md:mt-7 md:w-1/2 mx-auto w-full block text-center _text-14-20 font-extrabold uppercase">
                    We are creating a modern ecosystem that will bring together people from all over the world to provide financial assistance to support sports around the world.
                </p>
                <div data-aos="zoom-in" data-aos-duration="1500" className="relative mx-auto w-auto h-auto flex flex-col justify-center">
                    {/* <div className="absolute -z-50 rounded-full w-full h-full bg-_green animate-ping"></div> */}
                    <Image src={coin} alt="Frog" className="block w-1/2 md:w-[263px] mx-auto _animate-scale"/>
                </div>
            </div>
        </section>
    )
}