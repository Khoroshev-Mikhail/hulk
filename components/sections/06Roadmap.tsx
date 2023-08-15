import { DRUK_WIDE } from "@/pages/_app";

export default function Roadmap(){
    return(
        <section id="06Roadmap" className="_section relative mt-32">
            <div className="_wrapper relative">

                <div className="hidden md:block absolute w-full h-3/4 -z-50 top-[15%] left-1/2 transform -translate-x-1/2 mx-auto  bg-[url('/img/bg.webp')] bg-center bg-contain bg-no-repeat bg-opacity-50"></div>
                <div className="md:hidden absolute w-full h-1/3 -z-50 top-[5%] left-1/2 transform -translate-x-1/2 mx-auto  bg-[url('/img/bg.webp')] bg-center bg-contain bg-no-repeat bg-opacity-50"></div>
                <div className="md:hidden absolute w-full h-1/3 -z-50 bottom-[5%] left-1/2 transform -translate-x-1/2 mx-auto  bg-[url('/img/bg.webp')] bg-center bg-contain bg-no-repeat bg-opacity-50"></div>
                <div className="md:hidden absolute w-full h-2/3 -z-50 -bottom-[5%] left-0 bg-[url('/img/eclipse_mobile.webp')] bg-left bg-contain bg-no-repeat "></div>
                <div className="md:hidden absolute w-full h-2/3 -z-50 -top-[15%] right-0 scale-x-[-1] bg-[url('/img/eclipse_mobile.webp')] bg-left bg-contain bg-no-repeat "></div>

                <h2 className={`${DRUK_WIDE} _h text-_green`}>
                    Roadmap
                </h2>

                <div className="px-5 mt-12 md:mt-24 relative grid grid-cols-6 grid-rows-4 md:grid-cols-4 md:grid-rows-none [&>div>ul]:list-image-[url(/img/06Roadmap/romb.svg)] [&>div>ul>li]:pl-3">

                    <div data-aos="zoom-in-right" data-aos-duration="3000" className="-ml-2.5 md:ml-0 col-span-1 col-start-1 row-span-4 md:row-span-1 grid grid-cols-1 grid-rows-4 md:grid-rows-1 md:grid-cols-4 md:my-8 md:row-start-2 md:col-span-4 md:w-full border-[1px] border-_green w-1 md:h-1">
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="3000" className="row-span-1 rounded-full border-[1px] border-_green h-10 w-10 -ml-5 md:-ml-1 -mt-1 md:-mt-5 bg-_black flex md:flex-col justify-center">
                            <div className="bg-_black md:h-[2px] h-[120%] ml-[2px] w-[2px] md:mt-[2px] md:w-[120%] md:-mr-1 "></div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="3000" className="row-span-1 rounded-full border-[1px] border-_green h-10 w-10 -ml-5 md:-ml-0 -mt-1 md:-mt-5 bg-_black flex md:flex-col justify-center">
                            <div className="bg-_black md:h-[2px] h-[120%] ml-[2px] w-[2px] -mt-1 md:mt-[2px] md:w-[120%]  md:-mx-1"></div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="3000" className="row-span-1 rounded-full border-[1px] border-_green h-10 w-10 -ml-5 md:-ml-0 -mt-1 md:-mt-5 bg-_black flex md:flex-col justify-center">
                            <div className="bg-_black md:h-[2px] h-[120%] ml-[2px] w-[2px] -mt-1 md:mt-[2px] md:w-[120%]  md:-mx-1"></div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="3000" className="row-span-1 rounded-full border-[1px] border-_green h-10 w-10 -ml-5 md:-ml-0 -mt-1 md:-mt-5 bg-_black flex md:flex-col justify-center">
                            <div className="bg-_black md:h-[2px] h-[120%] ml-[2px] w-[2px] -mt-1 md:mt-[2px] md:!w-[120%]  md:-mx-1"></div>
                        </div>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="pb-14 md:pb-0 col-span-5 md:col-start-1 md:col-end-3 md:row-start-1 relative">
                        <p className="_text-18-28 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-_green from-25% to-white to-80%">Phase 1</p>
                        <ul className="pl-3.5 mt-4 md:mt-5 _text-16-20 font-extrabold">
                            <li>Create website</li>
                            <li>Presale and Launch</li>
                            <li>Marketing</li>
                            <li>Crypto Influencers AMA</li>
                            <li>3000 Telegram Members</li>
                            <li>5000 Holders</li>
                            <li>Buyback and Burn</li>
                        </ul>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" className="pb-14 md:pb-0 col-span-5 md:col-start-2 md:col-span-2 md:row-start-3">
                        <p className="_text-18-28 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-_green from-25% to-white to-80%">Phase 2</p>
                        <ul className="pl-3.5 mt-4 md:mt-5 _text-16-20 font-extrabold">
                            <li>Listed on Coinmarketcap</li>
                            <li>Listed on Coingecko</li>
                            <li>Partnership with Marketing Agencies </li>
                            <li>10000 Telegram Members</li>
                            <li>15000 holders</li>
                        </ul>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="1500" className="pb-14 md:pb-0 col-span-5 md:col-span-2 md:col-end-5 md:row-start-1">
                        <p className="_text-18-28 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-_green from-25% to-white to-80%">Phase 3</p>
                        <ul className="pl-3.5 mt-4 md:mt-5 _text-16-20 font-extrabold">
                            <li>Global Marketing</li>
                            <li>NFT Launch</li>
                            <li>50000 Holders</li>
                            <li>New Partnerships</li>
                            <li>Exchange Listing CEX</li>
                        </ul>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="1500" className="pb-14 md:pb-0 col-span-5 md:col-span-1 md:col-end-5 md:row-start-3">
                        <p className="_text-18-28 font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-_green from-25% to-white to-80%">Phase 4</p>
                        <ul className="pl-3.5 mt-4 md:mt-5 _text-16-20 font-extrabold">
                            <li>100 000 holders</li>
                            <li>New Exchange Listing CEX</li>
                            <li>Launching your own launchpad</li>
                            <li>Focus on global development</li>
                            <li>Сharity</li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    )
}