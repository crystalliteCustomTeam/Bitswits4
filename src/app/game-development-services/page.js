//====== Components
import Banner from "@/src/components/gameDevServices/Banner";
import Counter from "@/src/components/gameDevServices/Counter";
import Discuss from "@/src/components/gameDevServices/Discuss";
import Services from "@/src/components/gameDevServices/Services";
import Testimonials from "@/src/components/gameDevServices/Testimonials";
import Platforms from "@/src/components/gameDevServices/Platforms";
import BasedCta from "@/src/components/gameDevServices/BasedCta";
import Process from "@/src/components/gameDevServices/Process";
import Choose from "@/src/components/gameDevServices/Choose";
import Offer from "@/src/components/gameDevServices/Offer";
import BasedCta2 from "@/src/components/gameDevServices/BasedCta2";
import AppIdea from "@/src/components/gameDevServices/AppIdea";
import TechStack from "@/src/components/gameDevServices/TechStack";
import Fueling from "@/src/components/gameDevServices/Fueling";
import Faqs from "@/src/components/gameDevServices/Faqs";
import BlogPosts from '@/src/components/servicePage/BlogPosts/BlogPosts'
import GlobalPresence from '@/src/components/servicePage/GlobalPresence/GlobalPresence'

const page = () => {
    return (
        <>
            <Banner />
            <Counter />
            <Discuss />
            <Services />
            <Testimonials />
            <Platforms />
            <BasedCta />
            <Process />
            <Choose />
            <Offer />
            <BasedCta2 />
            <AppIdea />
            <TechStack />
            <Fueling />
            <Faqs
                faqsData={[
                    {
                        question: "01.   What services do you provide?",
                        answer: "Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application."
                    },
                    {
                        question: "02.   How much time is required to build a mobile application?",
                        answer: "The cost varies widely depending on the complexity and features of the app. Best app making services charge more due to their reputation and quality of work. Prices generally range from a few thousand dollars to hundreds of thousands depending on the time and effort."
                    },
                    {
                        question: "03.   How much does it cost to create an app in Dubai?",
                        answer: "Development time varies by app intricacy and features. A simple application can take around 6 months to launch while a complex app with two or multiple interfaces can take 9-12 months."
                    },
                    {
                        question: "04.   What is a mobile app support service, and does BitsWits offer it?",
                        answer: "Yes, our hybrid app development services have excelled in creating apps that function on iOS and Android platforms. They often employ frameworks like Flutter and React Native to ensure optimum functionality and visual appeal."
                    }
                ]}
            />
            <BlogPosts />
            <GlobalPresence />
        </>
    )
}

export default page
