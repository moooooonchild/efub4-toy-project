import Tweet from "../components/Tweet";
import egg from "../assets/egg.PNG";
import axios from "axios";
import { useState, useEffect } from "react";

const TweetContainer = ({ isProf }) => {
    const URL_ALL = "/tweets";
    const URL_MY = "/accounts/1/tweets";

    const [tweetInfo, setTweetInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getTweets() {
            try {
                setTweetInfo([]);
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
    }, []);

    const tweets = isProf ? tweetInfo.accountTweetList : tweetInfo.tweets;
    console.log(tweets);

    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div>
                    {tweets
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
                        ))}
                </div>
            )}
        </div>
    );
};

export default TweetContainer;
