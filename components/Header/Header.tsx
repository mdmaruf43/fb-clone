import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Button} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from "next/image";
import { Form } from "react-bootstrap";
import UserContext from "../../context/userContext";
import UserContextType from "../../dto/UserContextType";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { onlineUserList } from "../../services/API/onlineUserList";
import UserDataType from "../../dto/UserDataType";

const Header: React.FC = () => {
    const [show, setShow]                       = useState(false);
    const [mobileSearchBtn, setMobileSearchBtn] = useState<boolean>(true);
    const { userName, userPhoto }               = React.useContext(UserContext) as UserContextType;
    const [user, setUser]                       = useState<UserDataType[]>([]);
    const [userSearch, setUserSearch]           = useState("");

    useEffect(() => {
        setUser(onlineUserList?.data);
    }, [])
    
    const handleClose       = () => setShow(false);
    const handleShow        = () => setShow(true);

    const notificationPopover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">All Notification</Popover.Header>
          <Popover.Body>
                <div className="each__profile--layout">
                    <div>
                        <Image 
                            src={userPhoto}
                            alt={userName}
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%"}}
                        />
                    </div>
                    <div className=""> 
                        <p className="name"><span>{userName}</span> accepted your Friedn Request</p>
                    </div>
                </div>
          </Popover.Body>
        </Popover>
    );

    const messagePopover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Recent Message</Popover.Header>
          <Popover.Body>
                <div className="each__profile--layout">
                    <div>
                        <Image 
                            src={userPhoto}
                            alt={userName}
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%"}}
                        />
                    </div>
                    <div className="">
                        <p className="name"><span>{userName}</span></p>
                        <p>Hi, Yoo</p>
                    </div>
                </div>
          </Popover.Body>
        </Popover>
    );

    const searchPopover = (
        <Popover id="popover-basic">
          <Popover.Body>
                {
                    user?.map((singleUser, index) => (
                        singleUser?.name?.toLocaleLowerCase().includes(userSearch.toLowerCase()) && (
                            <div key={index} className="each__profile--layout">
                                <div>
                                    <Image 
                                        src={singleUser?.photo}
                                        alt={singleUser?.name}
                                        width={40}
                                        height={40}
                                        style={{ borderRadius: "50%"}}
                                    />
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="name"><span>{singleUser?.name}</span></p>
                                </div>
                            </div>
                        )
                    ))
                }
                
          </Popover.Body>
        </Popover>
    );

    return (
        <Navbar className="header__wraper" expand="lg" fixed="top">
            <Container fluid>
                <Link  href="/" passHref>
                    <Navbar.Brand>
                        <span className="pe-lg-2">
                            <Image 
                                src="/assets/images/fb.png"
                                alt="brand logo"
                                width={40}
                                height={40}
                            />
                        </span>
                    </Navbar.Brand>
                </Link>
                <div className="mobile__menu--icon d-lg-none">
                    <ul className="d-flex">
                        <li onClick={() => setMobileSearchBtn(!mobileSearchBtn)}>
                            <AiOutlineSearch />
                        </li>
                        <Link href="/" passHref>
                            <li>
                                <AiOutlineHome />
                            </li>
                        </Link>
                        <li>
                            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={messagePopover}>
                                <Button>
                                    <AiOutlineMessage />
                                </Button>
                            </OverlayTrigger>
                        </li>
                        <li>
                            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={notificationPopover}>
                                <Button>
                                    <IoMdNotificationsOutline />
                                </Button>
                            </OverlayTrigger>
                        </li>
                        <li>
                            <Image
                                src="/assets/images/user.jpg"
                                alt="user photo"
                                width={30}
                                height={30}
                                style={{ borderRadius: "50%" }}
                            />
                        </li>
                        <li style={{ cursor: "pointer" }} onClick={handleShow}>
                            <svg
                                width="18"
                                height="18"
                                fill="none"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                fill="currentColor"
                                d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"
                                ></path>
                            </svg>
                        </li>
                    </ul>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Online User List</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="profile__layout d-flex justify-content-between">
                                <div className="d-flex">
                                    <Image
                                        src="/assets/images/user.jpg"
                                        alt="user photo"
                                        width={60}
                                        height={60}
                                        style={{ borderRadius: "50%" }}
                                    />
                                    <div className="d-flex align-items-center ps-2">
                                        <div>
                                            <p className="user__name">Maruf Ahmed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="switch__text">Follow</p>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className="me-auto header__search position-relative">
                        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={searchPopover}>
                            <Form>
                                <Form.Group className="position-relative" controlId="formBasicEmail">
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Search" 
                                        value={userSearch}
                                        onChange={(e) => setUserSearch(e.target.value)}
                                    />
                                    <span><AiOutlineSearch /></span>
                                </Form.Group>
                            </Form>
                        </OverlayTrigger>
                    </Nav>
                    <Nav className="right__sec">
                        <Link href="/" passHref>
                            <Nav.Link>
                                <AiOutlineHome />
                            </Nav.Link>
                        </Link>
                        <Nav.Link>
                            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={messagePopover}>
                                <Button>
                                    <AiOutlineMessage />
                                </Button>
                            </OverlayTrigger>
                        </Nav.Link>
                        <Nav.Link>
                            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={notificationPopover}>
                                <Button>
                                    <IoMdNotificationsOutline />
                                </Button>
                            </OverlayTrigger>
                        </Nav.Link>
                        <Nav.Link>
                            <Image
                                src={userPhoto}
                                alt={userName}
                                width={30}
                                height={30}
                                priority
                                style={{ borderRadius: "50%" }}
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
