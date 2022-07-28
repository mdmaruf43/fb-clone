import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import LeftSidebar from './LeftSidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';


const Home: React.FC = () => {

    return (
        <Container>
            <div className="layout__grid">
                <LeftSidebar />
                <MainContent />
                <RightSidebar />
            </div>
        </Container>
    )
}

export default Home;