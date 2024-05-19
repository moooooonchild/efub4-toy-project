import styled from "styled-components";
import { IoIosMore } from "react-icons/io";

const ContentContainer = styled.div`
    width: 348px;
    height: 62px;

    padding: 12px;

    display: flex;
`;

const TrendInfo = styled.div`
    width: 300px;
`;

const More = styled(IoIosMore)`
    width: 18.75px;
    color: #71767b;
`;

const TrendContent = ({ name, postNum }) => {
    return (
        <ContentContainer>
            <TrendInfo>
                <div style={{ fontSize: "13px", color: "#71767B" }}>
                    대한민국에서 트렌드 중
                </div>
                <div
                    style={{
                        fontSize: "15px",
                        color: "#E7E9EA",
                        fontWeight: "bold",
                    }}
                >
                    {name}
                </div>
                <div style={{ fontSize: "13px", color: "#71767B" }}>
                    {postNum} posts
                </div>
            </TrendInfo>
            <More />
        </ContentContainer>
    );
};

export default TrendContent;
