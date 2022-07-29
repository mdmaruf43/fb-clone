import Image from "next/image";
import React, { useState, Dispatch, SetStateAction } from 'react';
import Lightbox from "react-awesome-lightbox";
import { Form } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import PostDataType from '../../dto/PostDataType';

interface PropsDataType {
    post:       PostDataType;
    findPostId: (id: number) => void;
    setShow:    Dispatch<SetStateAction<boolean>>;
}

interface ImageType {
    url:        string;
    title:      string;
}

const SinglePost: React.FC<PropsDataType> = ({ post, findPostId, setShow }) => {
    const [showComment, setShowComment] = useState<boolean>(false);
    const [readMore, setReadMore]       = useState<boolean>(false);
    const [isOpen, setIsOpen]           = useState<boolean>(false);
    const [images, setImages]           = useState<ImageType[]>([]);
    const [imageId, setImageId]         = useState<number>(0);

    const findLightboxImages = (images: { path: string; }[]) => {
        const transformImagesArr = images.map((image: { path: string; }) => {
            return {
                url: image.path,
                title: ''
            }
        });
        setImages(transformImagesArr);
    }

    return (
        <div className="each__post--content">
            <div className="header d-flex justify-content-between">
                <div className="d-flex">
                    <p>
                        <Image 
                            src={post?.user?.photo}
                            alt={post?.user?.name}
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%"}}
                            priority
                        />
                    </p>
                    <div className="ps-3">
                        <div>
                            <p className="name">{post?.user?.name}</p>
                            <p className="small">{post?.created_at}</p>
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
                        <p>{post?.description}</p>
                    </div>
                ) : (
                    <div className="description">
                        <p>{post?.description?.slice(0, 100)}...<a onClick={() => setReadMore(true)} style={{ cursor: "pointer" }}>More</a></p>
                    </div>
                )
            }
            <div className="image__section" onClick={() => findLightboxImages(post?.photos)}>
                {
                    post?.photos?.map((photo, index) => (
                        <div key={index}  onClick={() => {setIsOpen(true), setImageId(index)}}>
                            <Image 
                                src={photo?.path}
                                alt="image"
                                layout="responsive"
                                width={350}
                                height={250}
                                priority
                            />
                        </div>
                    ))
                }
            </div>
            {
                isOpen && 
                <Lightbox images={images} startIndex={imageId} onClose={() => setIsOpen(false)} />
            }
            <div className="like__and--coments d-flex justify-content-between pt-3">
                <p><strong>{post?.total_likes}</strong> Likes</p>  
                <p style={{ cursor: "pointer" }} onClick={() => setShowComment(!showComment)}>{post?.comments?.length} Comments</p>
            </div>
            <div className="like__share d-flex justify-content-around">
                <div>
                    <button type="button">{post?.is_liked ? <span style={{ color: "#4267B2"}}>Liked</span> : <span>Like</span>}</button>
                </div>
                <div>
                    <button style={{ cursor: "pointer" }} onClick={() => setShowComment(!showComment)} type="button">Comment</button>
                </div>
                <div>
                    <button onClick={() => { findPostId(post?.id), setShow(true)}} type="button">Share</button>
                </div>
            </div>
            {
                showComment && (
                    <div>
                        {
                            post?.comments?.length > 0 
                                ? (
                                    post?.comments?.map((comment, index) => (
                                        <div key={index} className="user__comments d-flex">
                                            <div>
                                                <Image 
                                                    src={comment?.user?.photo}
                                                    alt={comment?.user?.name}
                                                    width={30}
                                                    height={30}
                                                    style={{ borderRadius: "50%"}}
                                                    priority
                                                />
                                            </div>
                                            <div className="each__comment">
                                                <h6>{comment?.user?.name}</h6>
                                                <p>{comment?.comment_message}</p>
                                            </div>
                                        </div>
                                    ))
                                ): null
                        }
                        
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
    )
}

export default SinglePost;