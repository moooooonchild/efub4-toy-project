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
                <TrendContent name={"실트 1위"} postNum={"20,136"} />
                <TrendContent name={"실트 2위"} postNum={"20,136"} />
                <TrendContent name={"실트 3위"} postNum={"20,136"} />
                <TrendContent name={"실트 4위"} postNum={"20,136"} />
                <TrendContent name={"실트 5위"} postNum={"20,136"} />
                <TrendContent name={"실트 6위"} postNum={"20,136"} />
                <TrendContent name={"실트 7위"} postNum={"20,136"} />
                <TrendContent name={"실트 8위"} postNum={"20,136"} />
                <TrendContent name={"실트 10000위"} postNum={"20,136"} />
            </TrendContainer>
        </ContentContainer>
    );
};

export default TrendBar;
