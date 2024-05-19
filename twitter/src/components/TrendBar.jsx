import TrendContent from "./TrendContent";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 348px;
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

const TrendBar = () => {
    return (
        <ContentContainer>
            <SearchBar />
            <TrendContainer>
                <TrendsForMe>Trends for you</TrendsForMe>
                <TrendContent name={"김선우 너구리"} postNum={"20,136"} />
                <TrendContent name={"리를빗 챌린지"} postNum={"20,136"} />
                <TrendContent name={"더보이즈"} postNum={"20,136"} />
                <TrendContent name={"더보이즈 컴백"} postNum={"20,136"} />
                <TrendContent name={"선우 귀여워"} postNum={"20,136"} />
                <TrendContent name={"선우 사랑해"} postNum={"20,136"} />
                <TrendContent name={"선우 보고싶어"} postNum={"20,136"} />
                <TrendContent name={"덥뮤다선"} postNum={"20,136"} />
                <TrendContent name={"붐이 오길"} postNum={"20,136"} />
            </TrendContainer>
        </ContentContainer>
    );
};

export default TrendBar;
