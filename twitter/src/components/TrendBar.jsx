import TrendContent from "./TrendContent";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const TrendBar = () => {
    return (
        <ContentContainer>
            <SearchBar />
            <TrendContainer>
                <TrendsForMe>Trends for you</TrendsForMe>
                <TrendContent name={"EFUB"} postNum={"20,136"} />
                <TrendContent name={"이펍 최고"} postNum={"3,335"} />
                <TrendContent name={"개발조아"} postNum={"5,643"} />
                <TrendContent name={"그냥 자고싶"} postNum={"1,445"} />
                <TrendContent name={"아바디뱅"} postNum={"3,561"} />
                <TrendContent name={"이펍 가입"} postNum={"6,175"} />
                <TrendContent name={"마라탕후루"} postNum={"40,802"} />
                <TrendContent name={"탕탕 후루후루"} postNum={"7,858"} />
                <TrendContent name={"이재현 존잘"} postNum={"97,913"} />
            </TrendContainer>
        </ContentContainer>
    );
};

export default TrendBar;

const ContentContainer = styled.div`
    position: sticky;
    top: 0;

    display: flex;
    flex-direction: column;
    width: 348px;
    height: 900px;
    padding-top: 5px;
    padding-left: 20px;
`;

const TrendContainer = styled.div`
    width: 348px;
    border: 1px solid #252525;
    border-radius: 20px;

    margin-top: 12px;
    margin-bottom: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TrendsForMe = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #e7e9ea;
    padding: 12px 16px;
`;
