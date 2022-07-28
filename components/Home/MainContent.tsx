import React, { useState } from 'react';
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { Form } from "react-bootstrap";

const MainContent = () => {
    const [readMore, setReadMore]       =   useState<boolean>(false);
    const [showComment, setShowComment] =   useState<boolean>(false);

    return (
        <div className="middle__section">
            <div className="each__post--content">
                <div className="header d-flex justify-content-between">
                    <div className="d-flex">
                        <p>
                            <Image 
                                src="/assets/images/user.jpg"
                                alt="image"
                                width={40}
                                height={40}
                                style={{ borderRadius: "50%"}}
                            />
                        </p>
                        <div className="ps-3">
                            <div>
                                <p className="name">Maruf Ahmed</p>
                                <p className="small">5h</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <button type="button"><BsThreeDots /></button>
                    </div>
                </div>
                {
                    readMore ? (
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, in exercitationem ipsa ratione consectetur ad tempore accusamus praesentium commodi ipsum culpa expedita quae? Iste voluptas assumenda ex ipsa illum explicabo?</p>
                        </div>
                    ) : (
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam temporibus veniam corporis consectetur doloremque amet eius illo sequi, sunt fugit...<a onClick={() => setReadMore(true)} style={{ cursor: "pointer" }}>More</a></p>
                        </div>
                    )
                }
                
                <div className="image__section">
                    <div>
                        <Image 
                            src="/assets/images/user.jpg"
                            alt="image"
                            layout="responsive"
                            width={350}
                            height={350}
                        />
                    </div>
                    <div>
                        <Image 
                            src="/assets/images/user.jpg"
                            alt="image"
                            layout="responsive"
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
                <div className="like__and--coments d-flex justify-content-between pt-3">
                    <p><strong>12</strong> Likes</p>  
                    <p style={{ cursor: "pointer" }} onClick={() => setShowComment(!showComment)}>4 Comments</p>
                </div>
                <div className="like__share d-flex justify-content-around">
                    <div>
                        <button type="button">Like</button>
                    </div>
                    <div>
                        <button style={{ cursor: "pointer" }} onClick={() => setShowComment(!showComment)} type="button">Comment</button>
                    </div>
                    <div>
                        <button type="button">Share</button>
                    </div>
                </div>
                {
                    showComment && (
                        <div>
                            <div className="user__comments d-flex">
                                <div>
                                    <Image 
                                        src="/assets/images/user.jpg"
                                        alt="image"
                                        width={30}
                                        height={30}
                                        style={{ borderRadius: "50%"}}
                                    />
                                </div>
                                <div className="each__comment">
                                    <h6>Maruf Ahmed</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, alias.</p>
                                </div>
                            </div>
                            <div className="user__comments d-flex">
                                <div>
                                    <Image 
                                        src="/assets/images/user.jpg"
                                        alt="image"
                                        width={30}
                                        height={30}
                                        style={{ borderRadius: "50%"}}
                                    />
                                </div>
                                <div className="each__comment">
                                    <h6>Maruf Ahmed</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, alias.</p>
                                </div>
                            </div>
                            <div className="do__comment d-flex">
                                <div>
                                    <Image 
                                        src="/assets/images/user.jpg"
                                        alt="image"
                                        width={30}
                                        height={30}
                                        style={{ borderRadius: "50%"}}
                                    />
                                </div>
                                <div className="w-100">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MainContent