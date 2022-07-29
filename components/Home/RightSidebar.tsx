import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { onlineUserList } from "../../services/API/onlineUserList";
import UserDataType from '../../dto/UserDataType';

const RightSidebar = () => {
    const [onlineUser, setOnlineUser] = useState<UserDataType[]>([]);

    useEffect(() => {
        setOnlineUser(onlineUserList?.data);
    }, [])

    return (
        <div className="position-relative">
            <div className="right__section">
                <div className="online__user--list">
                    <h6>Online User List</h6>
                    {
                        onlineUser?.length > 0 ? (
                            onlineUser?.map((user, index) => (
                                <div key={index} className="each__profile d-flex">
                                    <Image 
                                        src={user?.photo}
                                        alt={user?.name}
                                        width={35}
                                        height={35}
                                        style={{ borderRadius: "50%"}}
                                        priority
                                    />
                                    <div className="d-flex align-items-center ps-2">
                                        <p className="name">{user?.name}</p>
                                    </div>
                                </div>
                            ))
                        ) : null
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default RightSidebar