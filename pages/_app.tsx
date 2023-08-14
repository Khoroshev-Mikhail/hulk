import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import localFont from 'next/font/local'

const MANROPE_FONT = Manrope({ subsets: ['latin'] })
const DRUK_WIDE_FONT = localFont({ src: '../public/fonts/Druk_Wide.woff2' })
export const DRUK_WIDE = DRUK_WIDE_FONT.className
export const MANROPE = MANROPE_FONT.className


export default function App({ Component, pageProps }: AppProps) {
    useEffect(()=>{
        AOS.init({
            once: true
        })
    }, [])
    
    return (
            <main className={`${MANROPE} text-white`}>
                <Component {...pageProps} />
            </main>
    )
}
