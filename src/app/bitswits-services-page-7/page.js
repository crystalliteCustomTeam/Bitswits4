import React from 'react'
import Acheived from '@/src/components/servicePage/Acheived/Acheived'
import Banner from '@/src/components/servicePage/Banner/Banner'
import CaseStudies from '@/src/components/servicePage/casestudies/CaseStudies'
import CuttingEdge from '@/src/components/servicePage/CuttingEdge/CuttingEdge'
import SuccessfulApp from '@/src/components/servicePage/SuccessfulApp/SuccessfulApp'
import AppIdea from '@/src/components/servicePage/AppIdea/AppIdea'
import WhyChoose from '@/src/components/servicePage/WhyChoose/WhyChoose'
import DevelopmentProcess from '@/src/components/servicePage/DevelopmentProcess/DevelopmentProcess'
import MobileTechnologies from '@/src/components/servicePage/MobileTechnologies/MobileTechnologies'
import Testimonials from '@/src/components/servicePage/Testimonials/Testimonials'
import SmallBanner from '@/src/components/servicePage/SmallBanner/SmallBanner'
import ApplicationOffer from '@/src/components/servicePage/ApplicationOffer/ApplicationOffer'
import EstimatedCost from '@/src/components/servicePage/EstimatedCost/EstimatedCost'
import Fueling from '@/src/components/servicePage/Fueling/Fueling'
import YourTech from '@/src/components/servicePage/YourTech/YourTech'
import Industries from '@/src/components/servicePage/Industires/Industries'
import JournyForm from '@/src/components/servicePage/JourneyForm/JourneyForm'
import Faqs from '@/src/components/servicePage/Faqs/Faqs'
import BlogPosts from '@/src/components/servicePage/BlogPosts/BlogPosts'
import GlobalPresence from '@/src/components/servicePage/GlobalPresence/GlobalPresence'
// Images 
import Success1 from "media/services/success-1.svg"
import Success2 from "media/services/success-2.svg"
import Success3 from "media/services/success-3.svg"
import Success4 from "media/services/success-4.svg"
import TechOne from "media/services/cms1.svg"
import TechTwo from "media/services/cms2.svg"
import TechThree from "media/services/cms3.svg"
import TechFour from "media/services/cms4.svg"
import TechEleven from "media/services/frontend-1.svg"
import TechThirteen from "media/services/frontend-3.svg"
import TechFourteen from "media/services/frontend-4.svg"
import TechNineteen from "media/services/backend-3.svg"
import TechTwenty from "media/services/backend-4.svg"
import TechTwentyOne from "media/services/backend-5.svg"
import TechTwentyTwo from "media/services/backend-6.svg"
import TechThirtyFive from "media/services/data-base-1.svg"
import TechThirtySix from "media/services/data-base-2.svg"
import TechThirtySeven from "media/services/data-base-3.svg"
import TechThirtyEight from "media/services/data-base-4.svg"
import TechFourtyOne from "media/services/cloud-1.svg"
import TechFourtyTwo from "media/services/cloud-2.svg"
import TechFourtyThree from "media/services/cloud-3.svg"
import slide1 from "media/services/slide-1.svg"
import slide2 from "media/services/slide-2.svg"
import slide3 from "media/services/slide-3.svg"
import slide4 from "media/services/slide-4.svg"
import slide5 from "media/services/slide-5.svg"
import slide6 from "media/services/slide-6.svg"
import slide7 from "media/services/slide-7.svg"
import slide8 from "media/services/slide-8.svg"
const page = () => {
    // Sample content data
    const menus = [
        { label: "In-Game Asset Ownership", index: 0 },
        { label: "Scarce and Exclusive Collections", index: 1 },
        { label: "Cross-platform Interoperability", index: 2 },
        { label: "Play-to-Earn Opportunities", index: 3 },
        { label: "Community Building", index: 4 },
        { label: "Stream Monetization", index: 5 },
    ];
    const sections = [
        [
            {
                num: "",
                title: "In-Game Asset Ownership",
                content: `<p class='font-medium manrope'>With a network of secure blockchains and a robust server, trading NFT assets has never been made easier. Gaming platforms that are built around the NFT gaming ecosystem will benefit from not just ownership, but also enjoy a profitable revenue stream by allowing trade, and creation of custom NFTs for all players. </p>`
            },
        ],
        [
            {
                num: "",
                title: "Scarce and Exclusive Collections",
                content: `<p class='font-medium'>What’s even better with NFT game building is that all assets are fully custom and unique. Players would be thrilled to own assets that are rare and hold astounding value in the real world. Duplication fears are not a problem as each asset is owned, and secured via a robust blockchain network./p>`
            },
        ],
        [
            {
                num: "03",
                title: "Cross-platform Interoperability",
                content: `<p class='font-medium'>The utility of NFT itself is not just limited to one particular network of blockchain. But more importantly, NFT gaming platforms will support cross-platform interoperability, allowing transactions of assets across multiple blockchains. Hence, this ensures more efficient movement of digital assets in the marketplace. </p>`
            },
        ],
        [
            {
                num: "",
                title: "Play-to-Earn Opportunities",
                content: `<p class='font-medium'>Unlike traditional gaming ecosystems, NFT gaming offers you more than just gaming for leisure time. You can entice more players to join the network with Play-to-earn (P2E opportunities). As players compete, they’ll be able to reap rewards in the shape of popular NFTs, cryptocurrency credits, exciting new unlocks, and much more.</p>`
            },
        ],
        [
            {
                num: "",
                title: "Community Building",
                content: `<p class='font-medium'>NFT has always been on the buzz, among social communities. Launching your own game, and getting communities to buzz about it, and get excited has never been easier. Plus, engaging with players and loyal GameTubers in the community will lead you to greater player retention, and on a trajectory of impressive growth as time progresses.</p>`
            },
        ],
        [
            {
                num: "",
                title: "Stream Monetization",
                content: `<p class='font-medium'>NFT game development exposes business teams to multiple avenues for revenue and growth. Teams can expect to earn handsomely by monetizing the purchase and sale of NFT assets over the marketplace. Plus, with the influencer economy booming, there’s even more opportunity for collaborations and partnerships that unlock further new streams of revenue. </p>`
            },
        ],
    ];
    const servicesData = [
        ["Full Cycle NFT Game Development", "Expect more as we offer full-cycle NFT game development support. Our team is well equipped with the latest blockchain tech stack to help you create blockbuster games in a variety of genres. "],
        ["2D/3D NFT Art Content Creation", "Get NFT artwork that is simply stellar, and outperforms competition. As a top-tier NFT game development company, our 2D and 3D NFT designs remain 100% unique, winning you the spotlight among other game studios. "],
        ["NFT Marketplace Development", "Let’s create an NFT marketplace with your favorite CMS, and integrate crypto payment solutions of your choice. Use intuitive and responsive designs for NFT UI/UX, and get regular performance audits."],
        ["NFT Gaming Platform Development", "With our expert blockchain developers, you can create your own NFT gaming platform. Plus, you get end-to-end technical support. We also have a dedicated team to monitor platform health, and continuously enhance performance. "],
        ["Integration Services for NFT Games", "NFT game development opens a whole plethora of exciting opportunities. Implement integrations that make NFT assets available for players across other NFT games, enabling you to retain satisfied and loyal gamers. "]
    ];
    const storiesData = [
        [Success1, "Extraterrestrial", 'It’s a one-of-a-kind NFT game that invites players to traverse into an NFT metaverse. Players can unlock and explore thrilling game modes by spending digital tokens. '],
        [Success2, "CryptoBattles", 'It’s another exciting game that invites players to execute clever tactics to trap opponents and defeat them. Wins gain you more skill tokens.'],
        [Success3, "Rich Farmers", 'It’s a free-to-play game that attracts farming enthusiasts. As players progress, they unlock points and tokens, scaling their production.']
    ];
    const cardsData = [
        ["Exclusivity of <br class='d-xl-block d-none' /> Artwork", "Our NFTs are one-of-a-kind. Our developers create exclusive NFTs that not only make your assets desirable but also make them stand out."],
        ["Niche-specific <br class='d-xl-block d-none' /> NFTs", "Our NFT game developers hone versatile skills in digital design and artwork. They can easily cater to a variety of niches."],
        ["Transparency <br class='d-xl-block d-none' /> in work", "As a leading NFT game development company, we maintain full transparency in our costs, fostering trust within the gaming community."],
        ["High Level <br class='d-xl-block d-none' /> of Security", "NFT platforms or marketplaces are based on a highly secured blockchain, leaving no room for threat or compromise. "],
        ["Client-centric <br class='d-xl-block d-none' /> approach", "We always take a client-centric approach and invite our clients to join the art team in the brainstorming phase."]
    ];
    const tabsData = [
        ["Research & Concept Creation",
            "tab1",
            "It all begins with your game concept. We put our heads together to figure out how the game concept would turn out to be an immersive experience for gamers, making them stick to the platform. To achieve this, we perform rigorous research on competition, design, aesthetics, tech stack, visual assets, blockchain processes, costs, financials, testing, and updates.  "],
        ["Art & Design Production",
            "tab2",
            "Moving on, we dive into the art and design phase. In this phase, our NFT designers will work up the most important document, the Game Design Document. This document holds comprehensive insight into game environments, assets, storyline, levels, awards, and tokens. Once we’re done with the design phase, it’s time to move on to the development side of the NFT project."],
        ["Tech Stack Selection",
            "tab3",
            "Next, it’s time to kick off the development phase which we initiate by selecting of tech stack. This is of course as per your unique needs for NFT game development. We’ll look at frameworks for blockchain, Smart contracts, and what could be best to pursue both front-end and back-end development of the game. We’ll also look at wallet integration options. "],
        ["Creation of Smart Contracts",
            "tab4",
            "To tread on a path of secure and quality development, we initiate smart contracts. These contracts define and govern the trade of ownership of NFTs within a specific platform. These specially designed smart contracts ensure that game transactions are executed with a great level of safety, leaving no room for duplication, or tampering with original NFT artwork. "],
        ["Integration of Wallets",
            "tab5",
            "The inclusion of crypto wallets in NFT game development creates new avenues of opportunity for players. It enables them to realize the value of NFT purchases and assets in terms of crypto. Our NFT project team is here to consult you on the best crypto wallets. Some of these options are MetaMask, AlphaWallet, Coinbase, and TrustWallet. "],
        ["Development",
            "tab6",
            "Our NFT development process is well-planned into two parts: Front-end, and Back-end development. Our expert NFT developers would work up the design, UX, mechanics, and gameplay experience. For the back end, we manage blockchain integration, token management, smart contracts, and security updates via a robust server infrastructure."],
        ["Testing for Optimization",
            "tab7",
            "After rigorous development, it’s finally time to experience the game for the user. We run a multitude of complex tests to point out potential issues about performance, NFT transactions, and even security. To achieve that the team may perform Alpha and Beta Testing, Smart Contract testing, and finally, some functional testing to give us the green signal for launch."],
        ["Launch for Success",
            "tab8",
            "Now that we’ve progressed through conception, design, development, and testing, it’s time to finally make the leap, and launch your NFT game for success. You can go about this by connecting with NFT forums, and gaming communities. Run a PR campaign or optimize your game pages for search engines with SEO. It’s time to go out of your way to create some buzz. "],
    ];
    const HoustonContent = {
        menus: menus,
        sections: sections,
    };
    const tabsData2 = [
        ["Game Engines",
            "tab1",
            [
                [TechOne, "Buildbox"],
                [TechTwo, "Unreal Engine"],
                [TechThree, "Godot"],
                [TechFour, "Amazon Lumberyard"]
            ]],
        ["Programming Languages",
            "tab2",
            [
                [TechEleven, "Rust"],
                [TechFourteen, "Go"],
                [TechThirteen, "Python"],
                [TechThirteen, "JavaScripte"]
            ]],
        ["Graphics & Design Tools",
            "tab3",
            [
                [TechNineteen, "Adobe Photoshop"],
                [TechTwenty, "Krita"],
                [TechTwentyOne, "Corel Painter"],
                [TechTwentyTwo, "Buenom"]
            ]],
        ["Database",
            "tab4",
            [
                [TechThirtySeven, "OpenSea"],
                [TechThirtyEight, "Nifty Gateway"],
                [TechThirtySeven, "Foundation"],
                [TechThirtySeven, "MongoDB"]
            ]],
        ["Frameworks & Libraries",
            "tab5",
            [
                [TechThirtyFive, "Hard Hat"],
                [TechThirtySix, "Moralis NFT API"],
                [TechThirtySeven, "ethers.js"],
                [TechThirtySeven, "ZettaBlock"]
            ]],
        ["Testing & QA Tools",
            "tab6",
            [
                [TechFourtyOne, "Jenkins"],
                [TechFourtyTwo, "Selenium"],
                [TechFourtyThree, "JIRA"],
                [TechFourtyThree, "TestRail"]
            ]],
    ];
    return (
        <>
            <Banner
                title={`Redefine Gaming with <br class="d-lg-block d-none"/> A Leading <span class='newfycolr'>NFT Game <br class="d-xl-block d-none"/> </span> Development Company`}
                desc="It’s time to revolutionize the world of digital gaming with our 360 NFT game development solutions! We, as an NFT game development company, have built thrilling games using Blockchain technology. Engage and retain players with games that offer exciting stream monetization opportunities."
            />
            <CaseStudies />
            <Acheived
                title="Leading the Way in NFT Games!"
                desc="As an NFT game development company, BitsWits leverages its blockchain expertise to create games that drive growth and deliver significant profits for our partners!"
            />
            <CuttingEdge
                title="High-Performance NFT Game Development Services For Outstanding Player Engagement!"
                desc="Our team is a score of professional NFT game developers who have remarkably catered to the challenging scope of our NFT game development projects. Here are the services we offer:"
                services={servicesData}
            />
            <SuccessfulApp
                title="Our Standout <span class='newfycolr'>NFT Game</span> Development Projects"
                desc="From building AI art shops to the most rare and unique collectibles, we’ve nailed NFT projects across a variety of domains. Here’s what we’ve delivered with our remarkable NFT game development services:"
                successStories={storiesData}
            />
            <AppIdea
                title="Enter into a New Era of Digital Gaming!"
                desc="BitsWits is here to revolutionize the world of gaming. Are you thrilled to make the leap with us?"
            />
            <WhyChoose
                title="Why BitsWits for <span class='newfycolr'>NFTs?</span>"
                desc="Along with creating exclusive NFTs, we offer full-time support. Here’s why you need to opt for our NFT game development services:"
                cardData={cardsData}
            />
            <DevelopmentProcess
                title="BitsWits <span class='newfycolr'>NFT Game Development</span> Process"
                desc="Our expert-vetted NFT game developers and UX team have a special brainstorming approach that leads us to stellar NFT game designs and deliver top-tier NFT game development services."
                tabData={tabsData}
            />
            <MobileTechnologies
                title="The Benefits When You Hire An NFT Game Development Company?"
                desc="BitsWits is an NFT game development company in the USA that tops everyone. We have an outstanding portfolio of versatile NFT gaming projects. Our flawless NFT game development has led us to partner with some of the top gaming studios, and creative teams around the world. Our NFT game developers have proven their worth by building seamless blockchain integrations for NFT games. "
            />
            <Testimonials
                testiCard={[
                    ["“Transformed our game idea into an NFT sensation. The team’s creativity and responsiveness made all the difference!”", "Emily Carter", "Co-founder & Creative Director"],
                    ["“Seamless collaboration and unmatched expertise in NFT gaming. Our project’s success surpassed all expectations!”", "James Wilson", "Lead Game Strategist"],
                    ["“The dedication shown in developing our NFT game was remarkable. Delivered excellence, on time and on budget.”", "Sara Ahmed", "Project Manager"]
                ]}
            />
            <SmallBanner
                title="Give Players All The Control They Crave With Our In-Game NFT Assets!"
                desc="Give players in-app NFT purchases through crypto wallet integration, and stream monetization. Unlock a new gameverse with BitsWits!"
            />
            <ApplicationOffer
                title="Features of <span class='newfycolr'>NFT Game Development</span>"
                desc="At BitsWits, we believe that NFT holds astounding potential for growth. Entrepreneurs can unlock a new plethora of opportunities in the realm of gaming. Unlike traditional gaming, NFT gaming is meant to hand complete control to players via a secure blockchain network. "
                content={HoustonContent} />
            <EstimatedCost
                title="Estimated NFT Game Development Cost Based On Project Complexity"
                desc="BitsWits has delivered top-tier NFT game development services over the years. To help you discover what’s ideal for you we have given ballpark estimates for NFT game development cost for every aspect of your project separately."
                costingCard={[
                    ["Smart Contracts and Token Minting",
                        "$5K-$10K",
                        "Creation of smart contracts and token minting is a complex job and may take up to dedicated 40-80 hours of work. It’s done to manage secure transfer of ownership over a blockchain."],
                    ["Game Mechanics",
                        "$10K-$15K",
                        "Designing game mechanics and narrative writing is another core part of NFT game development. Expect the project team to work a total of 120 hours depending upon the needs of the project. "],
                    ["Game Design and NFT Artwork",
                        "$15K-$25K",
                        "NFT game developers will work on the front-end aspect of the job which includes character design, special effects, sound, and environment design. Development can take 120-200 hours. "],
                ]}
                spcTitle="Estimate NFT Game Cost at a Glance!"
                spcDesc="At BitsWits we accept NFT game projects regardless of the phase of development. Want a more accurate estimate of your NFT game development cost?"
            />
            <Fueling
                title="Our Expertise in <span class='newfycolr'>NFT Game Development</span> Genres"
                desc='BitsWits is one of the best NFT game development companies that leverage blockchain technology to build NFT games for a wild variety of genres. '
                genres={[
                    ["NFT P2E Game", "The most popular among our projects are the P2E games. These allow players to trade integrated NFTs, and monetize their gameplay. Players can earn crypto credits as well as exclusive NFT as rewards for their performance."],
                    ["NFT PvP Game", "We add more intrigue to the competition by introducing multiplayer combats. Players compete against each other on the basis of skill sets, skins, and special weapons which become available on the use of player-owned NFTs."],
                    ["NFT Metaverse Game", "Our NFT game-building services extend to full-fledged NFT metaverse development. Welcome gamers to an entire virtual world of NFTs where they can trade, interact, and explore environments for a breathtaking gaming experience."],
                    ["NFT RPG Game", "The pursuit of exclusive NFTs becomes even more interesting when you draw players to roleplay games. RPG games immerse players into thrilling missions, and storylines, making them crave completion to unlock a bundle of all-exclusive tokens."],
                    ["NFT Sports and Racing Game", "Watch out for car enthusiasts as NFT racing games are bound to keep them poised for hours. Players will compete in deadly racing tracks to unlock exclusive trophies, skins, new race tracks all in the shape of high-class NFTs."],
                    ["NFT Card and Casino Game", "Our NFT game developers can even go out of their way to help you build high-level simulations of real-world casinos or Poker tables. What’s truly interesting is that players will engage in the game via the tokenization of NFTs. "]
                ]}
            />
            <YourTech
            title="NFT Tech Stack for <span class='newfycolr'>All Project</span>"
            desc="Our developers hold experience with the most demanding blockchain tech stack."
            tabsData={tabsData2} />
            <Industries
                title="NFTs for Demanding <span class='newfycolr'>Industries</span>"
                desc="BitsWits offers full-cycle NFT gaming platform development services for several industries. Our developers have seamlessly <br class='d-lg-block d-none'/>  adapted to unique industry challenges and delivered custom NFT solutions without any hiccups."
                industriesCards={[
                    [slide1, "Exclusive Digital Merch", "Proving exclusive ownership of a collectible has never been easier. This is where NFTs have shaken up the market. Celebrity merch and rare collectibles have more scope courtesy of NFTs."],
                    [slide2, "Art and Music", "NFTs provide immense value by allowing artists to earn royalties on every trade of their digital assets. With secure, exclusive ownership, artists can expect premium value for their creations."],
                    [slide3, "Internet of Things", "NFTs offer robust security for IoT devices, preventing malicious attacks. The PUF feature ensures a single private key protects devices and their network over the blockchain."],
                    [slide4, "Real Estate", "NFTs add value to real estate by eliminating intermediaries and lawyers. They enable digital contracts and secure asset tokenization, streamlining transactions and ensuring efficiency."],
                    [slide5, "Healthcare", "NFTs revolutionize data privacy in healthcare by digitizing and tokenizing personal health data, giving you complete control over your information and limiting unwanted access."]
                ]}
            />
            <JournyForm
                title="Start Your NFT Game Development Journey with Us"
                subTitle="30 Minutes FREE Consultation"
                desc="Get Your FREE NFT Development Roadmap with Our Expert NFT Team"
            />
            <Faqs
                classes="align-items-center"
                faqsData={[
                    {
                        question: "Are NFT games legal?",
                        answer: "Yes, NFTs are perfectly legal. When it comes to the NFT gaming platform, game publishers own all assets. The right of ownership may be acquired by players winning or buying exclusive NFT collectibles. You can even legalize your NFT by acquiring full rights to the asset from the publisher. Or consult a blockchain lawyer to protect your right to ownership.  "
                    },
                    {
                        question: "What’s your expertise with NFT game development?",
                        answer: "At BitsWits, we have a team of highly expert NFT artists and game developers who’ve been serving the industry from the very start. It won’t be wrong to claim that we’re among the pioneers in building feature-rich games. Owing to our experience, and client satisfaction level, we’re arguably the best NFT game development company. "
                    },
                    {
                        question: "Are NFT games profitable?",
                        answer: "Yes, NFT games can be seriously profitable if the items you create sustain a high-level of demand among gamers and players. Plus, you may even earn from royalty every time the asset is traded over the in-game marketplace. Besides, minting NFTs in games could be profitable for both publishers, and gamers alike as they can trade them."
                    },
                    {
                        question: "How much does NFT development cost?",
                        answer: "The cost of NFT development can vary significantly between $45000 and $60000. This is the estimated cost for an NFT marketplace development. The price may go up depending upon a range of cost factors including tech stack required for development, complexity of art style and concept, niche of the NFT, functionality of the application, and level of security. "
                    },
                    {
                        question: "How long does it take to build an NFT marketplace?",
                        answer: "The time to build an NFT marketplace varies. However, to build a marketplace that has all the basic features on offer, you’ll require at least six months. The timeline of your project delivery also greatly depends upon the quality of NFT game development services you hire for the job. "
                    }
                ]}
            />
            <BlogPosts />
            <GlobalPresence />
        </>
    )
}

export default page
