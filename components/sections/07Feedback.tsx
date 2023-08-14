import { BEBAS_NEUE } from "@/pages/_app";
import Ticker from "../elements/Ticker";
import Image from "next/image";
import xxx from '../../public/img/07Feedback/xxx.svg'
import hackers from '../../public/img/07Feedback/hackers.webp'
import hackers_mobile from '../../public/img/07Feedback/hackers_mobile.webp'
import eclipse_mobile from '../../public/img/07Feedback/eclipse_mobile.webp'
import grid_mobile from '../../public/img/07Feedback/grid_mobile.webp'
import Social from "../elements/Social";
import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";

const SERVICE_ID = 'syndicate' //https://dashboard.emailjs.com/admin
const TEMPLATE_ID = 'template_cmq5kjj' //https://dashboard.emailjs.com/admin/templates
const PUBLIC_KEY = 'krMSF_Jadknes5GqU' //https://dashboard.emailjs.com/admin/account

export default function Feedback(){
    const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'default'>('default')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function sendForm(e:any){
        e.preventDefault()
        setStatus('loading')
    
        emailjs.send(SERVICE_ID, TEMPLATE_ID, { name, email})
            .then(() => {
                setName('')
                setEmail('')
                setStatus('success')
            }, (err) => {
                console.log(err)
                setStatus('error')
            });
    }
    useEffect(()=>{
        emailjs.init(PUBLIC_KEY)
    }, [])

    return(
        <section id="07Feedback" className="_section pt-10 sm:pt-14 md:pt-20 bg-[url('/img/07Feedback/smoke.webp')] bg-no-repeat bg-top bg-cover overflow-hidden">
            <div className="_wrapper flex flex-col bg-_blue rounded-t-[20px] !mx-5 xl:!mx-auto relative ">

                <div data-aos="fade-right" data-aos-duration="1500" className="order-1 w-full flex justify-start md:justify-center mt-5 md:mt-10 relative z-50">
                    <Social white/>
                </div>

                <h2 data-aos="fade-right" data-aos-duration="1500" className={`${BEBAS_NEUE} _h order-2 mt-[30px] md:mt-[54px] relative z-50`}>
                    <span className="text-_green">Ready</span> to use power of the Syndicate?
                </h2>

                <div data-aos="fade-right" data-aos-duration="1500" className="order-3 md:order-4 mt-[30px] md:mt-[70px] relative z-100 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] md:text-center font-extrabold">
                    You can try to interest us!
                </div>

                <Image data-aos="fade-right" data-aos-duration="1500" src={xxx} alt="x X x" className="block order-4 md:order-3 w-[38px] sm:w-[50px] md:w-[70px] md:mx-auto mt-[18px] md:mt-0 relative z-50"/>

                <form className="flex order-5 flex-col md:flex-row mt-[24px] md:mt-[30px] gap-2.5 relative z-50" onSubmit={sendForm}>
                    <input data-aos="fade-right" data-aos-duration="1500" type="text" className="block md:w-1/3 rounded-[20px] bg-[#A0A9FF] px-9 py-4 font-medium text-[16px] border-[2px] border-white placeholder-white" placeholder="Your Project" onChange={(e)=>setName(e.target.value)}/>
                    <input data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200" type="email" className="block md:w-1/3 rounded-[20px] bg-[#A0A9FF] px-9 py-4 font-medium text-[16px] border-[2px] border-white placeholder-white" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    <button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" disabled={status === 'success' || status === 'loading'} type="submit" className={`${status === 'success' ? 'bg-_blue' : 'bg-_green'} uppercase block md:w-1/3 rounded-[20px] py-4 text-center font-extrabold text-black`}>
                        { status === 'default' && 'Send ' }
                        { status === 'success' && 'Success' }
                        { status === 'error' && 'Sorry, unknown error' }
                        { status === 'loading' && 'Sending' }
                    </button>
                </form>

                <div className="relative pb-[55%] md:pb-[50%] order-6">
                    <Image src={hackers_mobile} alt="hackers" className="block z-50 order-6 absolute bottom-0 left-0 w-full md:hidden"/>
                    <Image src={hackers} alt="hackers" className="z-40 order-6 absolute bottom-0 left-0  hidden md:block"/>
                </div>
                

            </div>

            {/* при sm:-bottom-40 сетка заходит на футер */}
            <div className="relative z-10 h-0 md:hidden">
                <Image src={grid_mobile} alt="hackers" className="block z-10 order-6 absolute bottom-0 sm:-bottom-40 left-0 w-full"/>
            </div>

            <div className="relative z-50">
                <Ticker />    
            </div>

            <div className="_wrapper relative text-center py-4 xs:py-6 sm:py-8 md:py-10 text-[12px] xs:text-[14px] sm:text-[16px] md:text-[20px] font-bold md:font-extrabold">
                SYNDICATE DEFI HUNTERS 2023 Copyright © All Right Reserved

                <Image src={eclipse_mobile} alt="hackers" className="md:hidden block z-10 order-6 absolute bottom-0 left-0 w-full"/>
            </div>

        </section>
    )
}