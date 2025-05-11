import React, { Component } from "react";
import EmojiCard from "./EmojiCard";

export class EmojisList extends Component {
    render() {
        const { emojis, addVote } = this.props;
        return (
            <div className="emojis-list">
                {emojis.map((emoji) => (
                    <EmojiCard key={emoji.id} emoji={emoji} addVote={addVote} />
                ))}
            </div>
        );
    }
}

export default EmojisList;
