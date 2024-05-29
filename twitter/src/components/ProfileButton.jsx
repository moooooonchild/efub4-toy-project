import styled from "styled-components";
import axios from "axios";
import { IoIosMore } from "react-icons/io";

import egg from "../assets/egg.PNG";
import { useEffect, useState } from "react";

const ProfileButton = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const BASE_URL = process.env.REACT_APP_API_URL;
    const URL = `${BASE_URL}/accounts/1`;

    useEffect(() => {
        async function getUserData() {
            try {
                const res = await axios.get(URL);
                setUserData(res.data);
                console.log(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        getUserData();
    }, []);

    return (
        <ProfButton>
            {loading ? (
                <div></div>
            ) : (
                <>
                    <ProfPic src={egg} />
                    <MyId>
                        <div style={{ fontWeight: "bold" }}>
                            {userData?.nickname}
                        </div>
                        <div style={{ color: "darkgray" }}>
                            {" "}
                            {`@egg_${userData?.accountId}`}
                        </div>
                    </MyId>
                    <More />
                </>
            )}
        </ProfButton>
    );
};

export default ProfileButton;

const ProfButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;

    margin-top: auto;
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

    font-size: 15px;

    @media screen and (max-width: 1300px) {
        display: none;
    }
`;

const More = styled(IoIosMore)`
    width: 18.75px;
    height: 18.75px;
    color: white;
    @media screen and (max-width: 1300px) {
        display: none;
    }
`;
