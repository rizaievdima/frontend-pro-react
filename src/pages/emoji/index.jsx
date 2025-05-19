import EmojiProvider from "../../contexts/EmojiContext";
import EmojisList from "./components/EmojisList";
import VoteControllers from "./components/VoteControllers";
import VoteResults from "./components/VoteResults";

import "./components/emoji.css";

const Emoji = () => {
    return (
        <EmojiProvider>
            <div className="emoji-vote-container">
                <h1 className="emoji-vote__title">Emoji Vote</h1>
                <EmojisList />
                <VoteControllers />
                <h2>Vote Results:</h2>
                <VoteResults />
            </div>
        </EmojiProvider>
    );
};

export default Emoji;
