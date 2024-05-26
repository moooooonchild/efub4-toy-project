import Tweet from "../components/Tweet";
import egg from "../assets/egg.PNG";
import axios from "axios";
import { useState, useEffect } from "react";

const TweetContainer = ({ isProf }) => {
    const URL_ALL = "/tweets";
    const URL_MY = "/accounts/1/tweets";

    const [tweetInfo, setTweetInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getTweets() {
            try {
                setTweetInfo(null);
                setLoading(true);
                const res = isProf
                    ? await axios.get(URL_MY)
                    : await axios.get(URL_ALL);
                setTweetInfo(res.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        getTweets();
    }, []);

    return (
        <div>
            {loading ? (
                <div>loading...</div>
            ) : (
                <div>
                    {isProf
                        ? tweetInfo.accountTweetList.map((twt) => (
                              <Tweet
                                  tweetId={twt.tweetId}
                                  img={egg}
                                  name={twt.writer}
                                  accountId={twt.accountId}
                                  text={twt.content}
                              />
                          ))
                        : tweetInfo.tweets.map((twt) => (
                              <Tweet
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
