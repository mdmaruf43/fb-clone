import React from 'react';
import Image from "next/image";

const RightSidebar = () => {
    return (
        <div className="position-relative">
            <div className="right__section">
                <div className="online__user--list">
                    <h6>Online User List</h6>
                    <div className="each__profile d-flex">
                        <Image 
                            src="/assets/images/user.jpg"
                            alt="image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "50%"}}
                        />
                        <div className="d-flex align-items-center ps-2">
                            <p className="name">Maruf Ahmed</p>
                        </div>
                    </div>
                    <div className="each__profile d-flex">
                        <Image 
                            src="/assets/images/user.jpg"
                            alt="image"
                            width={35}
                            height={35}
                            style={{ borderRadius: "50%"}}
                        />
                        <div className="d-flex align-items-center ps-2">
                            <p className="name">Maruf Ahmed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar