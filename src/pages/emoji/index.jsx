import { useState } from "react";
import EmojisList from "./components/EmojisList";
import VoteControllers from "./components/VoteControllers";
import VoteResults from "./components/VoteResults";
import "./components/emoji.css";

const Emoji = () => {
    const [emojis, setEmojis] = useState(
        localStorage.getItem("emojis")
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
              ]
    );
    const [winner, setWinner] = useState(
        localStorage.getItem("winner") ? JSON.parse(localStorage.getItem("winner")) : null
    );

    const addVote = (id) => {
        setEmojis((prevState) => {
            const newEmojis = prevState.map((emoji) =>
                emoji.id === id ? { ...emoji, vote: emoji.vote + 1 } : emoji
            );
            localStorage.setItem("emojis", JSON.stringify(newEmojis));
            return newEmojis;
        });
    };

    const findWinner = () => {
        const newWinner = emojis.reduce((prev, curr) => {
            if (prev.vote > curr.vote) {
                return prev;
            }
            return curr;
        });
        if (newWinner.vote === 0) {
            console.log("No winner");
            localStorage.removeItem("winner");
            setWinner(null);
        } else {
            localStorage.setItem("winner", JSON.stringify(newWinner));
            setWinner(newWinner);
        }
    };

    const resetVotes = () => {
        const newEmojis = emojis.map((emoji) => {
            return {
                ...emoji,
                vote: 0,
            };
        });
        localStorage.setItem("emojis", JSON.stringify(newEmojis));
        localStorage.removeItem("winner");
        setEmojis(newEmojis);
        setWinner(null);
    };

    return (
        <div className="emoji-vote-container">
            <h1 className="emoji-vote__title">Emoji Vote</h1>
            <EmojisList emojis={emojis} addVote={addVote} />
            <VoteControllers findWinner={findWinner} resetVotes={resetVotes} />
            <h2>Vote Results:</h2>
            {winner && <VoteResults winner={winner} />}
        </div>
    );
};

export default Emoji;
