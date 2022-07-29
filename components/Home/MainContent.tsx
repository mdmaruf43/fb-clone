import React, { useEffect, useState } from 'react';
import { userPost } from "../../services/API/userPostApi";
import PostDataType from '../../dto/PostDataType';
import SinglePost from '../SinglePost/SinglePost';
import ShareModal from '../ShareModal/ShareModal';

const MainContent: React.FC = () => {
    const [postData, setPostData]   = useState<PostDataType[]>([]);
    const [onePost, setOnePost]     = useState<PostDataType>();
    const [show, setShow]           = useState(false);

    const handleClose = () => setShow(false);

    const findPostId = (id:number) => {
        setOnePost(userPost?.data?.posts.find((post) => post?.id === id));
    }

    useEffect(() => {
        setPostData(userPost?.data?.posts);
    }, [])

    return (
        <div className="middle__section">
            {
                postData?.length > 0 
                    ? (
                        postData?.map((singlePost, index) => (
                            <SinglePost 
                                key={index}
                                post={singlePost}
                                findPostId={findPostId}
                                setShow={setShow}
                            />
                        ))
                    ) : null
            }
            <ShareModal 
                show={show}
                handleClose={handleClose}
                onePost={onePost}
            />
        </div>
    )
}

export default MainContent