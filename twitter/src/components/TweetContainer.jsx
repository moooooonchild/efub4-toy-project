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
                console.log("data : " + res.data);
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
    console.log("tweets : " + tweets);

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
