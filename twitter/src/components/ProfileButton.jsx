import styled from "styled-components";
import { IoIosMore } from "react-icons/io";

import egg from "../assets/egg.PNG";

const ProfButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
`;

const ProfPic = styled.img`
    width: 40px;
    border-radius: 50%;
`;

const MyId = styled.div`
    width: 170px;
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const More = styled(IoIosMore)`
    width: 18.75px;
    height: 18.75px;
    color: white;
`;

const ProfileButton = () => {
    return (
        <ProfButton>
            <ProfPic src={egg} />
            <MyId>
                <div>알</div>
                <div>@dontbreakme</div>
            </MyId>
            <More />
        </ProfButton>
    );
};

export default ProfileButton;
