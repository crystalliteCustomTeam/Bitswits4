"use client"
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Row, Col } from 'react-bootstrap'
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
// ===== CSS
import styles from "@/styles/blogNew/InnerBanner.module.css"
import style from "@/styles/blogNew/Blognavigations.module.css"
// ===== Components
import { getSinglePost } from "@/lib/posts";
import BlogArticle from '@/src/components/BlogArticle'
// ===== Images
import { FaAngleDown } from 'react-icons/fa';
import Client from "media/newblogs/innerclient.png"
import verified from "media/newblogs/blog-verify.png"
import experience from "media/newblogs/experience.png"
// =====
import Share from "media/newblogs/shareIcon.png"
import social1 from "media/newblogs/linkedin.png"
import social2 from "media/newblogs/twitter.png"
import social3 from "media/newblogs/facebook.png"
//
import close from '/public/newHomePageImages/close.png'
import open from '/public/newHomePageImages/open.png'


export default function Post({ params }) {
    // =============== Post Data ===============
    let featuredImageUrl = "https://inhouse.cryscampus.com/wordpress/bitswits/wp-admin/uploads/2023/08/moz-brand-authority-768x439-1.png";

    const [postData, setPostData] = useState(null);
    const handlePost = async () => {
        try {
            const allPosts = await getSinglePost(params.postslug);
            setPostData(allPosts);
        } catch (error) {
            console.error('Error fetching post data:', error);
        }
    }

    useEffect(() => {
        handlePost();
    }, []);

    // =============== SideBar ===============
    const [isNavVisible, setIsNavVisible] = useState(true); // Initially visible
    const [activeHeading, setActiveHeading] = useState('#heading1');

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    const handleHeadingClick = (heading) => {
        setActiveHeading(heading);
    };

    // =============== Share Article ===============
    const shareArticle = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: (window.location.href)
            }).then(() => {
                console.log('Shared successfully');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            console.log('Web Share API not supported');
        }
    };

    // =============== Faqs ===============
    const initialFaqState = postData && postData.blogDescription && postData.blogDescription.faq ?
        Array(postData.blogDescription.faq.length).fill(false) : [];

    const [faqshow, setFaqShow] = useState(initialFaqState);

    const toggleFaq = (index) => {
        const newFaqShow = [...faqshow];
        newFaqShow[index] = !newFaqShow[index];
        setFaqShow(newFaqShow);
    };


    // // Handle case where postData is null or undefined
    // if (!postData || !postData.blogDescription || !postData.blogDescription.faq) {
    //     return <div>Loading...</div>; // Or handle this case according to your UI requirements
    // }

    // ==============================
    if (!postData) {
        return null;
    }


    return (
        <>
            {postData && (
                <>
                    <Head>
                        <title key="title">{postData.title}</title>
                        <meta name="description" content={postData.metaDesc} key="metadesc" />
                        <meta property="og:title" content={postData.opengraphTitle} />
                        <meta key="og-description" property="og:description" content={postData.metaDesc} />
                        <meta property="og:url" content={postData.opengraphUrl} />
                        <meta property="og:type" content={postData.opengraphType} />
                        <meta property="og:locale" content="en_IN" />
                        <meta property="og:site_name" content={postData.opengraphSiteName} />
                    </Head>
                    <section className={styles.innerBannerSec}>
                        <Container>
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <div className={styles.blogTopDes}>
                                        <h4>{postData.categories.nodes[0].name}</h4>
                                        <h1 className='fontsfregular'>{postData.title}</h1>
                                        {postData.blogDescription.topDescription && (
                                            <>
                                                <div dangerouslySetInnerHTML={{ __html: postData.blogDescription.topDescription }}></div>
                                            </>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    {postData.featuredImage ?
                                        (
                                            <Image quality={75} src={`https://inhouse.cryscampus.com/wordpress/bitswits/wp-content/uploads/${postData.featuredImage.node.mediaDetails.file}`} alt="BitsWits" width={736} height={450} className="img-fluid" />
                                        )
                                        :
                                        (
                                            <Image quality={75} src={featuredImageUrl} alt="BitsWits" width={736} height={450} className="img-fluid" />
                                        )
                                    }
                                </Col>
                                <Col lg={12}>
                                    <Row className={styles.blogdesc}>
                                        <Col lg={2} className={styles.clientImage}>
                                            <Image src={Client} alt='Bitswits' className='img-fluid' />
                                        </Col>
                                        <Col lg={10} className={styles.content}>
                                            <ul className='p-0'>
                                                <li className={styles.name}>
                                                    <p className='fontsfregular mb-0'>By <span>{postData.author.node.name}</span></p>
                                                </li>
                                                <li className={`${styles.verified} d-flex align-items-center`}>
                                                    <p className='fontsfregular mb-0'> Verified Expert In Development
                                                        <Image src={verified} alt='Bitswits' width={16} height={16} className='ms-3' />
                                                    </p>
                                                </li>
                                                <li className={`${styles.experience} d-flex align-items-center`}>
                                                    <Image src={experience} alt='Bitswits' width={16} height={16} className='me-3' />
                                                    <p className='fontsfregular mb-0'> 3 Years Of Experience</p>
                                                </li>
                                            </ul>

                                            <div className={styles.desc}>
                                                <p className='fontsfregular'>{postData.author.node.description}</p>
                                            </div>

                                            <div className={styles.expertise}>
                                                <span className={`${styles.expertisePara} fontsfregular`}>EXPERTISE</span>
                                                {postData.author.node.userexperties.experties.map((experties, index) => (
                                                    <span key={index} className={`fontsfregular text-black ${styles.btn}`}>
                                                        {experties}
                                                    </span>
                                                ))}
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className={styles.articleSec}>
                        <Container>
                            <Row>
                                <Col lg={8}>
                                    <ul className={`p-0 mb-4 ${styles.share}`}>
                                        <li className={`d-flex align-items-center justify-content-center gap-3 ${styles.shareIcon}`} onClick={shareArticle}>
                                            <Image src={Share} alt='Bitswits' width={20} height={20} />
                                            <p className='mb-0'>Share This Article</p>
                                        </li>
                                        <li className={`${styles.icons}`}>
                                            <LinkedinShareButton className="w-100 h-100" url="https://www.linkedin.com/">
                                                <Image src={social1} alt='Bitswits' width={20} height={20} />
                                            </LinkedinShareButton>
                                        </li>
                                        <li className={`${styles.icons}`}>
                                            <TwitterShareButton className="w-100 h-100" url="https://twitter.com/">
                                                <Image src={social2} alt='Bitswits' width={25} height={20} />
                                            </TwitterShareButton>
                                        </li>
                                        <li className={`${styles.icons}`}>
                                            <FacebookShareButton className="w-100 h-100" url="https://www.facebook.com/">
                                                <Image src={social3} alt='Bitswits' width={10} height={20} />
                                            </FacebookShareButton>
                                        </li>
                                    </ul>
                                    <div dangerouslySetInnerHTML={{ __html: postData.content }}></div>

                                    {postData.blogDescription.faq.map(({ questions, answers }, index) => (
                                        <div key={index} className={styles.faqs}>
                                            <div className={`${faqshow[index] ? 'touchFaq' : ''}`}>
                                                <div onClick={() => toggleFaq(index)} className={styles.heading}>
                                                    <h3>
                                                        {questions}
                                                        <span className={styles.plus}>
                                                            <Image quality={75} alt='BitsWits' src={faqshow[index] ? open : close} className='img-fluid' />
                                                        </span>
                                                    </h3>
                                                </div>
                                                <div className={faqshow[index] ? 'd-block' : 'd-none'}>
                                                    <p dangerouslySetInnerHTML={{ __html: answers }}></p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={4}>
                                    <div className={style.sidebar}>
                                        <Row>
                                            <Col lg={12}>
                                                <div className={style.navigations}>
                                                    <div className={style.mainHeading} onClick={toggleNavVisibility}>
                                                        <h3 className='fontsfregular'>
                                                            Navigation
                                                            <FaAngleDown className='ms-3' />
                                                        </h3>
                                                    </div>
                                                    {isNavVisible && (
                                                        <ul className={style.navHeadings}>
                                                            <li>
                                                                <a
                                                                    href='#heading1'
                                                                    className={`fontsfregular ${activeHeading === '#heading1' ? style.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading1')} >
                                                                    Conquer Tech With Bitswits: <br />
                                                                    Your Path To Unstoppable Progress!
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href='#heading2'
                                                                    className={`fontsfregular ${activeHeading === '#heading2' ? style.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading2')} >
                                                                    Development Of A Crypto Exchange  <br />Platform App
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href='#heading3'
                                                                    className={`fontsfregular ${activeHeading === '#heading3' ? style.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading3')} >
                                                                    Tech Stack For Development
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href='#heading4'
                                                                    className={`fontsfregular ${activeHeading === '#heading4' ? style.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading4')} >
                                                                    Security Measurements
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href='#heading5'
                                                                    className={`fontsfregular ${activeHeading === '#heading5' ? style.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading5')} >
                                                                    Frequently Asked Questions <br />Regarding The Development Of <br />Cryptocurrency Exchange Software
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href='#heading6'
                                                                    className={`fontsfregular ${activeHeading === '#heading6' ? style.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading6')} >
                                                                    Development Of A Crypto Exchange <br /> Platform App
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href='#heading7'
                                                                    className={`fontsfregular ${activeHeading === '#heading7' ? style.active : 'text-black'}`} onClick={() => handleHeadingClick('#heading7')} >
                                                                    Tech Stack For Development
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    )}
                                                </div>
                                                <div className={style.articles}>
                                                    <h3 className='fontsfregular'>Relevant Articles</h3>
                                                    <ul className={`${style.noList} mt-4`}>
                                                        <li>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h6 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h6>
                                                        </li>
                                                        <li>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h6 className='fontsfregular'>Frequently Asked Questions <br />Regarding The Development Of <br />Cryptocurrency Exchange Software</h6>
                                                        </li>
                                                        <li>
                                                            <p className='fontsfregular'>General</p>
                                                            <h6 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h6>
                                                        </li>
                                                        <li>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h6 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h6>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <BlogArticle />
                </>
            )}
        </>
    );
}