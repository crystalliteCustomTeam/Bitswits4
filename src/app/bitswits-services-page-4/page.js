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
        { label: "PC", index: 0 },
        { label: "Console", index: 1 },
        { label: "Mobile", index: 2 },
        { label: "AR/VR", index: 3 },
        { label: "Cross-Platform", index: 4 },
    ];
    const sections = [
        [
            {
                num: "",
                title: "PC",
                content: `<p class='font-medium manrope'>We craft engaging 2D games for both Windows and macOS. Our expertise includes porting games to various PC environments and optimizing graphics for larger screens. Using engines like Unity, Unreal Engine, and Godot, we deliver immersive gameplay that captivates players on desktops and laptops.</p>`
            },
        ],
        [
            {
                num: "",
                title: "Console",
                content: `<p class='font-medium'>Our team creates immersive 2D games for many consoles including Nintendo, Xbox, and PlayStation. We handle everything from concept to final porting, optimizing graphics and gameplay for console standards. What technology we use you ask? Only the best tech and tools like Unity, Unreal Engine, and Godot!</p>`
            },
        ],
        [
            {
                num: "03",
                title: "Mobile",
                content: `<p class='font-medium'>We specialize in cross-platform 2D game development for iOS and Android, providing a seamless experience across smartphones and tablets. Our process includes optimizing graphics and gameplay for smaller screens without sacrificing quality. Using cutting-edge tech, we create captivating 2D games for all mobile devices.</p>`
            },
        ],
        [
            {
                num: "",
                title: "AR/VR",
                content: `<p class='font-medium'>Our AR/VR game development focuses on crafting immersive experiences for virtual and augmented reality platforms. We create interactive 2D games for HTC Vive Pro, Valve Index VR Kit, Sony PlayStation VR, Meta Quest, and Apple Vision Pro. Using Unreal Engine and Unity, we develop games that transport players into new realms with lifelike interactions.</p>`
            },
        ],
        [
            {
                num: "",
                title: "Cross-Platform",
                content: `<p class='font-medium'> We excel in cross-platform 2D game development, making sure your game reaches a wider audience by running smoothly on multiple platforms. Using advanced engines like Unity, Unreal Engine, and Godot, we create games that are easily ported across PCs, consoles, mobile, and AR/VR. Our focus on optimizing graphics and gameplay guarantees a consistent and high-quality experience.</p>`
            },
        ],
    ];
    const servicesData = [
        ["Full-Cycle Development", "Our expert-vetted 2D game developers cover everything from initial concept to final release, delivering a seamless and engaging 2D game experience tailored to your vision and audience. We collaborate closely with you to deliver a polished and deployment-ready product."],
        ["2D Game Art Design", "Our talented artists bring your game's world to life with captivating visuals and detailed 2D artwork, developing wow-worthy characters and complex designs that enhance the player's experience."],
        ["2D Game Narrative Design", "We craft immersive stories and engaging narratives, ensuring your game captivates players with rich characters and compelling plotlines. Our narrative designers develop intricate story arcs that keep players invested and eager to discover more."],
        ["2D Game Animation", "Smooth, fluid animations are our hallmark, adding life and motion to characters and environments for an engaging gameplay experience. We focus on creating natural movements and expressive actions that make your game stand out."],
        ["User Interface Design", "We design intuitive, appealing interfaces to enhance user experience. Our striking designs keep players engaged from start to finish, making navigation effortless while prioritizing usability and aesthetic appeal."],
        ["Sound Design and Music", "We add depth and emotion to every moment of the gameplay by creating memorable music. Our audio experts have mastered the quality of producing dynamic sound effects to make sure the audio complements the overall game experience."],
    ];
    const storiesData = [
        [Success1, "Pixel Pioneers", 'Our team developed "Pixel Pioneers," a mobile game with vibrant 2D art and addictive mechanics, achieving a 55% increase in daily active users.'],
        [Success2, "Shadow Realms", 'BitsWits created "Shadow Realms," a 2D RPG game with deep narrative elements and dynamic combat, boosting player engagement by 70% within the first quarter.'],
        [Success3, "Cosmic Adventure", 'BitsWits developed "Cosmic Adventure", a console platformer featuring meticulous level design and captivating visuals, leading to a 50% rise in game sales.'],
        [Success4, "Arcane Quest", 'We delivered "Arcane Quest," a PC game with an intricate storyline and fluid animations, enhancing player satisfaction and driving a 60% revenue increase.'],
    ];
    const cardsData = [
        ["On-Time <br class='d-xl-block d-none' /> Delivery", "We ensure your 2D game launches on schedule, meeting market deadlines and maximizing your game’s impact."],
        ["250+ <br class='d-xl-block d-none' />  Professionals", "We have a team of 250+ skilled developers with expertise in cutting-edge tools like Unity, Unreal Engine, and Phaser."],
        ["Client-First <br class='d-xl-block d-none' /> Approach", "Our agile process prioritizes your vision, adapting to your needs and ensuring your goals are always at the forefront."],
        ["Streamlined Project <br class='d-xl-block d-none' /> Management", "Enjoy end-to-end transparency with our streamlined project management, keeping you informed and involved at every stage."],
        ["Consistent <br class='d-xl-block d-none' /> Support", "We offer continuous testing and support, ensuring a flawless and immersive 2D gaming experience from start to finish."]
    ];
    const tabsData = [
        ["Conceptualization",
            "tab1",
            "We start with deep research and brainstorming to craft a unique game concept. Collaborating closely with the stakeholders, we refine the initial idea to align perfectly with the requirements, laying a solid foundation for a successful project."],
        ["Game Narrative Design",
            "tab2",
            "Our storytellers create compelling narratives and dynamic characters that captivate players. We weave intricate plotlines and rich story arcs, ensuring your game's narrative keeps players engaged and enhances the overall experience."],
        ["Game Art and Character Design",
            "tab3",
            "Our game artists use stunning 2D visuals and best-designed characters to bring your game to life. Enhancing the aesthetics to the top of quality, each element of your game is created in a way that immerses the player in your world."],
        ["UI and Gameplay Design",
            "tab4",
            "We design intuitive interfaces and seamless gameplay mechanics. Our focus on user-friendly navigation and engaging gameplay loops ensures players enjoy a smooth and immersive experience from start to finish."],
        ["Game Development",
            "tab5",
            "Using the top game development engines like Unity and Unreal Engine, 2D game developers turn game designs into reality. We build robust, interactive 2D games that run flawlessly across all platforms, and deliver high-quality player experience and optimized performance."],
        ["Testing & QA",
            "tab6",
            "Through rigorous testing, we ensure your game is polished and bug-free. Our comprehensive QA process includes gameplay testing, performance checks, and user feedback sessions, delivering a flawless final product that meets the highest standards."],
        ["Launch Preparation",
            "tab7",
            "We prepare your game for a successful launch with optimized performance and strategic post-launch support. Our team handles live-ops support and retention rate analysis, ensuring a seamless transition from development to live play and maximizing your game's market impact."],
    ];
    const HoustonContent = {
        menus: menus,
        sections: sections,
    };
    const tabsData2 = [
        ["Game Engines",
            "tab1",
            [
                [TechOne, "Phaser"],
                [TechTwo, "GameMaker Studio"],
                [TechThree, "Unity (2D mode)"],
                [TechFour, "Godot (2D capabilities)"]
            ]],
        ["Programming Languages",
            "tab2",
            [
                [TechEleven, "C#"],
                [TechFourteen, "JavaScript"],
                [TechThirteen, "Python"]
            ]],
        ["Graphics & Design Tools",
            "tab3",
            [
                [TechNineteen, "Adobe Photoshop"],
                [TechTwenty, "Aseprite"],
                [TechTwentyOne, "Spine"],
                [TechTwentyTwo, "Tiled Map Editor"]
            ]],
        ["Databases",
            "tab4",
            [
                [TechThirtyEight, "SQLite"],
                [TechThirtySeven, "Firebase Realtime Database"]
            ]],
        ["Frameworks & Libraries",
            "tab5",
            [
                [TechThirtyFive, "Pixi.js"],
                [TechThirtySix, "SDL (Simple DirectMedia Layer)"],
                [TechThirtySeven, "Allegro"]
            ]],
        ["Testing & QA Tools",
            "tab6",
            [
                [TechFourtyOne, "Jenkins"],
                [TechFourtyTwo, "Selenium"],
                [TechFourtyThree, "JIRA"],
                [TechFourtyThree, "TestRail"]
            ]],
    ]
    return (
        <>
            <Banner
                title={`Top-Tier <span class='newfycolr'>2D Game <br class="d-xl-block d-none"/>  Development Company</span>`}
                desc="BitsWits is a premier 2D game development company helping gaming enthusiasts create adrenaline-pumping, interactive, and addictive 2D games. We offer top-tier 2D game development services using cutting-edge game development frameworks like Unity and Unreal Engine to build wow-worthy games for smartphones and PCs. "
            />
            <CaseStudies />
            <Acheived
                desc="BitsWits has a passion for building mind-boggling games with real-time interactive <br class='d-lg-block d-none' /> gameplay and oh-so-real graphics that keep users hooked and crave more!"
            />
            <CuttingEdge
                title="Cutting-Edge 2D Game Development Services For Exceptional Client Success!"
                desc="As a full-scale custom 2D game development company, our 2D game developers are geared towards building unforgettable gaming experiences."
                services={servicesData}
            />
            <SuccessfulApp
                title="Our Triumphs in <span class='newfycolr'>2D Game Development!</span>"
                desc="Explore our standout projects that revolutionized 2D gaming. These success stories illustrate our expertise in crafting games that drive business growth and player engagement."
                successStories={storiesData}
            />
            <AppIdea
                title="Get Your Dream Game Among the Top Ranking Charts!"
                desc="Book a free consultation with a leading 2D game development company like BitsWits and learn what you need to get started with your game development project. "
            />
            <WhyChoose
                desc="Experience top-notch game development with BitsWits. Our agile game development approach guarantees high quality, transparency, and scalability. Here’s why BitsWits is your ultimate choice for 2D game development:"
                cardData={cardsData}
            />
            <DevelopmentProcess
                title="Our <span class='newfycolr'>2D Game Development</span> Process"
                desc="At BitsWits, we transform mind-boggling ideas into hyper realistic, interactive, and adrenaline pumping 2D games through a meticulous, tried and true game development process. Here’s how we build remarkable 2D games. "
                tabData={tabsData}
            />
            <MobileTechnologies
                title="Hire 2D Game Development Company to Build Remarkable Games"
                desc="What you need is a top-quality 2D game development company in USA to create your perfect game world! Enjoy the flexibility to select expert developers who bring your vision to life. With advanced technology and innovative design, we deliver captivating games that achieve high player satisfaction and millions of downloads. Experience the difference of a bespoke game development process that guarantees exceptional results."
                cta="Let’s Talk!"
            />
            <Testimonials
                testiCard={[
                    ["BitsWits delivered exceptional 2D game development services. Their team created stunning visuals and engaging gameplay for our mobile puzzle game. Highly recommended for future projects!", "Lisa Chen", "CEO of PixelPlay Studios"],
                    ["The team at BitsWits exceeded our expectations. Their meticulous attention to detail ensured our retro platformer game on Android and iOS was flawless. We highly recommend their services!", "Robert Turner", "Project Manager at ArcadeMasters"],
                    ["BitsWits provided outstanding 2D game development for our educational game. Their ethics and minimal feedback needed during the project were impressive. We're excited to collaborate on future projects!", "Sophia Martinez", "CTO of GameHorizon"],
                    ["BitsWits' professional developers created a flawless UI/UX for our RPG game. Their dedication and precision were remarkable, delivering without any issues. Highly recommended!", "Olivia White", "Founder of AdventureQuest"],
                    ["BitsWits surpassed our expectations with their excellent 2D game development services. The team was responsive and handled all technical aspects of our arcade shooter game seamlessly. We look forward to future collaborations!", "James Cooper", "Lead Developer at FutureTech Games"],
                ]}
                cta='Let’s Talk!'
            />
            <SmallBanner
                title="Captivate Your Audience with Our Studio's Masterfully Crafted 2D Games!"
                desc="Deliver an immersive game experience with breathtaking visuals and flawless performance with the assistance of our expert team of game developers!"
                cta="Let’s Talk!"
            />
            <ApplicationOffer
                title="<span class='newfycolr'>2D Game Development</span> Across Platforms"
                desc="Our comprehensive 2D game development services cover all major platforms. From PCs to consoles, <br class='d-lg-block d-none'/> mobile, AR/VR, and more, we create games that offer smooth gameplay and captivating experiences."
                content={HoustonContent} />
            <EstimatedCost
                title="How Much Does 2D Game Development Cost?"
                desc="Understanding the financial scope of developing a 2D game is crucial for effective planning and budgeting. Below, we outline estimated costs across different platforms, providing insights into the investment required from a 2D game development perspective."
                costingCard={[
                    ["PC Games",
                        "$5K to $1.5 Million",
                        "Developing 2D games for PC typically ranges from $5,000 to $1.5 million. Costs vary based on factors such as complexity, scale, and development duration. Advanced graphics and intricate gameplay mechanics may increase expenses."],
                    ["Mobile",
                        "$3K to $200K",
                        "Creating a mobile 2D game can cost between $3,000 and $200,000. Basic games with simple mechanics start at the lower end, while games with advanced features and polished graphics may require higher investments. This flexibility allows for tailored budgeting based on desired game quality."],
                    ["Console",
                        "$30K to Several Hundred Thousand",
                        "2D game development for consoles starts at around $30,000 and can exceed several hundred thousand dollars for more ambitious projects. These games demand substantial resources and specialized development teams, positioning them between PC and mobile in terms of cost."],
                ]}
                spcTitle="Calculate Your Game Cost"
                spcDesc="Estimate your 2D game development cost considering platform requirements, game complexity, and desired features. Utilize our cost calculator for a detailed breakdown. Plan effectively and achieve your vision with our expert 2D game development services."
            />
            <Fueling
                title="We Cover All Genres in the <span class='newfycolr'>2D Game Development</span> World!"
                desc='Our 2D game development services cover all the top genres in the gaming industry - be it for smartphones, PCs, consoles, or any device.'
                genres={[
                    ["Arcade Games", "Dive into fast-paced action and endless fun with our 2D arcade games. We design captivating levels, quirky characters, and vibrant environments. From classic arcade themes to modern twists, our games offer thrilling challenges and smooth gameplay that keep players hooked."],
                    ["Action & RPG Games", "Immerse yourself in dynamic action and RPG adventures with our hyper realistic 2D games. Explore complex storylines, strategic combat, and richly detailed worlds that bring excitement and depth to every gaming session."],
                    ["Racing Games", "Feel the adrenaline in our hyper realistic 2D racing games. We design exciting tracks, diverse vehicles, and realistic physics for an immersive racing experience. Whether on city streets or off-road tracks, our games deliver competitive thrills and high-speed action."],
                    ["Casino & Card Games", "Enjoy the excitement of the casino with our polished 2D casino and card games. Featuring realistic graphics and seamless gameplay, our collection includes poker, blackjack, slots, and more. Experience high-stakes gaming with immersive visuals and smooth mechanics."],
                    ["Sport Games", "Step onto the virtual field with our hyper realistic 2D sports games. From soccer to cricket and football, we offer realistic gameplay, detailed player animations, and dynamic sports action. Our games provide an authentic sports experience that captures the thrill of the game."],
                    ["Adventure Games", "Embark on epic journeys with our immersive 2D adventure games. Solve puzzles, overcome challenges, and dive into captivating stories. Explore vast worlds, meet intriguing characters, and interact with environments that spark the spirit of adventure."]
                ]}
            />
            <YourTech tabsData={tabsData2} />
            <Industries
                desc="Discover how our tailored 2D game development solutions enhance engagement and streamline operations across <br class='d-lg-block d-none'/> healthcare, education, finance, retail, and more."
                industriesCards={[
                    [slide1, "Healthcare", "We help healthcare providers improve communication with patients, streamline appointment scheduling, and enhance health tracking. Customized solutions ensure better patient engagement and more effective healthcare delivery, resulting in improved outcomes."],
                    [slide2, "Education", "We create interactive 2D content that boosts student engagement and learning. Our solutions include educational games, simulations, and virtual classrooms, making education more immersive and effective, enhancing the overall learning experience."],
                    [slide3, "Finance", "We focus on creating secure, real-time financial data visualization and interactive tools. These applications enhance convenience and security, helping users better understand and manage their finances."],
                    [slide4, "Retail", "We help retailers drive sales and customer satisfaction through personalized 2D shopping experiences. Our solutions include virtual stores, interactive product displays, and mobile payment integration, providing an engaging shopping experience."],
                    [slide5, "Real Estate", "Our services allow clients to explore property listings, schedule viewings, and interact with virtual tours. These solutions help real estate professionals showcase properties more effectively, leading to increased customer interest."],
                    [slide6, "Travel & Hospitality", "We develop 2D applications that help travelers explore destinations, manage travel plans, and optimize itinerary management. Our solutions also include tools for travel agencies to optimize fleet management and improve customer service."],
                    [slide7, "Entertainment", "Our services for the entertainment industry include interactive games, virtual concerts, and immersive experiences. We help clients engage their audience with high-quality content, from music and videos to live events."],
                    [slide8, "Food & Beverage", "We create 2D solutions for the food and beverage industry to optimize their services with delivery tracking, mobile payment processing, and interactive menus. These features enhance customer satisfaction and streamline operations for better efficiency."],
                ]}
            />
            <JournyForm
                desc="Let’s bring your 2D game project to life with a personalized consultation and detailed project estimate."
            />
            <Faqs
                classes="align-items-center"
                faqsData={[
                    {
                        question: "How much does it cost to develop a 2D game?",
                        answer: "The cost of developing a 2D game can vary widely based on complexity. Basic mobile games start around $5,000 to $30,000, while more advanced projects can range from $50,000 to $300,000 or higher, depending on features and platform."
                    },
                    {
                        question: "What technologies and tools are used in 2D game development?",
                        answer: "2D game development leverages tools like GameMaker Studio, Unity (2D mode), and frameworks such as Phaser.js. Programming languages like C# and JavaScript are commonly used, alongside graphic design tools like Adobe Photoshop and Aseprite."
                    },
                    {
                        question: "What steps are involved in the 2D game development process?",
                        answer: "Our 2D game development process includes concept design, prototyping, artwork creation, coding, testing, and deployment. We focus on iterative development to ensure high-quality gameplay and user experience."
                    },
                    {
                        question: "How long does it take to develop a 2D game?",
                        answer: "Development timelines for 2D games vary based on complexity. Simple games may take a few weeks to a couple of months, while more elaborate projects can span several months to a year. We tailor timelines to meet project goals and ensure quality."
                    },
                    {
                        question: "What are best practices for hiring a 2D game development company?",
                        answer: "When selecting a 2D game development partner, consider their experience with similar projects, portfolio quality, client testimonials, and development process transparency. Look for a team that aligns with your vision and can deliver within your budget and timeline."
                    },
                    {
                        question: "How can I ensure my 2D game stays within budget and timeline?",
                        answer: "We provide detailed project estimates and transparent communication throughout development. Agile methodologies help manage scope changes, while regular milestones and progress updates keep you informed and in control."
                    },
                    {
                        question: "What are the advantages of using Unity vs. GameMaker Studio for 2D game development?",
                        answer: "Unity (2D mode) offers robust capabilities and scalability, ideal for complex 2D games with future growth in mind. GameMaker Studio focuses on rapid development and ease of use, making it suitable for smaller-scale projects and indie developers."
                    }
                ]}
            />
            <BlogPosts />
            <GlobalPresence />
        </>
    )
}

export default page
