"use client"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic'
//
const Header = dynamic(() => import("../components/NewHeader"));
const HeaderMbl = dynamic(() => import("../components/HeaderMbl"));
const Headerlp = dynamic(() => import("../components/Headerlp"));
const Headerlphome = dynamic(() => import("../components/Headerlphome"));
const NewMobileHeader = dynamic(() => import("../components/NewMobileApp/Header/NewMobileHeader"));
const NewHeaderMbl = dynamic(() => import("../components/NewMobileApp/NewHeaderMbl/NewHeaderMbl"));
const VideoHeader = dynamic(() => import("../components/video-explainer/Header/Header"));
const EcommerceBanner = dynamic(() => import("../components/EcommerceBanner"));
const Footer = dynamic(() => import("../components/Footer"));
const Footernewlp = dynamic(() => import("../components/Footernewlp"));
const Footernewdesign = dynamic(() => import("../components/Footernewdesign"));
const VideoFooter = dynamic(() => import("../components/video-explainer/Footer/Footer"));
const EcommerceFooter = dynamic(() => import("../components/EcommerceFooter"));
//
const Cursor = dynamic(() => import("../components/Cursor"));
const Skicky = dynamic(() => import("../components/Skicky"));
const Pixel = dynamic(() => import("../components/Pixel"));
const Pixel2 = dynamic(() => import("../components/Pixel2"));
const MetaData = dynamic(() => import("../components/MetaData"));
const FooterNewLps = dynamic(() => import("../components/FooterNewLps"));

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    // =============== Mouse ===============
    const mouse =
        pathname == "/" ||
        pathname == "/about-us" ||
        pathname == "/our-work" ||
        pathname == "/privacy-policy" ||
        pathname == "/term-and-condition" ||
        pathname == "/ios-app-development" ||
        pathname == "/android-application-development" ||
        pathname == "/augmented-reality-apps-development-company" ||
        pathname == "/artificial-intelligence-development-company" ||
        pathname == "/cross-platform-app-development" ||
        pathname == "/web-app-development" ||
        pathname == "/react-native-mobile-development" ||
        pathname == "/hybrid-mobile-apps-development" ||
        pathname == "/custom-mobile-development" ||
        pathname == "/native-mobile-development" ||
        pathname == "/flutter-mobile-development" ||
        pathname == "/mobile-application" ||
        pathname == "/mobile-application-usa" ||
        pathname == "/mobile-application-huston" ||
        pathname == "/mobile-application-newyork" ||
        pathname == "/mobile-application-los-angeles" ||
        pathname == "/mobile-application-duplicate" ||
        pathname == "/mobile-application-duplicate2" ||
        pathname == "/top-mobile-app-development-company" ||
        pathname == "/mobile-app-development-company-lp2" ||
        pathname == "/game-application-development" ||
        pathname == "/nft-game-development" ||
        pathname == "/2d-game-development-company" ||
        pathname == "/3d-game-development-company" ||
        pathname == "/blockchain-game-development" ||
        pathname == "/travel-app-development-case-study" ||
        pathname == "/real-estate-app-development-case-study" ||
        pathname == "/clothing-marketplace-app-development-case-study" ||
        pathname == "/social-app-development-case-study" ||
        pathname == "/automobile-repair-app-development-case-study" ||
        pathname == "/marketing-partnership-app-development-case-study" ||
        pathname == "/healthcare-app-development-case-study" ||
        pathname == "/ride-app-development-case-study" ||
        pathname == "/fitness-app-development-case-study" ||
        pathname == "/hiring-app-development-case-study" ||
        pathname == "/music-app-development-case-study" ||
        pathname == "/handyman-on-demand-app-development-case-study" ||
        pathname == "/food-delivery-app-development-case-study" ||
        pathname == "/ios-developer" ||
        pathname == "/android-developer" ||
        pathname == "/hybrid-developer" ||
        pathname == "/native-developer" ||
        pathname == "/mobile-developer" ||
        pathname == "/top-ecommerce-app-development-company" ||
        pathname == "/top-mobile-app-development-company" ||
        pathname == "/mobile-app-development-services" ||
        pathname == "/create-a-mobile-app" ||
        pathname == "/top-mobile-app-developers";
    // =======================================
    const [showPixels, setShowPixels] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowPixels(true);
        }, 10000);
        return () => clearTimeout(timeout);
    }, []);
    // =======================================
    return (
        <>
            {showPixels && (
                <>
                    <MetaData />
                    <Pixel />
                    <Pixel2 />
                    <Analytics />
                </>
            )}
            {
                pathname == "/mobile-app-development-company-lp2" ? <Headerlp /> :
                    pathname == "/top-mobile-app-developers" ? <Headerlphome /> :
                        pathname == "/top-ecommerce-app-development-company" ? <EcommerceBanner /> :
                            pathname == "/video-explainer-lp" ? <VideoHeader /> :
                                pathname == "/lp/mobile-app-development-services" ? <>
                                    <NewMobileHeader />
                                    <NewHeaderMbl />
                                </> :
                                    pathname == "/meet-our-team" ? null :
                                        <>
                                            <Header />
                                            <HeaderMbl />
                                        </>
            }
            {mouse && <Cursor />}
            {
                pathname == "/top-mobile-app-developers" ? '' :
                    pathname == "/top-ecommerce-app-development-company" ? '' :
                        pathname == "/lp/mobile-app-development-services" ? '' :
                            <Skicky />
            }
            {children}
            {
                pathname == "/mobile-app-development-company-lp2" ? <Footernewlp /> :
                    pathname == "/top-mobile-app-developers" ? <Footernewdesign /> :
                        pathname == "/top-ecommerce-app-development-company" ? <EcommerceFooter /> :
                            pathname == "/video-explainer-lp" ? <VideoFooter /> :
                                pathname == "/lp/mobile-app-development-services" ? <FooterNewLps /> :
                                    pathname == "/meet-our-team" ? null :
                                        pathname == "/calculator" ? null :
                                            <Footer />
            }
        </>
    )
}

export default ConditionalLayout