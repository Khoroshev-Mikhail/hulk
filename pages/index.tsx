import Header from '@/components/sections/02Header'
import Mission from '@/components/sections/03Mission'
import Tokenomics from '@/components/sections/04Tokenomics'
import Partners from '@/components/sections/05Partners'
import Roadmap from '@/components/sections/06Roadmap'
import Feedback from '@/components/sections/07Feedback'
import Head from 'next/head'

export default function Home() {
  return (
        <>
            <Head>
                <title>HULK</title>
                <meta httpEquiv="content-language" content="en" />
                <meta name="description" content="HULK MEM COACH is a fast growing community aiming to become one of the most popular  in the crypto world" />
                <link rel="shortcut icon" href="/img/favicon.ico" />
            </Head>
            
            <Header />
            <Mission />
            <Tokenomics />
            <Partners />
            <Roadmap />
            <Feedback />
        </>
  )
}
