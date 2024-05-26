import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { GiConsoleController } from "react-icons/gi";

const DeleteModal = ({ isOpen, modalHandler, tweetId, accountId }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    async function deleteTweet(tweetId, accountId) {
        const BASE_URL = process.env.REACT_APP_API_URL;
        const URL = `${BASE_URL}tweets/${tweetId}?accountId=${accountId}`;
        console.log(URL);
        try {
            const res = await axios.delete(URL);
            console.log(res.data);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Background
            style={{ display: isOpen ? "flex" : "none" }}
            onClick={modalHandler}
        >
            <Container>
                <div
                    style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "#e8e9ea",
                        marginBottom: "8px",
                    }}
                >
                    Delete post?
                </div>
                <div style={{ fontSize: "15px", color: "darkgray" }}>
                    This can’t be undone and it will be removed from your
                    profile, the timeline of any accounts that follow you, and
                    from search results.
                </div>
                <DeleteBtn
                    onClick={(event) => {
                        event.stopPropagation();
                        event.preventDefault();
                        deleteTweet(tweetId, accountId);
                    }}
                >
                    Delete
                </DeleteBtn>
                <CancelBtn onClick={modalHandler}>Cancel</CancelBtn>
            </Container>
        </Background>
    );
};

export default DeleteModal;

const Background = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #5b708366;
`;

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    width: 250px;
    height: 240px;
    background-color: black;
    border-radius: 20px;

    padding: 32px;

    display: flex;
    flex-direction: column;
`;

const DeleteBtn = styled.button`
    width: 256px;
    height: 44px;
    margin-top: 24px;
    padding: 0 24px;
    background-color: #f4212e;
    border-radius: 30px;

    border: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: white;
`;

const CancelBtn = styled.button`
    width: 256px;
    height: 44px;
    margin-top: 12px;
    padding: 0 24px;
    background-color: black;
    border-radius: 30px;

    border: 1px solid white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: white;
`;
