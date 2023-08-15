import Image from 'next/image'
import tg from '../../public/img/Social/tg.svg'
import twitter from '../../public/img/Social/twitter.svg'
import tg_white from '../../public/img/Social/tg_white.svg'
import twitter_white from '../../public/img/Social/twitter_white.svg'

export default function Social({ white, className }: {white?: boolean, className?: string}){
    return(
        <div className={"flex gap-x-1 relative z-50" + " " + className}>
            <a href='https://x.com/hulkmemcoach/status/1691130692137357312?s=46&t=Xym74jAFNv1CcH-yxiC9CA'>
                <Image src={white ? twitter_white : twitter} alt="Twitter" className="block w-[30px] xs:w-auto"/>
            </a>
            <a href='https://t.me/hulkmemcoach'>
                <Image src={white ? tg_white : tg} alt="Telegram" className="block w-[30px] xs:w-auto"/>
            </a>
        </div>
    )
}