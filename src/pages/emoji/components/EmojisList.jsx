import EmojiCard from "./EmojiCard";

const EmojisList = ({ emojis, addVote }) => {
    return (
        <div className="emojis-list">
            {emojis.map((emoji) => (
                <EmojiCard key={emoji.id} emoji={emoji} addVote={addVote} />
            ))}
        </div>
    );
};

export default EmojisList;
