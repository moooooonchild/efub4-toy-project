import styled from "styled-components";

import explore from "../assets/explore.svg";

const SearchBar = () => {
    return (
        <Container>
            <ImgBox>
                <img src={explore} width={16} height={16} />
            </ImgBox>
            <SearchBox placeholder="Search"></SearchBox>
        </Container>
    );
};

export default SearchBar;

const Container = styled.div`
    display: flex;
`;

const SearchBox = styled.input`
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;

    width: 304px;
    height: 42px;
    border-radius: 0 30px 30px 0;
    background-color: #252525;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif;
    font-size: 15px;
    color: white;
`;

const ImgBox = styled.div`
    width: 44px;
    height: 42px;
    border-radius: 30px 0 0 30px;
    background-color: #252525;

    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #252525;
`;
