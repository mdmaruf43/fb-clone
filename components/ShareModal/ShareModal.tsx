import React, { Dispatch, SetStateAction } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PostDataType from '../../dto/PostDataType';
import Image from "next/image";

interface PropsDataType {
    show:           boolean;
    handleClose:    () => void;
    onePost:        PostDataType | null;
}

const ShareModal: React.FC<PropsDataType> = ({ handleClose, show, onePost }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Share Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="share__modal">
                    <p>{onePost?.description}</p>
                    <div className="image__section">
                        {
                            onePost?.photos?.map((photo, index) => (
                                <div key={index}>
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
                </div>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Share</Button>
            </Modal.Footer>
      </Modal>
    )
}

export default ShareModal