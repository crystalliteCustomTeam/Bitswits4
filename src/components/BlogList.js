import Link from 'next/link';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/BlogContent.module.css"
//
import { getPostList } from "@/lib/posts";
import LoadMore from "@/src/components/LoadMore";
import FeaturedImage from "@/src/components/FeaturedImage";
// Images
import Arrow from "media/newblogs/blogArrow.png"
import verifies from "media/newblogs/blog-verify.png"
import profile from "media/newblogs/blog-client.png"


const BlogList = async () => {

    // =============== Post Data ===============
    const posts = await getPostList();

    // =============== Rander ===============
    return (
        <>
            <section className={styles.blogcontent}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.form}>
                                <form>
                                    <select className={styles.search}>
                                        <option defaultValue="All">All</option>
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
                                    <li className={`${styles.active} fontsfregular`}>
                                        All
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        Blockchain
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        eCommerce
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        General
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        Mobile Application
                                    </li>
                                    <li className={`${styles.nonActive} fontsfregular`}>
                                        News
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className='mt-md-4'>
                                <Row className='gy-3'>
                                    {
                                        posts.nodes.map((post) => (
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
                                        <LoadMore posts={posts} setPosts={posts} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BlogList
