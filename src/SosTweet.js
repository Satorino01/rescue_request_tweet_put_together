import {TwitterTweetEmbed} from "react-twitter-embed";
import React , { Component } from "react";


export default class SosTweets extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
    }

    componentDidMount() {
        console.log(process.env.REACT_APP_DEV_API_URL)
        return fetch(process.env.REACT_APP_DEV_API_URL + "/tweet/list/?format=json")
            .then((response) => response.json())
            .then((responseJson) =>
                this.setState({
                    count: responseJson.count,
                    tweets: responseJson.tweets
                })
            )
            .catch((error) => {
                console.error(error);
            });
    }

    renderTweets() {
        if(this.state.isLoading){
            return(
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        }else {
            let tweet_list = [];
            let tweets = this.state.tweets

            // 取得したデータが空だったら
            if(0 === tweets.length){
                return(
                    <div>
                        <h1>Loading...</h1>
                    </div>
                );
            }

            for(let i in tweets) {
                tweet_list.push(<TwitterTweetEmbed tweetId={tweets[i].id}/>);
            }
            return tweet_list
        }
    }

    render() {
        return (
            <div className='tweets-style'>
                <ul>
                    {this.renderTweets()}
                </ul>
            </div>
        );
    }
}