import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";

import egg from "../assets/egg.PNG";
import TweetContainer from "../components/TweetContainer";
import { useEffect, useState } from "react";

const Profile = () => {
    const nav = useNavigate();
    const [userData, setUserData] = useState(null);
    const [twtNum, setTwtNum] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const URL = "/accounts/1";
        const URL2 = "/accounts/1/tweets";

        async function getUserData() {
            try {
                setLoading(true);
                const res = await axios.get(URL);
                const res2 = await axios.get(URL2);
                setUserData(res.data);
                setTwtNum(res2.data.count);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        getUserData();
    }, []);

    return (
        <MainContainer>
            {loading ? (
                <div>loading...</div>
            ) : (
                <>
                    <Header>
                        <Arrow onClick={() => nav(-1)} />

                        <div
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div
                                style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                                {userData.nickname}
                            </div>
                            <div
                                style={{ fontSize: "13px", color: "darkgray" }}
                            >
                                {twtNum} posts
                            </div>
                        </div>
                    </Header>
                    <HeaderImg src="https://media.istockphoto.com/id/519518676/ko/%EC%82%AC%EC%A7%84/%ED%94%84%EB%9D%BC%EC%9D%B4%EB%93%9C-%EC%97%90%EA%B7%B8-%EA%B5%AC%EC%9A%B4-%EB%B9%B5.jpg?s=612x612&w=0&k=20&c=sJPzsFwjOyVbAD7VF5PrC3f5GqNLhDNpyK8YlYOfA-0=" />
                    <InfoContainer>
                        <ProfileImg src={egg} />
                        <BtnContainer>
                            <EditBtn>Edit Profile</EditBtn>
                        </BtnContainer>
                        <NamenId>
                            <div
                                style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                                {userData?.nickname}
                            </div>
                            <div
                                style={{ fontSize: "15px", color: "darkgray" }}
                            >
                                {`@dontbreakme_${userData?.accountId}`}
                            </div>
                        </NamenId>
                        <div>{userData?.bio}</div>
                        <JoinedDate>
                            <CalendarImg />
                            <div>Joined May 2024</div>
                        </JoinedDate>
                        <FollowInfo>
                            <div>
                                <Num>6</Num> Following
                            </div>
                            <div>
                                <Num>14</Num> Followers
                            </div>
                        </FollowInfo>
                    </InfoContainer>
                    <ProfNavBar>
                        <NavContent>
                            Posts
                            <ChosenBar />
                        </NavContent>
                        <NavContent>Replies</NavContent>
                        <NavContent>Highlights</NavContent>
                        <NavContent>Articles</NavContent>
                        <NavContent>Media</NavContent>
                        <NavContent>Likes</NavContent>
                    </ProfNavBar>
                    <RowLine />
                    <TweetContainer isProf={true} />
                </>
            )}
        </MainContainer>
    );
};

export default Profile;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 598px;
`;

const Header = styled.div`
    display: flex;
    height: 53px;
    align-items: center;
`;

const Arrow = styled(FaArrowLeft)`
    width: 15px;
    height: 15px;
    margin-left: 16px;
    margin-right: 30px;
    color: #e7e9ea;
`;

const HeaderImg = styled.img`
    height: 200px;
    object-fit: none;
`;

const InfoContainer = styled.div`
    //height: 230px;

    margin: 0 0 16px;
    padding: 12px 16px 0;

    position: relative;
`;

const ProfileImg = styled.img`
    width: 133px;
    width: 133px;
    position: absolute;
    top: 0%;
    left: 15%;
    transform: translate(-50%, -50%);
    z-index: 1;
    border: 4px solid black;
    border-radius: 50%;
`;

const BtnContainer = styled.div`
    height: 69px;
    display: flex;
    justify-content: end;
`;
const EditBtn = styled.button`
    width: 113px;
    height: 36px;
    background-color: inherit;
    border: 1px solid #e3e9ea;
    border-radius: 20px;

    color: #e3e9ea;
    font-size: 15px;
    font-weight: bold;
`;

const NamenId = styled.div`
    margin: 4px 0px 12px;

    & > :first-child {
        margin-bottom: 2px;
    }
`;
const JoinedDate = styled.div`
    display: flex;
    align-items: center;
    color: darkgray;
    margin: 12px 0;
`;

const CalendarImg = styled(FaRegCalendarAlt)`
    width: 15px;
    height: 15px;
    margin-right: 4px;
`;

const FollowInfo = styled.div`
    display: flex;
    align-items: center;

    & > * {
        color: darkgray;
        font-size: 14px;
    }

    & > :first-child {
        margin-right: 20px;
    }
`;

const Num = styled.span`
    color: #e7e9ea;
    font-weight: bold;
`;

const ProfNavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 52px;

    color: darkgray;
    font-size: 15px;

    & > :first-child {
        color: #e7e9ea;
        font-weight: bold;
    }
`;

const NavContent = styled.div`
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const ChosenBar = styled.div`
    width: 56px;
    height: 4px;
    border-radius: 15px;
    background-color: #1d9bf0;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
`;

const RowLine = styled.div`
    border-bottom: 1px solid #252525;
    width: 100%;
    margin: 0 auto;
`;
