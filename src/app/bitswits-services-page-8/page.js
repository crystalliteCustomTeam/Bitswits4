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
        { label: "Full-Cycle Game Development", index: 0 },
        { label: "Tokenomics", index: 1 },
        { label: "Blockchain Porting", index: 2 },
        { label: "Asset Creation", index: 3 },
        { label: "Integration Services", index: 4 }
    ];
    const sections = [
        [
            {
                num: "",
                title: "Full-Cycle Game Development",
                content: `<p class='font-medium manrope'>Our app development company has all the necessary team members needed to create a Blockchain game, starting from the development of an idea and ending with the creation of a game and subsequent support. We pay close attention and always plan and design every phase of the development, making the gaming experience as smooth and engaging as possible.</p>`
            },
        ],
        [
            {
                num: "",
                title: "Tokenomics",
                content: `<p class='font-medium'>Speaking of tokens, our Blockchain game developers have the ability to generate exclusive tokens inside the game on top Blockchain platforms. These are in-game tokens such as currencies, governance, utility, security tokens, etc. These tokens add to the game interface especially because they help the players explore different forms of interactions, trades, and investments among others within the game’s environment.</p>`
            },
        ],
        [
            {
                num: "03",
                title: "Blockchain Porting",
                content: `<p class='font-medium'>We can also integrate your developed games into the Blockchain as well. While analyzing your games, we implement Blockchain-focused features while leaving the overall gameplay experience intact. This makes it possible for traditional games to adopt Blockchain from a transparency and security point of view while also ensuring that it transitions seamlessly from the traditional environment into the decentralized ecosystem.</p>`
            },
        ],
        [
            {
                num: "",
                title: "Asset Creation",
                content: `<p class='font-medium'>Our veteran team of Blockchain game developers designs unique in-game assets, which are further tokenized in the form of NFTs. Taking into account various input parameters and types of art, we create and tokenize 2D and 3D assets using AI and metadata. These assets can be bought and sold, as well as gamed within the game environment. </p>`
            },
        ],
        [
            {
                num: "",
                title: "Integration Services",
                content: `<p class='font-medium'>We have highly experienced gaming programmers in different technologies that enable them to put as many integrations as possible in the custom Blockchain game. Whether it is the additions of new aspects of Blockchain or making your game compatible with other platforms, our team makes sure your game stands out from the competition.</p>`
            },
        ]
    ];
    const servicesData = [
        ["Custom Game Development", "We have experienced game developers who can create new-generation Web3, Blockchain, and Metaverse games based on the newest technologies. Most of our games are designed to fit certain project specifications and conditions."],
        ["Smart Contract Development", "Manage your Blockchain game assets with smart contracts for a smooth gaming experience. With extensive experience in multiple smart contract languages and technology setups, we assist businesses in integrating and deploying P2E and other apps."],
        ["VR/AR/MR Game Development", "Our team is proficient with all the trending tools and technologies. We develop intriguing and innovative games based on VR and AR technology to enhance the gaming experience and design."],
        ["Cross-Platform Game Development", "Deploy our cross-platform game development services to create powerful web3 games that are engaging in terms of response. Develop games that simulate real-world environments & can be played on multiple devices."],
        ["Unity 3D/Unreal Engine Game Development", "As a top-grade Blockchain game development company, we incorporate stringent Unity 3D, Blender, & Unreal Engine game development tools in our games to deliver a smooth gaming experience."],
        ["Wallet Integration", "We provide end-to-end crypto wallet development and integration services that allow players to manage their crypto tokens, in addition to exchanging their virtual assets in the form of NFTs." ]
    ];
    const storiesData = [
        [Success1, "CryptoQuest Adventures", 'BitsWits developed CryptoQuest Adventures, a thrilling journey where players solve puzzles and complete quests to earn valuable crypto rewards.'],
        [Success2, "BlockWars", 'BitsWits created BlockWars, a multiplayer strategy game featuring epic battles and secure blockchain-based asset trading and ownership.'],
        [Success3, "NFT Runners", 'We developed NFT Runners, a fast-paced racing game where players collect and trade unique NFT characters with special abilities and attributes.'],
        [Success4, "EtherMon Legends", 'BitsWits created EtherMon Legends, an RPG game where players capture and train mythical creatures, utilizing blockchain for decentralized asset management.']
    ];
    const cardsData = [
        ["Proven of <br class='d-xl-block d-none' /> Mastery", "We have successfully completed over 150 projects, showcasing our commitment to delivering high-quality solutions that meet and exceed client goals."],
        ["Customized <br class='d-xl-block d-none' /> Creations", "We develop custom Blockchain games tailored to your vision, ensuring each project meets your unique requirements and drives engagement."],
        ["Immersive <br class='d-xl-block d-none' /> Design", "We focus on creating intuitive, captivating designs that enhance player satisfaction and retention, maximizing the impact of your Blockchain game."],
        ["Robust <br class='d-xl-block d-none' /> Security", "Our games incorporate the latest security measures, safeguarding in-game assets and ensuring secure transactions, building trust with your players."],
        ["Ongoing <br class='d-xl-block d-none' /> Support", "We provide continuous maintenance and support, keeping your game updated with the latest features and innovations, ensuring long-term success."]
    ];
    const tabsData = [
        ["Discovery and Planning",
            "tab1",
            "In the initial phase, our Blockchain development firm conducts a thorough analysis of your project objectives. Utilizing tools like Unity & Unreal Engine, we define the project scope, identify the target audience, and then create detailed game design documents. This foundational step enables us to craft a strategic roadmap that aligns the Blockchain game development process with your goals, ensuring long-term success."],
        ["UI/UX Design",
            "tab2",
            "Next, our skilled Blockchain game designers utilize tools such as Unity and Adobe XD to create visually captivating and intuitive interfaces. We prioritize user experience, focusing on seamless gameplay mechanics and immersive aesthetics. By designing interfaces that resonate with your players, we enhance engagement and retention, making your game functional & visually appealing. This approach ultimately drives players towards your game. "],
        ["Development",
            "tab3",
            "In the development phase, we build robust frontend & backend solutions that emphasize scalability, security, and real-time interaction. Our developers utilize solidity for smart contract development and integrate Blockchain protocols like Ethereum and Polygon to ensure a seamless gaming experience across different platforms, positioning your game competitively in the market."],
        ["Testing and QA",
            "tab4",
            "Testing & QA plays a crucial role in Blockchain game development. Using tools such as Truffle and Ganache, our QA team conducts rigorous testing to identify and resolve potential issues. Our refined testing approach ensures a stable and reliable game, providing players with a high-quality experience that enhances satisfaction and minimizes disruptions, providing transparency and long-term engagement."],
        ["Deployment",
            "tab5",
            "We manage the deployment process, ensuring compliance with Blockchain network standards and optimization for decentralized platforms. Our team implements effective strategies for Blockchain game distribution and visibility, enhancing discoverability and user acquisition. This streamlined approach facilitates a successful launch, reaching your target audience effectively and maximizing initial engagement, setting the stage for sustained success in the competitive gaming market."],
        ["Maintenance and Support",
            "tab6",
            "Post-deployment is also highly important after the game's release. We offer ongoing maintenance and support services using tools like GitHub and Remix. Our services include regular updates, performance optimizations, and feature enhancements to keep your game up-to-date with evolving Blockchain technologies. As dedicated Blockchain game developers, we help your game adapt to market trends, and maintain player engagement, ensuring your game remains competitive."]
    ];
    const HoustonContent = {
        menus: menus,
        sections: sections,
    };
    const tabsData2 = [
        ["Frontend Development",
            "tab1",
            [
                [TechOne, "Unity"],
                [TechTwo, "Unreal Engine"],
                [TechThree, "WebGL"],
                [TechFour, "Three.js"]
            ]],
        ["Backend Development",
            "tab2",
            [
                [TechEleven, "Node.js"],
                [TechFourteen, "Python (Django with Blockchain integration)"],
                [TechThirteen, "Golang"],
                [TechThirteen, "C++"]
            ]],
        ["Mobile Development",
            "tab3",
            [
                [TechNineteen, "Unity"],
                [TechTwenty, "Unreal Engine"],
                [TechTwentyOne, "Flutter"]
            ]],
        ["Database Management",
            "tab4",
            [
                [TechThirtySeven, "IPFS (InterPlanetary File System)"],
                [TechThirtyEight, "MongoDB"],
                [TechThirtySeven, "Firebase Realtime Database"],
                [TechThirtySeven, "PostgreSQL"]
            ]],
        ["Cloud Services",
            "tab5",
            [
                [TechThirtyFive, "AWS (Amazon Web Services) for backend services"],
                [TechThirtySix, "Google Cloud Platform for backend services"],
                [TechThirtySeven, "Microsoft Azure"]
            ]],
        ["Testing & QA Tools",
            "tab6",
            [
                [TechFourtyOne, "Truffle"],
                [TechFourtyTwo, "Hardhat"],
                [TechFourtyThree, "MythX"],
                [TechFourtyThree, "Mocha"]
            ]],
    ];
    return (
        <>
            <Banner
                title={`Leading <span class='newfycolr'> Blockchain Game <br class="d-xl-block d-none"/> </span> Development Company`}
                desc="BitsWits is a leading Blockchain game development company with over 10+ years of experience. Our expert Blockchain game developers & talented designers assist businesses in creating engaging, revenue-generating Blockchain games that captivate players and attract investors. "
            />
            <CaseStudies />
            <Acheived
                title="Awards & Recognitions"
                desc="Our hard work and creativity have earned us awards from leading industry platforms, <br class='d-lg-block d-none'/> making BitsWits a top Blockchain game development company."
            />
            <CuttingEdge
                title="Premium Blockchain Game Development Services for Exceptional Experiences"
                desc="As a leading Blockchain game development company, we specialize in delivering cutting-edge Blockchain game development services that help businesses thrive swiftly. "
                services={servicesData}
            />
            <SuccessfulApp
                title="A <span class='newfycolr'>Quick Glimpse</span> Of Our Extensive Portfolio"
                desc="With our experienced team of Blockchain game developers, we have delivered 150+ innovative projects across diverse gaming genres."
                successStories={storiesData}
            />
            <AppIdea
                title="Future-Proof Your Games with Blockchain Technology"
                desc="Deliver a next-level gaming experience with our award-winning Blockchain game developers!"
            />
            <WhyChoose
                desc="We are a leading Blockchain game development company, delivering innovative solutions that captivate game lovers & investors alike.:"
                cardData={cardsData}
            />
            <DevelopmentProcess
                title="Our Comprehensive <span class='newfycolr'>Blockchain Game Development</span> Process"
                desc="Being a reliable Blockchain development company, we ensure to provide tailor-made solutions for our respective clients. From ideation to launch, our game developers excel at every stage. Here is how we develop our game; "
                tabData={tabsData}
            />
            <MobileTechnologies
                title="Benefits of Blockchain Game Development for Startups & Enterprises "
                desc="Reach our Blockchain game development company in USA & get an indigenous app today."
            />
            <Testimonials
                testiCard={[
                    ["“Recently, we have hired BitsWits for Blockchain game development services to craft an exceptional Blockchain game based on our business goals. Surprisingly, they exceeded our expectations. Highly recommended!”", "Sarah Lee", "CEO, CryptoGame Innovations"],
                    ["“We were on the lookout for Blockchain game developers & we are glad we found them at BitsWits. Their expertise in Blockchain game development is unmatched. They deliver a game that attracts our users & investors, too.”", "David Johnson", "COO, BlockQuest Enterprises"],
                    ["“We have collaborated with BitsWits for our 3D game development based on Blockchain technology. Their team's dedication and innovative approach surpassed our vision, ensuring flawless support throughout. “", "Jessica Wong", " Founder, PixelChain Games"],
                    ["“BitsWits expertise in Blockchain game development is evident from the initial start to the final launch of a product. They delivered a robust, secure game that helps us generate huge revenue shortly & helps to attract large user-base.“", "Alex Davis", " CTO, CryptoHeroes Ltd "],
                    ["“BitsWits Blockchain game development services were truly remarkable. Their attention to detail and commitment to excellence resulted in a Blockchain game that exceeded our expectations, demonstrating their role as partners in success.“", "Mark Thompson", "Head of Gaming, Blockchain Innovations Inc."],
                ]}
            />
            <SmallBanner
                title="Create a Wow-Worthy Blockchain Game With Us!"
                desc="Partner with our award-winning team to develop a cutting-edge blockchain game that captivates players and delivers exceptional ROI."
                cta='Build Your Blockchain Game!'
            />
            <ApplicationOffer
                title="Additional <span class='newfycolr'> Blockchain Game Development</span> Services"
                desc="At BitsWits, we offer advanced Blockchain game development services for all sizes of businesses. Our skilled game developers are aware of all the complexities of Blockchain games, hence you could expect a premium-quality digital app. Here are the services we offer; "
                content={HoustonContent} />
            <EstimatedCost
                title="Explore Distinct Blockchain Game Development Cost Based on App Complexity"
                desc="Explore our estimated costs for Blockchain game development, tailored to various levels of complexity. Below, these approximate figures provide insight into bringing your Blockchain game idea to life."
                costingCard={[
                    ["Simple GamesSimple Games",
                        "$10,000 - $60,000",
                        "Simple games with basic mechanics and minimal graphics, ideal for casual gameplay lies between $10,000 - $60,000. Examples include puzzle games or casual arcade games."],
                    ["Moderately Complex Games",
                        "$60,000 - $150,000",
                        "Games with more intricate gameplay mechanics, complex features & functionalities, advanced graphics, and basic Blockchain integrations range from $60,000 - $150,000. Examples include strategy games or multiplayer card games."],
                    ["Complex Games",
                        "$150,000 - $300,000+",
                        "Highly immersive games with advanced gameplay features, intuitive graphics, and extensive Blockchain implementations lie between $150,000 - $300,000+. Examples include MMORPGs or virtual reality Blockchain games."],
                ]}
                spcTitle="Calculate Your App Cost"
                spcDesc="Curious about your Blockchain game development cost? Use our game development cost calculator to get an accurate estimate instantly."
            />
            <Fueling
                title="Integrating Cutting-Edge Technologies in <span class='newfycolr'>Blockchain Game Development</span>"
                desc='We capitalize on pioneering technologies to make extraordinary games that help your brand escalate to higher levels. Discover how these innovations amplify user experiences & improve game functionality.'
                genres={[
                    ["NFTs (Non-Fungible Tokens)", "NFTs introduce a revolutionary level of ownership and uniqueness to in-game items. Each token represents a distinct asset that players can trade, sell, or collect. This innovation creates dynamic revenue streams and cultivates a thriving in-game economy. "],
                    ["Decentralized Finance (DeFi)", "DeFi seamlessly integrates financial services within the gaming ecosystem, encouraging players to earn, stake, or lend in-game currencies. This infusion of financial strategy enriches gameplay, transforming the gaming experience into a rewarding and multifaceted adventure."],
                    ["Cross-Chain Compatibility", "Cross-chain technology ensures seamless interoperability between different Blockchain networks. Players can effortlessly transfer assets and interact across multiple games and platforms, breaking down barriers and expanding the gaming ecosystem."],
                    ["AI & ML", "AI & ML technology helps in creating intelligent, adaptive game environments. These technologies enhance NPC behavior, making interactions more realistic and dynamic. Also, they improve player experiences and enable predictive analytics, resulting in more engaging and tailored gameplay. "],
                    ["Decentralized Autonomous Organizations (DAOs)", "DAOs enable players to participate in the governance and decision-making processes of their favorite games. By utilizing Blockchain technology, DAOs ensure transparency and fairness in how games are developed and managed. "],
                    ["Metaverse Integration", "Metaverse technologies create expansive, interconnected virtual worlds. Players can experience immersive social interactions and economies, providing a seamless, engaging experience that transcends traditional gaming boundaries. Connect with our Blockchain game development company to launch your game. "]
                ]}
            />
            <YourTech
            title="Our Tech Stack for <span class='newfycolr'>Blockchain Game Development</span>"
            desc="As a leading Blockchain development company, we have proficiency with the latest technologies. "
            tabsData={tabsData2} />
            <Industries
                desc="We accommodate a wide range of industries, delivering customized Blockchain game development solutions <br class='d-lg-block d-none'/> based on your specific needs & business goals, ensuring consistent revenue & driving growth."
                industriesCards={[
                    [slide1, "Healthcare", "Our healthcare mobile applications are designed to help in the management of patient care, appointments and to foster better interaction between patients and physicians, ensuring seamless & enhanced communication. "],
                    [slide2, "Education", "Our educational apps are helping students in online education and keep the students engaged. We offer engaging content, online lessons, & learning management tools, helping educational institutions improve their processes.  "],
                    [slide3, "Finance", "We design and develop robust applications for mobile banking and personal finances. It helps users to gain real-time information about their finances, making transactions and financial management easy."],
                    [slide4, "Retail", "Our retail apps offer solutions to inventory and contain promotions that can be linked to the overall shopping experience. Convenience such as mobile payment, customer rewards, and product recommendations enhance client satisfaction."],
                    [slide5, "Real Estate", "We design and develop real estate applications that help out in listings and virtual property tours. Our services enable users to access various properties, making the entire buying & renting process smooth."],
                    [slide5, "Travel & Hospitality", "Our travel apps offer convenient & flexible solutions for the travel industry. It also strengthens users by providing them with an opportunity to book appropriate accommodation and discover interesting locations."],
                    [slide5, "Logistics & Transportation", "We design logistics apps concerning the management of vehicle fleets, tracking of consignments, & determination of routes. Our apps improve organizational productivity to control the third-party logistics services to meet clients’ desires."],
                    [slide5, "Food & Beverage", "Features such as order customization, delivery tracking, and payment processing contribute to making our food delivery apps more valuable to customers. Also, we ensure our apps effortlessly manage business operations effectively."],
                    [slide5, "Entertainment", "We build apps that let users stream content and engage in gameplay scenarios. Our app enables users to explore music, videos, and live performances, therefore giving the user a fulfilling experience."],
                    [slide5, "E-commerce", "Our e-commerce apps encompass the various aspects of shopping such as product offerings, secure payment, and order tracking. Companies can track stock to effectively sell their products online."],
                ]}
            />
            <JournyForm
                title="Excited to Release Your Blockchain Game App?"
                subTitle="Book a Free Discovery Call!"
                desc="Schedule a free consultation with our Blockchain game developers & get a precise cost for your mobile app today! "
            />
            <Faqs
                classes="align-items-center"
                faqsData={[
                    {
                        question: "What Blockchain game development services do you offer?",
                        answer: "At BitsWits, we offer a comprehensive range of Blockchain game development services, including game design, smart contract integration, NFT creation, decentralized finance (DeFi) implementation, cross-chain compatibility, and ongoing maintenance and support. Our services are tailored to provide a seamless and engaging gaming experience."
                    },
                    {
                        question: "How do I get started with your Blockchain game development services?",
                        answer: "To get started with our Blockchain game development services, simply contact us to discuss your project requirements. Our team of experts will guide you through the process, from initial concept and design to development and deployment, ensuring a seamless and successful launch of your Blockchain game."
                    },
                    {
                        question: "How does a Blockchain gaming platform benefit players and developers?",
                        answer: "A Blockchain gaming platform benefits players by offering true ownership of in-game assets, enhanced security, and the ability to trade or sell items. Developers benefit from reduced fraud, increased transparency, and new monetization opportunities through NFTs and DeFi mechanisms. This creates a more interactive and profitable ecosystem for all participants."
                    },
                    {
                        question: "What are the costs associated with Blockchain game development?",
                        answer: "The cost of Blockchain game development varies based on the complexity and features of the game. Simple Blockchain games might cost between $10,000 - $60,000, while more complex games can range from $60,000 - $150,000 or more. Connect with our firm to get an estimate for your dream game app. "
                    },
                    {
                        question: "What factors influence the development timeline of a Blockchain game?",
                        answer: "Several factors influence the development timeline of a Blockchain game, including: <ul class='text-black manrope font-medium'><li class='text-black'>The complexity of game mechanics and features.</li><li class='text-black'>The choice of Blockchain platform, smart contracts, and integration of technologies like NFTs and DeFi.</li><li class='text-black'>The size and expertise of the development team.</li><li class='text-black'>The time required for testing, debugging, and iterating on the game.</li></ul>"
                    }
                ]}
            />
            <BlogPosts />
            <GlobalPresence />
        </>
    )
}

export default page
