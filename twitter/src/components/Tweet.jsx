import styled from "styled-components";

import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const ContentContainer = styled.div``;

const TweetContainer = styled.div``;

const IdBar = styled.div``;

const TweetText = styled.div``;

const IconBar = styled.div`
    display: flex;

    & > * {
        width: 17px;
        height: 17px;
        color: darkgray;
    }
`;

const RowLine = styled.div`
    border-top: 1px solid #252525;
`;

const Tweet = ({ img, name, id, text }) => {
    return (
        <ContentContainer>
            <img src={img} />
            <TweetContainer>
                <IdBar>
                    <div>{name}</div>
                    <div>{id}</div>
                </IdBar>
                <TweetText>{text}</TweetText>
                <IconBar>
                    <FaRegComment />
                    <FaRetweet />
                    <FaRegHeart />
                    <IoIosStats />
                    <FaRegBookmark />
                    <MdOutlineFileUpload />
                </IconBar>
            </TweetContainer>
            <RowLine />
        </ContentContainer>
    );
};

export default Tweet;
