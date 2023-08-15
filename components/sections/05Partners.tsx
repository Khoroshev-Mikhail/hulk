import { DRUK_WIDE } from "@/pages/_app";
import Image from "next/image";
import first from '../../public/img/05Partners/1.svg'
import second from '../../public/img/05Partners/2.svg'
import third from '../../public/img/05Partners/3.svg'
import fourth from '../../public/img/05Partners/4.svg'
import fifth from '../../public/img/05Partners/5.png'

export default function Partners(){
    return(
        <section id="05Partners" className="_section pt-[40px] md:pt-[100px]">
            <div className="_wrapper">
                <h2 data-aos="fade-right" data-aos-duration="1500" className={`${DRUK_WIDE} _h `}>
                    OUR <span className="text-_green">PARTNERS</span>
                </h2>
                <div className="grid grid-cols-6 sm:grid-cols-5 mt-10">
                    <div className="col-span-2 sm:col-span-1 flex justify-center">
                        <Image data-aos="zoom-in" data-aos-duration="1500" src={first} alt="" className="block"/>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex justify-center">
                        <Image data-aos="zoom-in" data-aos-duration="1500"  src={second} alt="" className="block"/>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex justify-center">
                        <Image data-aos="zoom-in" data-aos-duration="1500"  src={third} alt="" className="block"/>
                    </div>
                    <div className="col-span-3 sm:col-span-1 flex md:justify-center justify-end w-full pr-[10%]">
                        <Image data-aos="zoom-in" data-aos-duration="1500"  src={fourth} alt="" className="block"/>
                    </div>
                    <div className="col-span-3 sm:col-span-1 flex md:justify-center justify-start w-full pl-[10%]">
                        <Image data-aos="zoom-in" data-aos-duration="1500"  src={fifth} alt="" className="block my-4"/>
                    </div>
                </div>
            </div>
        </section>
    )
}