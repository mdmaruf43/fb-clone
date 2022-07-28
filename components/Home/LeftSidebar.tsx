import React from 'react';
import Image from "next/image";

const LeftSidebar = () => {
    return (
        <div className="position-relative">
            <div className="left__section">
                <div className="each__profile d-flex">
                    <Image 
                        src="/assets/images/user.jpg"
                        alt="image"
                        width={45}
                        height={45}
                        style={{ borderRadius: "50%"}}
                    />
                    <div className="d-flex align-items-center ps-2">
                        <p className="name">Maruf Ahmed</p>
                    </div>
                </div>
                <div className="each__profile d-flex">
                    <Image 
                        src="/assets/images/user2.png"
                        alt="image"
                        width={45}
                        height={45}
                        style={{ borderRadius: "50%"}}
                    />
                    <div className="d-flex align-items-center ps-2">
                        <p className="name">Friends</p>
                    </div>
                </div>
                <div className="each__profile d-flex">
                    <Image 
                        src="/assets/images/user.png"
                        alt="image"
                        width={45}
                        height={45}
                        style={{ borderRadius: "50%"}}
                    />
                    <div className="d-flex align-items-center ps-2">
                        <p className="name">Groups</p>
                    </div>
                </div>
                <div className="each__profile d-flex">
                    <Image 
                        src="/assets/images/user.png"
                        alt="image"
                        width={45}
                        height={45}
                        style={{ borderRadius: "50%"}}
                    />
                    <div className="d-flex align-items-center ps-2">
                        <p className="name">Groups</p>
                    </div>
                </div>
                <div className="each__profile d-flex">
                    <Image 
                        src="/assets/images/home.png"
                        alt="image"
                        width={45}
                        height={45}
                        style={{ borderRadius: "50%"}}
                    />
                    <div className="d-flex align-items-center ps-2">
                        <p className="name">Marketplace</p>
                    </div>
                </div>
                <div className="each__profile d-flex">
                    <Image 
                        src="/assets/images/video.png"
                        alt="image"
                        width={45}
                        height={45}
                        style={{ borderRadius: "50%"}}
                    />
                    <div className="d-flex align-items-center ps-2">
                        <p className="name">Watch</p>
                    </div>
                </div>
                <div className="each__profile d-flex">
                    <Image 
                        src="/assets/images/clock.png"
                        alt="image"
                        width={45}
                        height={45}
                        style={{ borderRadius: "50%"}}
                    />
                    <div className="d-flex align-items-center ps-2">
                        <p className="name">Memories</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar