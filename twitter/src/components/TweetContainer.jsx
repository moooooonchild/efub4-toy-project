import Tweet from "../components/Tweet";
import egg from "../assets/egg.PNG";
import axios from "axios";
import { useState, useEffect } from "react";

const TweetContainer = ({ isProf }) => {
    const BASE_URL = process.env.REACT_APP_API_URL;
    const URL_ALL = `${BASE_URL}tweets`;
    const URL_MY = `${BASE_URL}accounts/1/tweets`;

    const [tweetInfo, setTweetInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getTweets() {
            try {
                setLoading(true);
                const res = isProf
                    ? await axios.get(URL_MY)
                    : await axios.get(URL_ALL);
                setTweetInfo(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        }
        getTweets();
    }, [isProf]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!tweetInfo) {
        return <div>데이터를 불러오는데 실패</div>;
    }

    const tweets = isProf ? tweetInfo.accountTweetList : tweetInfo.tweets;

    const calcTime = (createdDate) => {
        const numToMonth = (month) => {
            switch (month) {
                case 1:
                    return "Jan";
                case 2:
                    return "Feb";
                case 3:
                    return "Mar";
                case 4:
                    return "Apr";
                case 5:
                    return "May";
                case 6:
                    return "Jun";
                case 7:
                    return "Jul";
                case 8:
                    return "Aug";
                case 9:
                    return "Sep";
                case 10:
                    return "Oct";
                case 11:
                    return "Nov";
                case 12:
                    return "Dec";
            }
        };
        const nTime = new Date();

        const tTime = new Date(createdDate);
        const Tyear = tTime.getFullYear();
        const Tmonth = tTime.getMonth() + 1;
        const Tdate = tTime.getDate();

        const msInSecond = 1000;
        const msInMinute = msInSecond * 60;
        const msInHour = msInMinute * 60;
        const msInDay = msInHour * 24;

        const timeDifference = nTime - tTime;
        if (timeDifference >= msInDay) {
            return `${numToMonth(Tmonth)} ${Tdate}, ${Tyear}`;
        } else if (timeDifference >= msInHour) {
            const hoursDifference = Math.floor(timeDifference / msInHour);
            return `${hoursDifference}h`;
        } else if (timeDifference >= msInMinute) {
            const minutesDifference = Math.floor(timeDifference / msInMinute);
            return `${minutesDifference}m`;
        } else if (timeDifference >= msInSecond) {
            const secondsDifference = Math.floor(timeDifference / msInSecond);
            return `${secondsDifference}s`;
        }

        return "now";
    };

    return (
        <div>
            {tweets && tweets.length > 0 ? (
                tweets
                    .slice()
                    .reverse()
                    .map((twt) => (
                        <Tweet
                            key={twt.tweetId}
                            tweetId={twt.tweetId}
                            img={egg}
                            name={twt.writer}
                            accountId={twt.accountId}
                            time={calcTime(twt.createdDate)}
                            text={twt.content}
                        />
                    ))
            ) : (
                <div>no tweets</div>
            )}
        </div>
    );
};

export default TweetContainer;
