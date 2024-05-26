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

const NavBar = () => {
    return (
        <NavContainer>
            <HomeButton to="/">
                <AppIcon></AppIcon>
            </HomeButton>

            <div>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <NavContent img={home} name={"Home"} />
                </Link>
                <NavContent img={explore} name={"Explore"} />
                <NavContent img={bell} name={"Notifications"} />
                <NavContent img={envelope} name={"Messages"} />
                <NavContent img={slash} name={"Grok"} />
                <NavContent img={list} name={"Lists"} />
                <NavContent img={bookmark} name={"Bookmarks"} />
                <NavContent img={users} name={"Communities"} />
                <NavContent img={twitter} name={"Premium"} />
                <Link to="/profile" style={{ textDecoration: "none" }}>
                    <NavContent img={user} name={"Profile"} />
                </Link>

                <NavContent img={more} name={"More"} />
            </div>
            <PostButton>Post</PostButton>
            <ProfileButton />
        </NavContainer>
    );
};

export default NavBar;

const NavContainer = styled.div`
    width: 242px;
    display: flex;
    flex-direction: column;
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

    margin-top: 10px;

    color: white;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    font-size: 17px;
    font-weight: bold;
`;
