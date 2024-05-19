import styled from "styled-components";
import { useState } from "react";

const Container = styled.div``;

const DeleteModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const modalHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <div>Delete post?</div>
            <div>
                This can’t be undone and it will be removed from your profile,
                the timeline of any accounts that follow you, and from search
                results.
            </div>
            <button>Delete</button>
            <button>Cancel</button>
        </Container>
    );
};

export default DeleteModal;
