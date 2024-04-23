"use client"
import React, { useEffect, useState } from "react";
// componets
import Bannerdubai from "../../components/Bannerdubainew";
import Whowearenew from "../../components/Whowearenew";
import Delivered from "../../components/Delivered";
import Expertappdubaiadvanced from "../../components/Expertappdubaiadvanced";
import Justbuilditlpdubai from "../../components/Justbuilditlpdubai";
import Globallplp6dubai from "../../components/Globallplp6dubai";
import Faqdubai from "../../components/Faqdubai";
import Technologieslpdubainew from "../../components/Technologieslpdubainew";
import LpChoosedubaishipnewdubai from "../../components/LpChoosedubaishipnewdubai";
import Globalmap from "../../components/Globalmap";
import Brand from "../../components/Brand";
import Latestblog from "../../components/Latestblog";
import Houtondubai from "../../components/Houtondubai";
//Images 
import blog1 from "/public/newdubai/blog1.png";
import blog2 from "/public/newdubai/blog2.png";
import blog3 from "/public/newdubai/blog3.png";
import StoryLine1 from "/public/newDubaiPagev1/storyLine1.png";
import StoryLine2 from "/public/newDubaiPagev1/storyLine2.png";
import StoryLine3 from "/public/newDubaiPagev1/storyLine3.png";
import StoryLine4 from "/public/newDubaiPagev1/storyLine4.png";
import StoryLine5 from "/public/newDubaiPagev1/storyLine5.png";
import Building from "/public/newhouston/builingImageeight.png";
import NewDubaiAwards from "@/src/components/NewDubaiAwards";
import DubiaDevelopers from "@/src/components/DubiaDevelopers";
import DubaiDelivered from "@/src/components/DubaiDelivered";
import DubaiTimeline from "@/src/components/DubaiTimeline";
import DubaiClients from "@/src/components/DubaiClients";
import StoryLine from "@/src/components/DubaiStoryLine";
import DeliveredBlack from "@/src/components/DeliveredBlack";
import NewDubaiBussiness from "@/src/components/NewDubaiBussiness";
import DubaiDevelopment from "@/src/components/DubaiDevelopment";
import DubaiDevelopmentUAE from "@/src/components/DubaiDevelopmentUAE";
import DubaiIOS from "@/src/components/DubaiIOS";
import DubaiAndriod from "@/src/components/DubaiAndriod";
import DubaiMobileApplication from "@/src/components/DubaiMobileApplication";
import DubaiConquered from "@/src/components/DubaiConquered";

export default function gamedevelopmentcompany() {
  const blogBox = [
    {
      img: blog1,
      title: 'Leading Grocery Delivery Apps Making Waves In Saudi Arabia',
      content: 'Remember Carrying Heavy Bags Of Groceries Under The Sizzling Saudi Sun? Those Days Are Fast Disappearing Into A Memory As The Expedient Rise Of...'
    },
    {
      img: blog2,
      title: 'Detail Overview For Online Shopping App In Saudi Arabia',
      content: 'Online Shopping Apps Have Become A Keystone Of Today’s Retail Business, Transforming The Shopping Experience With Unprecedented Ease And A Wide...'
    },
    {
      img: blog3,
      title: 'How To Develop An Android App: A Complete Guide',
      content: 'There Are Around 2.69 Million Apps For Android Smartphones. Almost Everyone Understands Android Apps, And Many Are Ready To Launch Their Own. But...'
    },
  ];
  const [showFolds, setShowFolds] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFolds(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  //=====StoryLine Fold=====//
  const accordionData = [
    {
      question: 'Android App Development In Dubai',
      answer: "Bitswits' Android mobile app development in Dubai is a result-centric process, bringing intuitive and experience-driven Android applications to life. As a prominent mobile app development company in Dubai, we aim to live up to our name and work to ensure that we remain at the top of the list of mobile app development companies in Dubai. Leveraging Android, an open-source platform, and combining it with the skills and expertise of our Android app development team in Dubai, we tap into the very core of Android apps and build revolutionary functionalities, features, and experiences that yield amazing results and help businesses achieve their objectives. Our mobile app development company in Dubai knows that the industry is becoming increasingly complex and competitive, with an application being published to the Google Play Store every now and then. Therefore, Bitswits' app developers in Dubai take the strategic route to develop best-in-class mobile applications that make an impact on the market.",
      StoryLineImg: StoryLine1,
    },
    {
      question: 'Iphone App Development In Dubai',
      answer: "Bitswits' Android mobile app development in Dubai is a result-centric process, bringing intuitive and experience-driven Android applications to life. As a prominent mobile app development company in Dubai, we aim to live up to our name and work to ensure that we remain at the top of the list of mobile app development companies in Dubai. Leveraging Android, an open-source platform, and combining it with the skills and expertise of our Android app development team in Dubai, we tap into the very core of Android apps and build revolutionary functionalities, features, and experiences that yield amazing results and help businesses achieve their objectives. Our mobile app development company in Dubai knows that the industry is becoming increasingly complex and competitive, with an application being published to the Google Play Store every now and then. Therefore, Bitswits' app developers in Dubai take the strategic route to develop best-in-class mobile applications that make an impact on the market.",
      StoryLineImg: StoryLine2
    },
    {
      question: 'Flutter App Development In Dubai',
      answer: "Bitswits' Android mobile app development in Dubai is a result-centric process, bringing intuitive and experience-driven Android applications to life. As a prominent mobile app development company in Dubai, we aim to live up to our name and work to ensure that we remain at the top of the list of mobile app development companies in Dubai. Leveraging Android, an open-source platform, and combining it with the skills and expertise of our Android app development team in Dubai, we tap into the very core of Android apps and build revolutionary functionalities, features, and experiences that yield amazing results and help businesses achieve their objectives. Our mobile app development company in Dubai knows that the industry is becoming increasingly complex and competitive, with an application being published to the Google Play Store every now and then. Therefore, Bitswits' app developers in Dubai take the strategic route to develop best-in-class mobile applications that make an impact on the market.",
      StoryLineImg: StoryLine3
    },
    {
      question: 'Game App Development In Dubai',
      answer: "Bitswits' Android mobile app development in Dubai is a result-centric process, bringing intuitive and experience-driven Android applications to life. As a prominent mobile app development company in Dubai, we aim to live up to our name and work to ensure that we remain at the top of the list of mobile app development companies in Dubai. Leveraging Android, an open-source platform, and combining it with the skills and expertise of our Android app development team in Dubai, we tap into the very core of Android apps and build revolutionary functionalities, features, and experiences that yield amazing results and help businesses achieve their objectives. Our mobile app development company in Dubai knows that the industry is becoming increasingly complex and competitive, with an application being published to the Google Play Store every now and then. Therefore, Bitswits' app developers in Dubai take the strategic route to develop best-in-class mobile applications that make an impact on the market.",
      StoryLineImg: StoryLine4
    },
    {
      question: 'Blockchain Game Development In Dubai',
      answer: "Bitswits' Android mobile app development in Dubai is a result-centric process, bringing intuitive and experience-driven Android applications to life. As a prominent mobile app development company in Dubai, we aim to live up to our name and work to ensure that we remain at the top of the list of mobile app development companies in Dubai. Leveraging Android, an open-source platform, and combining it with the skills and expertise of our Android app development team in Dubai, we tap into the very core of Android apps and build revolutionary functionalities, features, and experiences that yield amazing results and help businesses achieve their objectives. Our mobile app development company in Dubai knows that the industry is becoming increasingly complex and competitive, with an application being published to the Google Play Store every now and then. Therefore, Bitswits' app developers in Dubai take the strategic route to develop best-in-class mobile applications that make an impact on the market.",
      StoryLineImg: StoryLine5
    },
  ];
  const storyLine = {
    subtitle: (<> Business Empowering </>),
    title: (<> App Development Company in UAE </>),
    para: "With years of experience empowering startups and well-established brands with advanced app development solutions, we have garnered attention from several credible platforms worldwide, including Zawya and Lovin Dubai in Dubai. Our recognition in the mobile app development industry has solidified us as an end-to-end mobile app development solution provider. Our team of highly talented individuals is ready to take your mobile app development project to the next level.",
    accordionData: accordionData
  };

  // Banner Content
  const Banner = {
    title: "Mobile App Development Company Miami",
    desc: "BitsWits stands out as a leading mobile app development company in Washington DC due to offering state-of-the-art app development services and solutions. We have successfully delivered 100+ projects across the UAE. We specialize in creating customized yet data-driven solutions for all kinds of businesses, which distinguishes us from the rest of the competitors. Our mobile app developers in Washington DC are well-versed with the latest tools and technologies, which helps them create indigenous digital products. Reach out to our app development company today and let us handle all your app requirements.",
    pageSlug: "Mobile App Development Company Miami",
  }

  // award Content
  const Award = {
    title: "Awards & Recognitions",
    desc: "Our bespoke solutions have earned us global recognition, including prestigious accolades and awards. As an eminent app development company in Dubai, we are committed to delivering scalable solutions that meet our clients’ goals. Here are some of our award-winning achievements, which highlight our dedication to excellence, and we’re proud of them. ",
  }

  // DubaiDevelopers Content
  const subContent = [
    {
      subTitle: "Global Collaboration",
      subDesc: "Our proficient team of top app developers in Dubai seamlessly collaborates with our global partners, ensuring round-the-clock support 24/7 across different time zones. Regardless of your app needs, whether you plan to opt for native iOS or want to invest in Android app development or any other cross-platform technology, we are here to deliver exquisite yet revenue-generating mobile apps. Our apps are equipped with the newest innovations and cutting-edge technologies, thus ensuring maximum return on your investment."
    },
    {
      subTitle: "Exemplary Product Quality",
      subDesc: "We are equipped with a veteran team of mobile app developers in Dubai having 12+ years of experience working in the industry. We pay attention to agile methodology and we utilize growth-driven strategies, which help us deliver exceptional digital products. Each product we craft is based on your target audience's needs and other market insights, ensuring that the app you’ll get in the end an app not only has an award-winning status but also aligns with your business objectives seamlessly."
    }
  ]
  const Development = {
    title: "Toronto App Developers",
    desc: "BitsWits stands out as a top-tier mobile app development company in Dubai, boasting a decade-long legacy of creating impactful, high-quality apps. Our tailored mobile apps help businesses make massive revenue over a short haul, showcasing our commitment to excellence and reflecting our dedication to delivering effective solutions.",
    subContent: subContent,
    image: Building,
    position: false,
  }
  // delivered content
  const DeliveredContent = {
    title: <>We Have Successfully Delivered 100+ Exquisite Mobile Applications Across the Globe</>,
    desc: "Got an App Idea? Let’s Connect to Transform Your App Idea to Life",
    btntext: "Book a Free Consultation Today!"
  }
  // timeline Content
  const timeline = {
    title: "We Follow as a Trustable App Development Company in Toronto ",
    desc: <>
      <span className="d-block">At BitsWits, we're not here just to develop ordinary mobile apps; in fact, our aim is to create captivating yet revenue-generating applications that help you stay ahead in the digital world. We combine the latest technology and artistic creativity to craft apps that engage users and promote business growth.</span>
      <br />
      <span className="d-block">From concept to product launch, we pay attention to every minute detail to make sure that what we develop is not only functional but also aesthetically appealing and income-producing. </span>
      <br />
      <span className="mb-5 mb-sm-0 d-block">Here is the process we follow for developing mobile apps for our clients.</span>
    </>
  }
  // ClientContent
  const ClientContent = {
    title: <>Why Our Clients <span>Choose Us</span> for Mobile App Development in Toronto</>,
    desc: <>At BitsWits, we are dedicated to providing the highest quality mobile app development services and solutions in Toronto. <br /> As we demonstrate, our track record is unmatched, with a 95% success rate of meeting deadlines, staying within budgets, and exceeding<br /> quality expectations.Our clients trust us because of our consistent ability to surpass their expectations and deliver outstanding products every time.<br /> We don’t provide apps. In fact, we deliver products that speak volumes.</>
  }
  // Who We Are Content
  const WhoWeAre = {
    title: "Our Award-Winning Portfolio",
    desc: <>We are one of the fastest-growing app development companies in Toronto, and we can proudly say that we have successfully completed 100+ projects<br /> for various audiences  from different sectors and industries.  Whether you are looking for a mobile e-Commerce platform solution or you need an enterprise mobility <br />application created, we have a history of building high-quality apps that exceed our customer’s expectations. We are making a name for ourselves in the competitive <br /> app development market through our unrivaled quality, commitment to meeting client expectations, and timely delivery. Explore our portfolio<br /> and see why we are a preferred choice by our clients.</>,
    subtitleOne: "Social Media App - Soul Scribe ",
    subDescOne: "Soul Scribe is a groundbreaking social networking app which functions as digital diary, and you can enlist your loved ones to be part of you online journal. The app operates by using the freemium subscription model, providing a complimentary family room option that enables users to welcome someone from their circle of friends to share their memories. Users have the privilege to create and share profound moments with their loved ones. This makes Soul Scribe a social media experience that is different and personal.",
    subtitleTwo: "Transportation App - Ready App ",
    subDescTwo: "The Ready App is a revolutionary platform invented to revolutionize the hiring process for the transportation industry. It fills the communication gap between drivers and recruiters by having an user-friendly interface along with features like secure messaging, personal meetings and real-time updates. Our platform solve issues such as data security, algorithm revisions, and user interface design among others in order to have a scalable and mutually beneficial solution. With Ready App, recruiters can easily link with drivers, consequently resulting to a streamlined hiring process and effective communication channels.",
    subtitleThree: "Automobile App - Greasy Monkey ",
    subDescThree: "Grease Monkey is a comprehensive automotive innovation system which provides everything ranging from car repairs to oil checkup. Serving as an independent app, Grease Monkey presents users with important factors to consider such as prices and locations and also client ratings for your vehicles. The app takes the convenience to a different level altogether. One simply needs to choose the required vehicle, select the required service, choose the date and time and make payment which can all be done within the app. With Grease Monkey, car owners can do regular maintenance for their cars in an easy way by just a few taps on their smartphones."
  }
  // Delivered
  const desc = [
    {
      para: <>Are you planning to invest in mobile app development in Toronto? Depending on the app’s complexity and functionality, the cost typically ranges between <span>$50,000</span> to  <span>$250,000+</span>.</>
    },
    {
      para: <>At BitsWits, a simple app development project starts with just <span>$50,000</span>, and it varies depending on your specific app needs. However, if your app involves complex features and intricate functionalities, it means more time and cost will be involved.</>
    },
    {
      para: "However, we ensure that the product you acquire in the end from us is of the highest quality and revenue-producing. "
    },
    {
      para: "If you want to get an estimated cost for your app development project in Toronto, you can make use of our app development cost calculator. "
    },
  ]
  const delivered = {
    title: "How Much Does it Cost to Make an App in Toronto ",
    desc: desc,
  }
  // Delivered
  const descBlack = [
    {
      para: <>In today's digital age, mobile apps have become a lucrative avenue for businesses to generate substantial revenue. </>
    },
    {
      para: <>According to recent statistics, global mobile app revenue is projected to reach <span>$935 </span>, billion by 2024, showcasing the immense potential of the app market. </>
    },
    {
      para: <>Currently, there are more than <span>5.1</span> million apps on the Apple App Store and Google Play combined. This growth is driven by the increasing adoption of smartphones and the growing demand for mobile services across various industries. </>
    },
    {
      para: <>Moreover, another research found which indicates that the top 200 apps on the app stores earn approximately <span>$82,500</span> per day and the lowest 800 apps on Play stores make an average of <span>$3,500</span>. Hence, as a business owner you should invest in this lucrative market if you haven’t already yet and earn considerable revenue over time.</>
    },
  ]
  const deliveredBlack = {
    title: "How Much Money Can an App Make?",
    desc: descBlack,
  }
  // Technologies Content
  const technologies = {
    title: "Cutting-Edge Mobile App Development Services in Toronto ",
    desc: <>
      <span>At BitsWits, we offer a wide range of mobile app development services for businesses located in Toronto and other UAE cities. Our team of highly skilled Toronto app developers and designers is dedicated to producing technologically innovative yet interactive mobile applications that deliver engagement and drive growth.</span>
      <span>Currently, we have a large client base who is satisfied with the services we are offering because we are helping businesses and entrepreneurs from different backgrounds to design and develop world-class mobile based applications. Speaking of empowerment, here are some additional services our app developers in Toronto are offering;</span>
    </>
  }

  // Bussiness Content
  const subBussContent = [
    {
      subTitle: "Enhanced Customer Engagement",
      subdesc: "Establishing an efficient mobile app enables two-way communications between you and your customers on a one-on-one basis, resulting in increased customer loyalty."
    },
    {
      subTitle: "Increased Brand Visibility",
      subdesc: "Mobile apps serve as a communication gateway of your brand making customers access to your products really swift, as well as give a chance to communicate with them."
    },
    {
      subTitle: "Improved Customer Loyalty",
      subdesc: "By providing users with a remarkable mobile experience that is easy and comfortable to use, you can build consumer trust and ultimately, you can expect increased sales and revenue. "
    }
  ]
  const BussinessContent = {
    title: <>Revolutionize Your Business with Mobile App Design in <span>UAE</span></>,
    desc: <>
      <span className="d-block">In UAE mobile app design can be your company’s game changer, enabling you to create a dynamic environment where you are able to build a loyal customer base, a relationship that is crucial for long-term growth. Through a well-made mobile application, you can reinforce your brand image, broaden the consumer base, and build customer loyalty. </span>
      <span className="d-block">Our professional team specializes in creating appealing and easy-to-use apps that carry the essence of your brand identity and brand values. Besides grasping the special features and regulations in the UAE market, we spend time developing an individualized strategy, which is the foundation of your app marketing that makes it shine among others.</span>
    </>,
    subContent: subBussContent
  }
  // compareDesc content
  const compareDesc = [
    {
      desc: <>
        Undeniably, both iOS and Android Platforms have large user bases and dedicated target audiences. When we talk about the popularity of the following platforms, more than <span>2.87</span> million apps are available on the Play Store, and <span>1.96</span> million apps are accessible on the App Store. </>
    },
    {
      desc: <>
        In total, there are approximately <span>5.1</span> million apps are available in app stores. Quite astonishing, right? Hence, you should invest in any one of the remarkable technologies depending on your app needs and requirements.  </>
    },
    {
      desc: <>
        Also, you can partner with our reputable mobile app development company in Toronto and get your app developed now for any technology (Native, Hybrid, and Cross-Platform).   </>
    },
  ]
  const compareContent = {
    title: "iOS App Development Vs Android App Development ",
    desc: compareDesc
  }
  // Development UAE
  const developmentUAE = {
    title: <>BitsWits - Your Trusted App Development Partner in the <span>UAE</span></>,
    desc: <>
      As a top app development company in the UAE, BitsWits is distinguished by its dedication to creating outstanding digital products that are customized to the distinct requirements of every client. What makes us unique is our concentration on creativity, products’ excellence, and clients’ fulfillment. Our team of experienced developers and designers carefully examine the objectives of clients and develop personalized app solutions with impressive results. <br /> <br />

      In part of the quality of our services, we at BitsWits offer more than application development services; we provide strategic alliances that lead to business growth. Regardless of whether you’re looking to create a stunning website, develop a powerful mobile application, or aim to improve your online presence, our experts are there to help. Our track record of success and happy clients proves that we are true professionals. Opt for Us to be your app development partner and stay ahead in the competitive mobile industry.
    </>
  }

  // IOS content
  const iosdesc = [
    {
      desc: "BitsWits is all about reinventing the app development experience with iOS and all other technologies to outperform the competitive digital market. When it comes to iOS app development in Toronto, what makes us distinctive is our in-depth knowledge of the iOS platform and our ability to create custom digital apps that perfectly align with your company's goals. Our team of highly skilled iOS developers in Toronto promises that the products we provide are top-quality and sure to exceed your expectations."
    },
    {
      desc: "We are cognizant of the peculiar challenges inherent in the online world of business and we leverage this awareness in providing you with bespoke iOS app development services that are tailor-made to meet your particular needs. From pre-development to launch, we are 100% involved with you in the app development journey, ensuring your app has the best capabilities that help it stand out in the competitive app market. Get in touch with any professional iOS app developer in Toronto from BitsWits today and experience the change right away."
    }
  ]
  const IOSContent = {
    title: "Ascend to Greatness with iOS App Development in Toronto ",
    desc: iosdesc
  }
  // IOS content
  const andrioddesc = [
    {
      desc: "Speaking of Android app development in Toronto, there is no better app development business to refer to as Bitwsits here. Our top team of certified Android app developers in Toronto uses tech proficiency and creative thinking to produce superior mobile applications that are noticeable in the very competitive app market. What makes us unique is our dedication to creativity, user experience, and client convenience."
    },
    {
      desc: "Having taken the position of a top Android app development company in Toronto, we have acquired an understanding of the specific difficulties and benefits of the Android platform. Whether you are developing a new Android application or looking to make your existing Android application better, we are here to help. Our strive for perfection, dedication to our clients, and prioritization of customer satisfaction are the cornerstones of our business."
    },
    {
      desc: "Let's choose BitsWits as your ideal iOS app development partner, and let us turn your app's ideas into reality!"
    },
  ]
  const andriodContent = {
    title: "Take Your Business to Higher Levels by Android App Development in Toronto ",
    desc: andrioddesc
  }
  // mobile Application content
  const MobileApplicationContent = [
    {
      desc: "At BitsWits, we not only deal with mobile app development but we also offer services beyond that. We're your strategic partner and we are deeply committed to making your vision a reality. Our expertise lies in ingenuity by combining it with perseverance and precision. We don't just create apps; we develop digital experiences that endures. "
    },
    {
      desc: "We precisely design our approach to guarantee that your app runs without any serious glitches and is well-matched with your organization's goals. Considering that each project is unique, we take into account your particular goals and challenges to understand them closely. "
    },
    {
      desc: "From ideation to implementation, we ensure that your app is designed intricately and every aspect is executed perfectly. Through our expertise and dedication, we are able to not only meet the idea goals but exceed the expectations with our exceptional digital experiences that take your business to the top.  "
    },
  ]
  const MobileApplication = {
    title: "BitsWits is More Than an Ordinary Mobile App Development Company Toronto ",
    desc: MobileApplicationContent
  }

  // conqured content
  const Conquered = {
    title: "Industries We’ve Conquered as an Eminent App Development Company Toronto ",
    desc: <><span className="d-block">With a strong emphasis on innovation and excellence, BitsWits caters to a diverse range of sectors and industries. Our mobile app development company in Toronto is committed to transforming your raw ideas into incredible realities. Our app development methodology is combined with innovation and creativity. Plus, we use the latest technologies and tools to deliver exceptional results. </span>
      <br />
      <span className="d-block">
        Explore how our expertise in mobile app development can revolutionize your industry and take your business forward in the competitive digital world.
      </span>
    </>
  }
  // Houston Toronto
  const menus = [
    "App Development Costs According to Business Size In Toronto",
    "Cost of App Development in Toronto for a Startup",
    "Cost of App Development in Toronto for Mid-Sized Businesses",
    "Cost of App Development in Toronto for Enterprises",
  ];

  const sections = [
    {
      title: "App Development Costs According to Business Size In Toronto ",
      content: `<p class='fontsfregular'>At BitsWits, we know that the price of making an app depends on your business size and its required features. Our services are tailor made for startups to large enterprises in Toronto and will fit their budget and needs.</p> `
    },
    {
      title: "Cost of App Development in Toronto for a Startup",
      content: `<p class='fontsfregular'>Often, start-ups in Toronto find the cost of app development to be one of the very main components that determines the success or failure of their products. We, at BitsWits, are aware of the exigence which a start-up has to face; which is why we provide competitively priced solutions which will fit in with your budget. We will work together with you to ensure we put together a quality app that satisfies your needs and at the same time fits within your budget. Through the transparent pricing and flexible payment structures we offered, small to medium-size startups have the chance to afford a quality app development. Typically, the cost of building a simple app for a startup from scratch in Toronto will take between $10,000 and $30,000. This cost includes planning, design, development, testing, and implementation.</p>`
    },
    {
      title: "Cost of App Development in Toronto for Mid-Sized Businesses",
      content: `<p class='fontsfregular'>Developing apps for small and medium-sized businesses in Toronto means to have applications that will be able to keep up with the giant competitors without exceeding the set budget. Our cost-effective and time-efficient mid-sized business app development services in Toronto are purposefully created to help growing start-ups to succeed in business. Along with that, we eliminate the obstacles standing in their way to success. We work in close alignment with you to understand your business needs and tailor-make an app that fits right on budget and gives the perfect solution to your requirements. Through our professional staff and quick development process we can provide enterprise apps to local mid-sized companies in Toronto at a competitive cost. Mid-sized businesses inToronto planning to develop an app can envisage budgets ranging from$30,000 to $100,000.</p>`
    },
    {
      title: "Cost of App Development in Toronto for Enterprises",
      content: `<p class='fontsfregular'>In Toronto, the enterprises require applications of the topnotch characteristics and layouts with the advanced functionalities and features. Over at BitsWits, we focus on the creation of enterprise apps that are features-rich and cost friendly for businesses located in the city of Toronto. Our team of developers will work in close alliance with you to facilitate the process of development of the app that your business is in need of. Our efficient development process back up with transparent pricing feature, allow us to deliver professional-grade apps at reasonable price in Toronto. And for the larger enterprises in Toronto, app development might cost somewhere from $100,000 to $500,000.</p>`
    }
  ];

  const HoustonContent = {
    menus: menus,
    sections: sections,
  }
  return (
    <>
      <Bannerdubai content={Banner} />
      {showFolds &&
        <>
          <NewDubaiAwards content={Award} />
          <DubiaDevelopers content={Development} />
          <DubaiDelivered content={DeliveredContent} />
          <DubaiTimeline content={timeline} />
          <DubaiClients content={ClientContent} />
          <StoryLine content={storyLine} />
          <Whowearenew content={WhoWeAre} />
          <Delivered content={delivered} />
          <DeliveredBlack content={deliveredBlack} />
          <Technologieslpdubainew content={technologies} />
          <NewDubaiBussiness content={BussinessContent} />
          <DubaiDevelopment content={compareContent} />
          <DubaiDevelopmentUAE content={developmentUAE} />
          <DubaiIOS content={IOSContent} />
          <DubaiAndriod content={andriodContent} />
          <DubaiMobileApplication content={MobileApplication} />
          <DubaiConquered content={Conquered} />
          <LpChoosedubaishipnewdubai
            transform="transformlp"
          />
          <Expertappdubaiadvanced expertapp="expertapp" />
          <Justbuilditlpdubai
            title1="Just"
            title="Build It."
            para="Design, Develop, and Grow with BitsWits."
            slide="slide1lp"
          />
          <Globallplp6dubai />
          <Globalmap />
          <Brand />
          <Houtondubai content={HoustonContent} />
          <Faqdubai
            faqsData={[
              {
                question:
                  "How can I launch an app in the UAE?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
              {
                question: "How much time is required to build a mobile application?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
              {
                question:
                  "How much does it cost to create an app in Toronto?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
              {
                question:
                  "What is a mobile app support service, and does Bitswits offer it?",
                answer: (
                  <>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </>
                ),
              },
            ]}
          />
          <Latestblog blogBox={blogBox} />
        </>
      }
    </>
  );
}
