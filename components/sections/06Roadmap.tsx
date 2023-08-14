import { DRUK_WIDE } from "@/pages/_app";

export default function Roadmap(){
    return(
        <section id="06Roadmap" className="_section relative">
            <div className="_wrapper">

                <h2 className={`${DRUK_WIDE} _h`}>
                    Roadmap
                </h2>

                <div className="relative grid grid-cols-1 md:grid-cols-4 md:row-span-3">

                    <div className="col-span-1 md:col-start-1 md:col-end-3 md:row-start-1">
                        <p>PHASE 1</p>
                        <ul>
                            <li>Create website</li>
                            <li>Presale and Launch</li>
                            <li>Marketing</li>
                            <li>Crypto Influencers AMA</li>
                            <li>3000 Telegram Members</li>
                            <li>5000 Holders</li>
                            <li>Buyback and Burn</li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-start-2 md:col-span-2 md:row-start-3">
                        <p>PHASE 2</p>
                        <ul>
                            <li>Listed on Coinmarketcap</li>
                            <li>Listed on Coingecko</li>
                            <li>Partnership with Marketing Agencies </li>
                            <li>10000 Telegram Members</li>
                            <li>15000 holders</li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-4 md:my-8 md:row-start-2 md:col-span-4 w-full border-[1px] border-_green h-1">
                        <div className="rounded-full border-[1px] border-_green h-10 w-10 -mt-5 -ml-1 bg-_black flex flex-col justify-center">
                            <div className="bg-_black h-[2px] mt-[2px] w-[120%] -mr-1"></div>
                        </div>
                        <div className="rounded-full border-[1px] border-_green h-10 w-10 -mt-5 bg-_black"></div>
                        <div className="rounded-full border-[1px] border-_green h-10 w-10 -mt-5 bg-_black"></div>
                        <div className="rounded-full border-[1px] border-_green h-10 w-10 -mt-5 bg-_black"></div>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:col-end-5 md:row-start-1">
                        <p>PHASE 3</p>
                        <ul>
                            <li>Global Marketing</li>
                            <li>NFT Launch</li>
                            <li>50000 Holders</li>
                            <li>New Partnerships</li>
                            <li>Exchange Listing CEX</li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-end-5 md:row-start-3">
                        <p>PHASE 4</p>
                        <ul>
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