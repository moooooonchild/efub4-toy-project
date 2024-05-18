import Tweet from "../components/Tweet";
import WritePost from "../components/WritePost";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";

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

const Home = () => {
    return (
        <MainContainer>
            <MainHeader>
                <div style={{ width: "255px", textAlign: "center" }}>
                    For you
                </div>
                <div style={{ width: "287px", textAlign: "center" }}>
                    Following
                </div>
                <SettingBtn />
            </MainHeader>
            <RowLine />
            <WritePost />
            <RowLine />
            <div>
                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        </MainContainer>
    );
};

export default Home;
