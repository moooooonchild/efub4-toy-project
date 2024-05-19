import Tweet from "../components/Tweet";
import egg from "../assets/egg.PNG";

const TweetContainer = () => {
    return (
        <div>
            <Tweet
                img={egg}
                name={"알"}
                id={"@dontbreakme"}
                text={"내가만든트윗"}
            />
            <Tweet
                img={egg}
                name={"알"}
                id={"@dontbreakme"}
                text={"너를위해구웠지"}
            />
            <Tweet
                img={egg}
                name={"알"}
                id={"@dontbreakme"}
                text={"뭘 구워요?"}
            />
            <Tweet img={egg} name={"알"} id={"@dontbreakme"} text={"몰라"} />
            <Tweet
                img={egg}
                name={"알"}
                id={"@dontbreakme"}
                text={"그냥평생눕고싶어"}
            />
        </div>
    );
};

export default TweetContainer;
