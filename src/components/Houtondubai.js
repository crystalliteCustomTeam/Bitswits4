"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Houtondubai.module.css";

const menus = [
    "Houston App Development Costs According To Business Size",
    "Cost Of Mobile App Development In Houston For A Startup",
    "Cost Of Mobile App Development In Houston For Mid-Sized Businesses",
    "Cost Of App Development In Houston For Enterprises",
    "Cost Of App Development In Houston For Individuals",
    "Mobile App Development Costs For B2B Clients",
    "Mobile App Development Costs For B2C Customers",
    "Exploring Mobile App Development In Houston – Industries, Innovations, And Opportunities",
    "Unlocking Houston’s Digital Potential – Trango Tech’s Footprint"
];

const sections = [
    {
        title: "Houston App Development Costs According To Business Size",
        content: `<p class='fontsfregular'>App development not only involves aesthetic designs and intuitive features. In fact, it’s more than just coding. In short, understanding the financial aspects, especially the cost of building a mobile app in Houston is equally crucial.</p>
        <p class='fontsfregular'>As a seasoned mobile app development company in Houston, Trango Tech recognizes the delicate balance between achieving your app vision and managing costs effectively.</p>
        <p class='fontsfregular'>Expenses can vary significantly based on different aspects. And you won’t find any exact cost anywhere. </p>
        <p class='fontsfregular'>In general, for simpler apps, the cost usually ranges from $15,000 to $50,000. However, as complexity increases, the investment can go up to around $50,000 to $300,000 or even more.</p>
        <p class='fontsfregular'>These figures give you a starting point, but in reality the costs are influenced by a range of factors that change over time. </p>
        <p class='fontsfregular'>Calculating the cost involves various factors. Some of them are;</p>
        <ul>
            <li>How intricate your app idea is? </li>
            <li>What features will it require? </li>
            <li>The platforms it will run on. </li>
            <li>And the timeline for development. </li>
        </ul>
        <p class='fontsfregular'>  Our skilled team of Houston mobile app developers engages in open discussions to comprehend your unique needs. </p>
        <p class='fontsfregular'>This leads us to provide you with a personalized quote that fits your vision, budget, and goals. </p>
        <p class='fontsfregular'>At Trango Tech, transparency is at the core of our pricing approach.</p>
        <p class='fontsfregular'> We firmly believe that being cost-effective shouldn’t mean compromising the quality or functionality of the final product. </p>
        <p class='fontsfregular'>Rest assured, we are dedicated to delivering both value and outstanding performance for our valued clients.      </p>`
    },
    {
        title: "Cost Of Mobile App Development In Houston For A Startup",
        content: `<p class='fontsfregular'>Estimating the expenses for app development in Houston involves multiple variables. For instance,</p>
        <ul>
            <li>The intricacy of the app </li>
            <li>Its features and functions </li>
            <li>Targeted platforms </li>
            <li>And the development team’s experience</li>
        </ul>
        <p class='fontsfregular'>All of the above factors contribute in determining the final cost of creating a mobile app in Houston.</p>
        <p class='fontsfregular'>On average, building a basic app for a single platform may range from $20,000 to $50,000. </p>
        <p class='fontsfregular'>Similarly, a more intricate app’s cost could extend between $50,000 to $150,000 or beyond. </p>
        <p class='fontsfregular'>Keep in mind, that these figures aren’t rigid but provide an overview of potential expenditures. </p>
        <p class='fontsfregular'>For startups, an option is to start with a (MVP),. The reason is that it helps to determine the app’s performance and functionality in the long run. </p>
        <p class='fontsfregular'>Small businesses exploring app development should expect costs between $15,000 to $100,000, based on the customization requirements and complexity of an app. </p>
        <p class='fontsfregular'>Ultimately, working with a reliable app development company in Houston like Trango Tech ensures not just affordability but a balance between quality and cost-effectiveness. </p>
        <p class='fontsfregular'>Overall, it’s essential to consider your budget and requirements carefully and work with a reputable Houston mobile app development company that can provide a high-quality app at a reasonable cost. </p>`
    },
    {
        title: "Cost Of Mobile App Development In Houston For Mid-Sized Businesses",
        content: `<p class='fontsfregular'>When considering the development of an app for your mid-sized business in Houston, there are multiple factors that influence the cost. </p>
        <p class='fontsfregular'>These factors encompass the app’s complexity, desired features, chosen platform(s), and the extent of personalization required. </p>
        <p class='fontsfregular'>On average, the investment for a mid-sized business app can span from $50,000 to $250,000 or more. </p>
        <p class='fontsfregular'>This range accounts for the comprehensive process – from design and development to testing, deployment, and continuous maintenance. </p>
        <p class='fontsfregular'>While developing an app for your mid-sized business requires a substantial investment, the potential returns are equally remarkable if executed strategically. </p>
        <p class='fontsfregular'>Collaborating with an adept app development company Houston is paramount. </p>
        <p class='fontsfregular'>They can provide you with a detailed cost estimate and navigate you through the development journey. In the end, you can expect a tailored outcome that aligns with your business objectives. </p>`
    },
    {
        title: "Cost Of App Development In Houston For Enterprises",
        content: `<p class='fontsfregular'>Creating an app for a Fortune 500 or enterprise-level company entails a more substantial financial commitment compared to other brick-and-mortar businesses. </p>
        <p class='fontsfregular'>The intricacy of these apps, along with the integration required with existing enterprise systems, contributes to higher expenses and extended development timelines. </p>
        <p class='fontsfregular'>The cost of developing an enterprise-level app can range from $500,000 to $1 million. </p>
        <p class='fontsfregular'>This cost range depends on factors such as the complexity of the app and the specific features needed. </p>
        <p class='fontsfregular'>This estimate encompasses all phases, from design and development to testing, deployment, and ongoing maintenance. </p>
        <p class='fontsfregular'>To ensure the success of such a significant investment, it’s crucial to collaborate with an experienced Houston app development team that comprehends enterprise-level systems. </p>
        <p class='fontsfregular'>They can offer a detailed estimate tailored to your business’s unique requirements. </p>
        <p class='fontsfregular'>Although enterprise apps demand a substantial financial commitment, the benefits they bring would be tremendous. </p>
        <p class='fontsfregular'>In short, you can acquire increased efficiency, streamlined workflows, and enhanced customer engagement. </p>`
    },
    {
        title: "Cost Of App Development In Houston For Individuals",
        content: `<p class='fontsfregular'>For individuals seeking app development in Houston, the expenses can significantly vary based on the app’s complexity and desired features. </p>
        <p class='fontsfregular'>On average, the cost of developing a simple app can range from $10,000 to $50,000. </p>
        <p class='fontsfregular'>In contrast, more complex mobile apps with advanced functionalities might incur costs exceeding $150,000 or more. </p>
        <p class='fontsfregular'>Several factors impact app development costs for individuals, including the platforms the app will be built for, the level of customization required, design intricacy, and the specific functionalities. </p>
        <p class='fontsfregular'>Partnering with an experienced Houston app development company is paramount to achieving your vision within your budget. </p>
        <p class='fontsfregular'>They can provide a tailored estimate, guide you through the development process, and ensure your app aligns with your goals and financial plan. </p>
        <p class='fontsfregular'>Whether you’re an enterprise or an individual, investing in a skilled mobile app development company Houston can help you bring your app idea to life effectively.  </p>`
    },
    {
        title: "Mobile App Development Costs For B2B Clients",
        content: `<p class='fontsfregular'>Unravelling the cost of developing apps for B2B clients in Houston is influenced by multiple factors. For an illustration, </p>
        <p class='fontsfregular'>The complexity of the app, the demanded features, platform compatibility, and customization levels collectively contribute to the financial investment. </p>
        <p class='fontsfregular'>On average, the cost to create a B2B app can fluctuate between $50,000 and $250,000, potentially exceeding these estimates. </p>
        <p class='fontsfregular'>This cost estimate encompasses the entire app journey, from design and development to rigorous testing, seamless deployment, and continual maintenance. </p>
        <p class='fontsfregular'>Unlike B2C apps, B2B applications necessitate heightened personalization and integration with existing systems. </p>
        <p class='fontsfregular'>The design must be meticulously crafted to cater to end-users distinct business requisites. </p>
        <p class='fontsfregular'>Collaborating with skilled mobile app developers in Houston is pivotal, ensuring precise cost estimates and a seamless app development process. </p>
        <p class='fontsfregular'>Investing in a thoughtfully designed and functionally rich B2B app yields significant benefits, thus, delivering an impressive return on investment. </p>
        <p class='fontsfregular'>This enhancement in efficiency and streamlined workflows substantially contributes to elevated business operations. </p>`
    },
    {
        title: "Mobile App Development Costs For B2C Customers",
        content: `<p class='fontsfregular'> The price for mobile apps for B2C businesses varies based on parameters such as app complexity, features, functionalities, chosen platforms, and the proficiency of the development team. </p>
        <p class='fontsfregular'> Broadly speaking, creating a basic app with fundamental functionalities can cost anywhere from $15,000 to $50,000. </p>
        <p class='fontsfregular'> Conversely, crafting a more intricate app enriched with advanced attributes might necessitate an investment ranging from $50,000 to $500,000, or even more. </p>
        <p class='fontsfregular'> Several factors that influence the development costs include </p>
        <p class='fontsfregular'> App Platform: Costs differ based on whether the app targets iOS, Android, or both platforms. </p>
        <p class='fontsfregular'> App Design: A well-crafted design along with impressive UI/UX influence the overall cost. </p>
        <p class='fontsfregular'> App Features: Incorporating advanced elements like AI integration, payment gateways, and social media linkage can elevate app expenses. </p>
        <p class='fontsfregular'> App Development Team: The proficiency and geographical location of the development team influence expenditure, with teams from higher-cost regions potentially escalating costs. </p>
        <p class='fontsfregular'> Maintenance and Updates: Regular maintenance and updates are integral, safeguarding the app’s performance. </p>
        <p class='fontsfregular'> It’s imperative to recognize that these factors more or less influence B2C app development expenses. </p>
        <p class='fontsfregular'> Actual costs hinge on individual project nuances and specific requisites. </p>
        <p class='fontsfregular'> Collaborating with a seasoned mobile app development company in Houston is pivotal to determine cost estimates. </p>`
    },
    {
        title: "Exploring Mobile App Development In Houston – Industries, Innovations, And Opportunities",
        content: `<p class='fontsfregular'>Houston’s dynamic growth paints a vivid picture of a city rapidly establishing its presence in the technology realm. </p>
        <p class='fontsfregular'>The tech landscape here is a mosaic of industries spanning healthcare, energy, aerospace, and software development. </p>
        <p class='fontsfregular'>According to insights from the Houston Technology Center, the city proudly hosts over 4,000 tech companies, housing an impressive workforce of approximately 225,000 tech professionals. </p>
        <p class='fontsfregular'>Houston’s healthcare domain contributes significantly to its tech tapestry. </p>
        <p class='fontsfregular'>Renowned healthcare entities like the Texas Medical Center and MD Anderson Cancer Center are deeply invested in technological advancements. </p>
        <p class='fontsfregular'>The energy sector is equally pivotal, with giants like BP, ConocoPhillips, and Shell embracing technologies like artificial intelligence and machine learning to streamline operations and amplify efficiency. </p>
        <p class='fontsfregular'>In recent years, Houston’s entrepreneurial spirit has sparked a vibrant startup culture. </p>
        <p class='fontsfregular'>This ecosystem thrives thanks to Houston’s diverse populace, offering a rich pool of talent and potential clientele. </p>
        <p class='fontsfregular'>Capital infusion into Houston’s tech ventures has been noteworthy, with startups securing over $300 million in venture capital in 2023, as reported by Pitchbook. </p>
        <p class='fontsfregular'>Organizations such as the Greater Houston Partnership and the Houston Angel Network bolster the tech scene with resources and guidance, empowering entrepreneurs and established players alike. </p>
        <p class='fontsfregular'>In short, Houston’s tech landscape is an evolving masterpiece, a canvas of diversity and growth. </p>`
    },
    {
        title: "Unlocking Houston’s Digital Potential – Trango Tech’s Footprint",
        content: `<h5>Exploring the Vibrant Tapestry of Houston </h5>
        <p class='fontsfregular'>When Houston enters the conversation, it’s often linked to its oil and gas prowess. Yet, the city’s vibrant tapestry is woven with diverse industries. </p>
        <h5>Ranked #4 in Fortune 500 headquarters, Houston boasts more than just energy giants. </h5>
        <p class='fontsfregular'>Companies like Sysco and Waste Management call this city home, demonstrating its prowess across various sectors. </p>
        <h5>Houston’s Ecosystem of Opportunity </h5>
        <p class='fontsfregular'>This vibrant city isn’t just about big names; it’s a thriving ecosystem teeming with potential for startups, entrepreneurs, and local businesses. </p>
        <p class='fontsfregular'>As pioneers in app development in Houston, Trango Tech have recognized this dynamic backdrop, thereby, catalyzing local businesses onto the global stage. </p>
        <h5>A Digital Odyssey with Landry’s Inc.</h5>
        <p class='fontsfregular'>Landry’s Inc., is an emblematic force in dining, hospitality, and entertainment. Born in the heart of Houston in 1980, Landry’s has scripted a digital saga. </p>
        <img src="/newdubai/newcom.png" class='img-fluid' />
        <p class='fontsfregular'>The Landry’s Select Club app has redefined convenience for patrons, offering a seamless experience to locate venues, peruse menus, and make secure reservations. </p>
        <p class='fontsfregular'>This is the fusion of digital accessibility and value infusion, a paradigm reshaping the culinary landscape. </p>
        <h5>2nd.MD – A Healthcare Revolution  </h5>
        <p class='fontsfregular'>Beyond gastronomy, Houston’s app development narrative extends to healthcare through 2nd.MD. </p>
        <p class='fontsfregular'>This healthcare trailblazer’s mobile app has redefined medical consultations by connecting users with specialized doctors. </p>
        <p class='fontsfregular'>The profound impact of technology on lives is palpable, and 2nd.MD stands as a testament to how digital innovation can be a game-changer. </p>`
    }
];

const Section = ({ section, refCallback }) => {
    const { title, content } = section;

    return (
        <section id={title} ref={refCallback} className={`${styles.understand}`}>
            <div className="content">
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </section>
    );
};

const Processpro = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
    const [visibleSection, setVisibleSection] = useState(menus[0]);

    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleSection(entry.target.getAttribute("id"));
                    console.log(entry.target.getAttribute("id"));
                }
            });
        });
        sectionsRef.current.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    const refCallback = useCallback((element) => {
        if (element) {
            sectionsRef.current.push(element);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (selectedSection) {
            const section = sectionsRef.current.find(ref => ref.id === selectedSection);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [selectedSection]);
    const handleOnChangeSelect = (e) => {
        setSelectedSection(e.target.value);
        setVisibleSection(e.target.value);
    }
    return (
        <>
            <section className={styles.houston}>
                <Container>
                    <Row className={styles.tone}>
                        <Col lg={5} className='p-0 text-center'>
                            {isMobile ? (
                                <select onChange={handleOnChangeSelect} value={selectedSection && visibleSection}>
                                    <option value={visibleSection}>{visibleSection}</option>
                                    {menus.map((menu, index) => (
                                        <option key={index} value={menu}>{menu}</option>
                                    ))}
                                </select>
                            ) : (
                                <nav className={`${styles.applicationlong} newfinfler`}>
                                    <ul className="position-sticky top-0">
                                        {menus.map((menu, index) => (
                                            <li key={index} className={visibleSection === menu ? styles.active : ""}>
                                                <a href={`#${menu}`}>{menu}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </Col>
                        <Col lg={7} className='p-0'>
                            <div className={`${styles.posto} newscoolr`}>
                                {sections.map((section, index) => (
                                    <Section {...{ section, refCallback }} key={index} />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Processpro