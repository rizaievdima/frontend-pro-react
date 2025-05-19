import { useEmojiContext } from "../../../contexts/EmojiContext";

const EmojiCard = ({ emoji }) => {
    const { addVote } = useEmojiContext();
    const handleVote = () => {
        addVote(emoji.id);
    };

    return (
        <div className="emoji-card" onClick={handleVote}>
            <p className="emoji-card__emoji">{emoji.smile}</p>
            <p className="emoji-card__vote">{emoji.vote}</p>
        </div>
    );
};

export default EmojiCard;
