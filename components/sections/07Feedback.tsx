import Social from "../elements/Social";
import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";
import hulk from '../../public/img/07Feedback/hulk.webp'
import hulk_mobile from '../../public/img/07Feedback/hulk_mobile.webp'
import boom from '../../public/img/07Feedback/boom.webp'
import Image from "next/image";
import { DRUK_WIDE } from "@/pages/_app";
import Ticker from "../elements/Ticker";

const SERVICE_ID = 'hulkmemcoach' //https://dashboard.emailjs.com/admin
const TEMPLATE_ID = 'template_6i84thb' //https://dashboard.emailjs.com/admin/templates
const PUBLIC_KEY = 'JYRq2-0aVKKk821V_' //https://dashboard.emailjs.com/admin/account

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
        <section id="07Feedback" className="_section pt-10 sm:pt-14 md:pt-20 overflow-hidden">
            <div className="_wrapper flex flex-col gap-y-5 md:flex-row justify-between">
                <h2 className={`${DRUK_WIDE} _h w-full md:w-10/12 md:!text-left`}><span className="text-_green">ready</span> to be part of OUR TEAM?</h2>
                <div className="w-full md:w-2/12">
                    <Social white className="justify-center md:justify-end"/>
                </div>
            </div>
            <div className="mt-[30px] md:mt-[60px] flex flex-col bg-_green rounded-[20px] !mx-5 max-w-[1200px] xl:!mx-auto relative">
                <Image src={boom} alt="boom" className="absolute -top-[70px] -right-20 -z-50"/>
                <div className="flex flex-col">
                    <div className="mt-6 md:mt-10 w-full text-black text-center _text-16-22 font-extrabold">
                        You can send us your offer!
                    </div>
                    <form className="relative z-50 p-5 flex flex-col md:flex-row mt-[24px] md:mt-[30px] gap-2.5 text-black" onSubmit={sendForm}>
                        <input data-aos="fade-right" data-aos-duration="1500" type="text" className="block md:w-1/3 rounded-[20px] bg-_green md:bg-white px-9 py-4 font-medium text-[16px] border-[1px] border-black placeholder-black" placeholder="Your Project" onChange={(e)=>setName(e.target.value)}/>
                        <input data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200" type="email" className="block md:w-1/3 rounded-[20px] bg-_green md:bg-white px-9 py-4 font-medium text-[16px] border-[1px] border-black placeholder-black" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" disabled={status === 'success' || status === 'loading'} type="submit" className={`${status === 'success' ? 'bg-_black' : 'bg-_black'} uppercase block md:w-1/3 rounded-[20px] py-4 text-center font-extrabold text-_green`}>
                            { status === 'default' && 'Send ' }
                            { status === 'success' && 'Success' }
                            { status === 'error' && 'Sorry, unknown error' }
                            { status === 'loading' && 'Sending' }
                        </button>
                    </form>
                </div>
                <div className="w-full relative pt-[6%]">
                    <Image src={hulk} alt="HULK" className="hidden md:block w-full relative z-50"/>
                    <Image src={hulk_mobile} alt="HULK" className="md:hidden w-full relative z-50 rounded-b-5"/>

                    <div className="w-4/5 h-full absolute z-10 bottom-0 left-1/2 -translate-x-1/2 transform  bg-[url('/img/bg.webp')] bg-cover bg-top-center">

                    </div>
                </div>
            </div>
            <div className="mt-10 md:mt-20">
                <Ticker left/>
            </div>
            <div className="mt-[34px] md:mt-[47px] pb-10 text-center font-extrabold _text-12-20 ">
                HULK MEM COACH 2023 Copyright © All Right Reserved
            </div>
           
        </section>
    )
}