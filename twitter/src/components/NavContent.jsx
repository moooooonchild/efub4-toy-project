import styled from "styled-components";

const NavContent = ({ img, name }) => {
    return (
        <ContentContainer>
            <img src={img} width="25" />
            <NavText>{name}</NavText>
        </ContentContainer>
    );
};

export default NavContent;

const ContentContainer = styled.div`
    width: 242px;
    height: 50.25px;

    display: flex;
    align-items: center;
`;

const NavText = styled.div`
    margin-left: 16px;
    margin-right: 20px;

    font-size: 20px;
    color: #e7e9ea;
`;
