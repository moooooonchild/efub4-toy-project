import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

const TweetDetail = () => {
    const location = useLocation();
    const [data, setData] = useState(null);
    const nav = useNavigate();
    useEffect(() => {
        setData(location.state.data);
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <ContentContainer>
            <Header>
                <Arrow onClick={() => nav(-1)} />
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>Post</div>
            </Header>
            <TweetContainer>
                <IdBar>
                    <ProfPic src={data.img} />
                    <div>
                        <Name>{data.name}</Name>
                        <Id>{data.id}</Id>
                    </div>
                    <More />
                </IdBar>
                <TweetText>{data.text}</TweetText>
                <TweetInfo>4:12 PMㆍDec 6, 2017ㆍ100 Views</TweetInfo>
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
                <ProfPic src={data.img} />
                <ReplyText placeholder="Post your reply" />
                <ReplyBtn>Reply</ReplyBtn>
            </Reply>
            <RowLine />
        </ContentContainer>
    );
};

export default TweetDetail;
