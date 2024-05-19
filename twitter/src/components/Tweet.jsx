import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const ContentContainer = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
`;

const TweetContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 518px;
    padding-top: 12px;

    font-size: 15px;
    color: #e7e9ea;
`;

const IdBar = styled.div`
    display: flex;
    align-items: center;
`;

const Name = styled.div`
    font-weight: bold;
`;

const Id = styled.div`
    color: darkgray;
    margin-left: 2px;
`;

const TweetText = styled.div`
    padding-top: 2px;
    padding-bottom: 8px;

    white-space: pre-wrap;
`;

const IconBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 4px;
`;

const IconGroup = styled.div`
    display: flex;
    align-items: center;

    & > * {
        margin-right: 8px;
    }

    & > *:last-child {
        margin-right: 0;
    }
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 17px;
    height: 17px;
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
    margin-top: 12px;
    margin-right: 8px;
`;

const RowLine = styled.div`
    border-bottom: 1px solid #252525;
`;

const More = styled(IoIosMore)`
    width: 18.75px;
    color: #71767b;
    margin-left: auto;
`;

const Tweet = ({ img, name, id, text }) => {
    const data = {
        img: img,
        name: name,
        id: id,
        text: text,
    };

    return (
        <ContentContainer to={`/detail`} state={{ data: data }}>
            <ProfPic src={img} />
            <TweetContainer>
                <IdBar>
                    <Name>{name}</Name>
                    <Id>{id}</Id>
                    <More />
                </IdBar>
                <TweetText>{text}</TweetText>
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
                        <IoIosStats />
                    </Icon>
                    <IconGroup>
                        <Icon>
                            <FaRegBookmark />
                        </Icon>
                        <Icon>
                            <MdOutlineFileUpload />
                        </Icon>
                    </IconGroup>
                </IconBar>
                <RowLine />
            </TweetContainer>
        </ContentContainer>
    );
};

export default Tweet;
