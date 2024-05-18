import styled from "styled-components";
import egg from "../assets/egg.PNG";

import { FaRegImage } from "react-icons/fa6";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

const ContentContainer = styled.div`
    height: 116px;
    padding-left: 16px;
    padding-right: 16px;

    display: flex;
    justify-content: space-evenly;
`;

const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 518px;
`;

const Btns = styled.div`
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IconBar = styled.div`
    display: flex;

    & > * {
        width: 20px;
        height: 20px;
        padding: 10px;
        color: #1d9bf0;
    }
`;

const ProfPic = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 12px;
    margin-right: 8px;
`;

const Tweet = styled.input`
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
    padding: 12px 0;
    padding-left: 10px;
    margin: 0;

    font-size: 20px;
    color: white;
`;

const PostBtn = styled.button`
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
    width: 94px;
    height: 36px;
    border-radius: 30px;
    background-color: #1d9bf0;
    color: white;
`;

const WritePost = () => {
    return (
        <ContentContainer>
            <ProfPic src={egg} />
            <WriteContainer>
                <Tweet placeholder="What is happening?!" />
                <Btns>
                    <IconBar>
                        <FaRegImage />
                        <MdOutlineGifBox />
                        <MdOutlinePoll />
                        <FaRegSmile />
                        <LuCalendarClock />
                        <IoLocationOutline />
                    </IconBar>
                    <PostBtn>Post</PostBtn>
                </Btns>
            </WriteContainer>
        </ContentContainer>
    );
};

export default WritePost;