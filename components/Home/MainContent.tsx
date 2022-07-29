import React, { useEffect, useState } from 'react';
import { userPost } from "../../services/API/userPostApi";
import PostDataType from '../../dto/PostDataType';
import SinglePost from '../SinglePost/SinglePost';

const MainContent: React.FC = () => {
    const [postData, setPostData]         = useState<PostDataType[]>([]);

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
                            />
                        ))
                    ) : null
            }
        </div>
    )
}

export default MainContent