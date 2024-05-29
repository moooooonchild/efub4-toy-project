import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import egg from "../assets/egg.PNG";

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import DeleteModal from "../components/DeleteModal";

const TweetDetail = () => {
    const location = useLocation();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const nav = useNavigate();

    useEffect(() => {
        const URL = `/tweets/${location.state.tweetId}`;

        async function getDetails() {
            try {
                setDetails(null);
                const res = await axios.get(URL);
                setDetails(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        getDetails();
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const modalHandler = (event) => {
        event.stopPropagation();
        event.preventDefault();
        if (details.accountId === 1) {
            setIsModalOpen(!isModalOpen);
        }
    };

    const handleLink = (event) => {
        if (details.accountId !== 1) {
            event.preventDefault();
        }
    };

    if (!details) {
        return <div style={{ width: "598px" }}></div>;
    }

    const getTime = (createdDate) => {
        const date = new Date(createdDate);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // 0을 12로 변환
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

        // 날짜 포맷
        const year = date.getFullYear();
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        const month = monthNames[date.getMonth()];
        const day = date.getDate();

        return `${hours}:${formattedMinutes} ${ampm}ㆍ${month} ${day}, ${year}`;
    };

    return (
        <ContentContainer>
            {loading ? (
                <div></div>
            ) : (
                <>
                    <DeleteModal
                        isOpen={isModalOpen}
                        modalHandler={modalHandler}
                        tweetId={details.tweetId}
                        accountId={details.accountId}
                    />
                    <Header>
                        <Arrow onClick={() => nav(-1)} />
                        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Post
                        </div>
                    </Header>
                    <TweetContainer>
                        <IdBar>
                            <Link onClick={handleLink} to={"/profile"}>
                                <ProfPic src={egg} />
                            </Link>
                            <div>
                                <Name>{details.writer}</Name>
                                <Id>{`egg_${details.accountId}`}</Id>
                            </div>
                            <More onClick={modalHandler} />
                        </IdBar>
                        <TweetText>{details.content}</TweetText>
                        <TweetInfo>{getTime(details.createdDate)}</TweetInfo>
                    </TweetContainer>
                    <RowLine />
                    <ViewEng>
                        <IoIosStats style={{ marginRight: "5px" }} />
                        <div>View post engagements</div>
                    </ViewEng>
                    <RowLine />
                    <IconBar>
                        <Icon>
                            <FaRegComment />
                        </Icon>
                        <Icon>
                            <FaRetweet />
                        </Icon>
                        <Icon>
                            <FaRegHeart />
                        </Icon>
                        <Icon>
                            <FaRegBookmark />
                        </Icon>
                        <Icon>
                            <MdOutlineFileUpload />
                        </Icon>
                    </IconBar>
                    <RowLine />
                    <Reply>
                        <ProfPic src={egg} />
                        <ReplyText placeholder="Post your reply" />
                        <ReplyBtn>Reply</ReplyBtn>
                    </Reply>
                    <RowLine />
                </>
            )}
        </ContentContainer>
    );
};

export default TweetDetail;

const ContentContainer = styled.div`
    width: 566px;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    height: 53px;
`;

const Arrow = styled(FaArrowLeft)`
    width: 15px;
    height: 15px;
    margin-right: 30px;
    color: #e7e9ea;
`;

const TweetContainer = styled.div``;

const IdBar = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
`;

const Name = styled.div`
    font-weight: bold;
`;

const Id = styled.div`
    color: darkgray;
`;

const TweetText = styled.div`
    padding: 15px 0;
    font-size: 17px;
    white-space: pre-wrap;
`;

const IconBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 46px;
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20px;
    height: 20px;
    color: darkgray;
    margin: 8px;
    margin-left: 0;

    & > svg {
        width: 100%;
        height: 100%;
    }
`;

const ProfPic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

const RowLine = styled.div`
    border-bottom: 1px solid #252525;
    width: 100%;
    margin: 0 auto;
`;

const TweetInfo = styled.div`
    color: darkgray;
    font-size: 15px;
    padding-bottom: 15px;
`;

const More = styled(IoIosMore)`
    width: 18.75px;
    color: #71767b;
    margin-left: auto;
`;

const ViewEng = styled.div`
    padding: 16px 0;
    display: flex;
    align-items: center;
    color: darkgray;
    font-size: 15px;
`;

const Reply = styled.div`
    display: flex;
    align-items: center;
    height: 68px;
    padding: 4px 0 12px;
`;

const ReplyText = styled.input`
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    width: 427px;
    font-size: 20px;
    color: darkgray;
`;

const ReplyBtn = styled.button`
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
    width: 75px;
    height: 36px;
    border-radius: 30px;
    background-color: #1d9bf0;
    color: white;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    font-size: 15px;
    font-weight: bold;
`;
