import Tweet from "../components/Tweet";
import WritePost from "../components/WritePost";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";

import egg from "../assets/egg.PNG";

const MainContainer = styled.div`
    width: 598px;
`;

const MainHeader = styled.div`
    height: 53px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const SettingBtn = styled(FiSettings)`
    width: 30px;
`;

const RowLine = styled.div`
    border-top: 1px solid #252525;
`;

const TimelineChoice = styled.div`
    width: 63.23px;
    height: 4px;
    background-color: #1d9bf0;
    border-radius: 15px;
    margin-top: auto;
`;

const Following = styled.div`
    width: 287px;
    height: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    return (
        <MainContainer>
            <MainHeader>
                <div
                    style={{
                        width: "255px",
                        textAlign: "center",
                        color: "darkgray",
                    }}
                >
                    For you
                </div>
                <Following>
                    <div
                        style={{
                            paddingTop: "16px",
                            paddingBottom: "auto",
                            fontWeight: "bold",
                        }}
                    >
                        Following
                    </div>
                    <TimelineChoice />
                </Following>

                <SettingBtn />
            </MainHeader>
            <RowLine />
            <WritePost />
            <RowLine />
            <div>
                <Tweet
                    img={egg}
                    name={"알"}
                    id={"@dontbreakme"}
                    text={"테스트1"}
                />
                <Tweet
                    img={egg}
                    name={"알"}
                    id={"@dontbreakme"}
                    text={"테스트2"}
                />
                <Tweet
                    img={egg}
                    name={"알"}
                    id={"@dontbreakme"}
                    text={"테스트3"}
                />
                <Tweet
                    img={egg}
                    name={"알"}
                    id={"@dontbreakme"}
                    text={"테스트4"}
                />
            </div>
        </MainContainer>
    );
};

export default Home;
