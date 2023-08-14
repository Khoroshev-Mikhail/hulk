import Social from "../elements/Social";
import emailjs from '@emailjs/browser';
import { useEffect, useState } from "react";
import hulk from '../../public/img/07Feedback/hulk.png'
import boom from '../../public/img/07Feedback/boom.png'
import Image from "next/image";
import { DRUK_WIDE } from "@/pages/_app";

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
        <section id="07Feedback" className="_section pt-10 sm:pt-14 md:pt-20 overflow-hidden">
            <div className="_wrapper flex justify-between">
                <h2 className={`${DRUK_WIDE} _h w-10/12 !text-left`}><span className="text-_green">ready</span> to be part of OUR TEAM?</h2>
                <div className="w-2/12">
                    <Social white className="justify-end"/>
                </div>
            </div>
            <div className="md:mt-[60px] flex flex-col bg-_green rounded-[20px] !mx-5 max-w-[1200px] xl:!mx-auto relative">
                <Image src={boom} alt="boom" className="absolute -top-[70px] -right-20 -z-50"/>
                <div className="flex flex-col">
                    <div className="mt-6 md:mt-10 w-full text-black text-center _text-16-22 font-extrabold">
                        You can send us your offer!
                    </div>
                    <form className="p-5 flex flex-col md:flex-row mt-[24px] md:mt-[30px] gap-2.5" onSubmit={sendForm}>
                        <input data-aos="fade-right" data-aos-duration="1500" type="text" className="block md:w-1/3 rounded-[20px] bg-white px-9 py-4 font-medium text-[16px] border-[1px] border-black placeholder-black" placeholder="Your Project" onChange={(e)=>setName(e.target.value)}/>
                        <input data-aos="fade-right" data-aos-duration="1500" data-aos-delay="200" type="email" className="block md:w-1/3 rounded-[20px] bg-white px-9 py-4 font-medium text-[16px] border-[1px] border-black placeholder-black" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400" disabled={status === 'success' || status === 'loading'} type="submit" className={`${status === 'success' ? 'bg-_black' : 'bg-_black'} uppercase block md:w-1/3 rounded-[20px] py-4 text-center font-extrabold text-_green`}>
                            { status === 'default' && 'Send ' }
                            { status === 'success' && 'Success' }
                            { status === 'error' && 'Sorry, unknown error' }
                            { status === 'loading' && 'Sending' }
                        </button>
                    </form>
                </div>
                <div>
                    <Image src={hulk} alt="HULK" className="w-full"/>
                </div>
            </div>
           
        </section>
    )
}