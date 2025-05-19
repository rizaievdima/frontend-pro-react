import { useEmojiContext } from "../../../contexts/EmojiContext";
import EmojiCard from "./EmojiCard";

const EmojisList = () => {
    const { emojis } = useEmojiContext();
    return (
        <div className="emojis-list">
            {emojis.map((emoji) => (
                <EmojiCard key={emoji.id} emoji={emoji} />
            ))}
        </div>
    );
};

export default EmojisList;
