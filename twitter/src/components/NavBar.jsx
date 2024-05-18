import NavContent from "./NavContent";
import ProfileButton from "./ProfileButton";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";

import twitter from "../assets/twitter.svg";
import home from "../assets/home.png";
import explore from "../assets/explore.svg";
import bell from "../assets/bell.svg";
import envelope from "../assets/envelope.svg";
import slash from "../assets/slash.png";
import list from "../assets/list.png";
import bookmark from "../assets/bookmark.png";
import users from "../assets/users.svg";
import user from "../assets/user.png";
import more from "../assets/more.png";
import pen from "../assets/quill-pen.png";

const NavContainer = styled.div`
    width: 242px;
`;

const HomeButton = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
`;

const AppIcon = styled(BsTwitterX)`
    color: #ffffff;
    width: 25px;
    height: 25px;
`;

const PostButton = styled.button`
    border: none;
    outline: none;
    background: none;
    box-shadow: none;

    width: 233px;
    height: 52px;
    background-color: #1d9bf0;
    border-radius: 30px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
`;

const NavBar = () => {
    return (
        <NavContainer>
            <HomeButton to="/">
                <AppIcon></AppIcon>
            </HomeButton>

            <div>
                <NavContent img={home} name={"Home"} />
                <NavContent img={explore} name={"Explore"} />
                <NavContent img={bell} name={"Notifications"} />
                <NavContent img={envelope} name={"Messages"} />
                <NavContent img={slash} name={"Grok"} />
                <NavContent img={list} name={"Lists"} />
                <NavContent img={bookmark} name={"Bookmarks"} />
                <NavContent img={users} name={"Communities"} />
                <NavContent img={twitter} name={"Premium"} />
                <NavContent img={user} name={"Profile"} />
                <NavContent img={more} name={"More"} />
            </div>
            <PostButton>
                <div>post</div>
            </PostButton>
            <ProfileButton />
        </NavContainer>
    );
};

export default NavBar;
