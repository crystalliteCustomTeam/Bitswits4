import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/BlogContent.module.css"
import { getPostList } from "@/lib/posts";
import LoadMore from "@/src/components/LoadMore";
import FeaturedImage from "@/src/components/FeaturedImage";
// Images
import Arrow from "media/newblogs/blogArrow.png"
import verifies from "media/newblogs/blog-verify.png"
import BlogImage1 from "media/newblogs/blog-1.png"
import BlogImage2 from "media/newblogs/blog-2.png"
import BlogImage3 from "media/newblogs/blog-3.png"
import profile from "media/newblogs/blog-client.png"

const BlogList = () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }
    const [posts, setPosts] = useState(false);
    const handlePost = async () => {
        const allPosts = await getPostList();
        setPosts(allPosts);
    }
    useEffect(() => {
        handlePost();
    }, [])
    return (
        <>
            <section className={styles.blogcontent}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.form}>
                                <form action="javascript:;">
                                    <select className={styles.search}>
                                        <option selected>All</option>
                                        <option value="Blockchain" className='fontsfregular'>Blockchain</option>
                                        <option value="eCommerce" className='fontsfregular'>eCommerce</option>
                                        <option value="General" className='fontsfregular'>General</option>
                                        <option value="Mobile Application" className='fontsfregular'>Mobile Application</option>
                                        <option value="News" className='fontsfregular'>News</option>
                                    </select>
                                    <input type="text" />
                                    <button type='submit' className='fontsfregular'>Search</button>
                                </form>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className={styles.tabs}>
                                <ul className='pt-5'>
                                    <li className={`${activeTab1 === 'tab1' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab1')}>
                                        All
                                    </li>
                                    <li className={`${activeTab1 === 'tab2' ? styles.active : styles.nonActive} fontsfregular`}>
                                        Blockchain
                                    </li>
                                    <li className={`${activeTab1 === 'tab3' ? styles.active : styles.nonActive} fontsfregular`}>
                                        eCommerce
                                    </li>
                                    <li className={`${activeTab1 === 'tab4' ? styles.active : styles.nonActive} fontsfregular`}>
                                        General
                                    </li>
                                    <li className={`${activeTab1 === 'tab5' ? styles.active : styles.nonActive} fontsfregular`}>
                                        Mobile Application
                                    </li>
                                    <li className={`${activeTab1 === 'tab6' ? styles.active : styles.nonActive} fontsfregular`}>
                                        News
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="tabs-body">
                                {activeTab1 == 'tab1' &&
                                    <div className='mt-md-4'>
                                        <Row className='gy-3'>
                                            {
                                                posts && posts.nodes.map((post) => (
                                                    <Col md={6} lg={4} className='p-2 order-3 order-lg-1'>
                                                        <div className={styles.card}>
                                                            <FeaturedImage post={post} className="w-100" />
                                                            <div className={styles.cardContent}>
                                                                {
                                                                    post.categories.nodes.map((category) => (
                                                                        <p className={`fontsfregular ${styles.categoriesPara}`} key={category.slug}>
                                                                            {category.name}
                                                                        </p>
                                                                    ))
                                                                }
                                                                <Link href={`/blog/${post.slug}`}>
                                                                    <h5 className='fontsfregular text-black'>{post.title}</h5>
                                                                </Link>
                                                                <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                                </div>
                                                                <div className={styles.btn}>
                                                                    <Link href={`/blog/${post.slug}`} className='text-black'>
                                                                        Read More
                                                                        <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className={styles.cardBottom}>
                                                                <div className={styles.cardBottomImg}>
                                                                    <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                                </div>
                                                                <div className={styles.cardbottomContent}>
                                                                    <div className='d-flex align-items-center gap-2 pb-1'>
                                                                        <h3 className='fontsfregular text-black'> {post.author.node.name}
                                                                        </h3>
                                                                        <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                    </div>
                                                                    <p className='fontsfregular text-black'>{post.author.node.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                ))
                                            }
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                {posts && <LoadMore posts={posts} setPosts={setPosts} />}
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab2' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab3' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab4' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab5' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab6' &&
                                    <div className='mt-md-4'>
                                        <Row>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Bitswits</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage2} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Blockchain</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>Mobile Application</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col md={6} lg={4} className='p-2'>
                                                <Link href="/blog-inner">
                                                    <div className={styles.card}>
                                                        <div className={styles.cardImg}>
                                                            <Image src={BlogImage3} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardContent}>
                                                            <p className='fontsfregular'>General</p>
                                                            <h5 className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                                                Your Path To Unstoppable Progress!</h5>
                                                            <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                            <div className={styles.btn}>
                                                                <a href="javascript:;" className='text-black'>
                                                                    Read More
                                                                    <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className={styles.cardBottom}>
                                                            <div className={styles.cardBottomImg}>
                                                                <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                            </div>
                                                            <div className={styles.cardbottomContent}>
                                                                <div className='d-flex align-items-center gap-2 pb-1'>
                                                                    <h3 className='fontsfregular text-black'>Nick Willford</h3>
                                                                    <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                                </div>
                                                                <p className='fontsfregular text-black'>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Col>
                                            <Col lg={12}>
                                                <div className={styles.loadMoreBtn}>
                                                    <a href="javascript:;" className='fontsfregular'>
                                                        Load More
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlogList
