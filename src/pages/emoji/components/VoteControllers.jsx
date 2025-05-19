import { useEmojiContext } from "../../../contexts/EmojiContext";

const VoteControllers = () => {
    const { findWinner, resetVotes } = useEmojiContext();
    return (
        <div className="vote-controllers">
            <button
                className="vote-controllers__button vote-controllers__button--find-winner"
                onClick={findWinner}
            >
                Find Winner
            </button>
            <button
                className="vote-controllers__button vote-controllers__button--reset-votes"
                onClick={resetVotes}
            >
                Reset Votes
            </button>
        </div>
    );
};

export default VoteControllers;
