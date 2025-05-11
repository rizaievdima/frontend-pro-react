import React, { Component } from "react";
import EmojisList from "./components/EmojisList";
import VoteControllers from "./components/VoteControllers";
import VoteResults from "./components/VoteResults";
import "./components/emoji.css";

export class Emoji extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emojis: localStorage.getItem("emojis")
                ? JSON.parse(localStorage.getItem("emojis"))
                : [
                      {
                          id: 1,
                          smile: "🙃",
                          vote: 0,
                      },
                      {
                          id: 2,
                          smile: "😉",
                          vote: 0,
                      },
                      {
                          id: 3,
                          smile: "😇",
                          vote: 0,
                      },
                      {
                          id: 4,
                          smile: "😀",
                          vote: 0,
                      },
                      {
                          id: 5,
                          smile: "😋",
                          vote: 0,
                      },
                  ],
            winner: localStorage.getItem("winner")
                ? JSON.parse(localStorage.getItem("winner"))
                : null,
        };
    }

    addVote = (id) => {
        this.setState((state) => {
            const newEmojis = state.emojis.map((emoji) => {
                if (emoji.id === id) {
                    return {
                        ...emoji,
                        vote: emoji.vote + 1,
                    };
                }
                return emoji;
            });
            localStorage.setItem("emojis", JSON.stringify(newEmojis));
            return {
                emojis: newEmojis,
            };
        });
    };

    findWinner = () => {
        this.setState((state) => {
            const winner = state.emojis.reduce((prev, curr) => {
                if (prev.vote > curr.vote) {
                    return prev;
                }
                return curr;
            });
            if (winner.vote === 0) {
                console.log("No winner");
                localStorage.removeItem("winner");
                return {
                    winner: null,
                };
            }
            localStorage.setItem("winner", JSON.stringify(winner));
            return {
                winner,
            };
        });
    };

    resetVotes = () => {
        this.setState((state) => {
            const newEmojis = state.emojis.map((emoji) => {
                return {
                    ...emoji,
                    vote: 0,
                };
            });
            localStorage.setItem("emojis", JSON.stringify(newEmojis));
            localStorage.removeItem("winner");
            return {
                emojis: newEmojis,
                winner: null,
            };
        });
    };

    render() {
        return (
            <div className="emoji-vote-container">
                <h1 className="emoji-vote__title">Emoji Vote</h1>
                <EmojisList emojis={this.state.emojis} addVote={this.addVote} />
                <VoteControllers findWinner={this.findWinner} resetVotes={this.resetVotes} />
                <h2>Vote Results:</h2>
                {this.state.winner && <VoteResults winner={this.state.winner} />}
            </div>
        );
    }
}

export default Emoji;
