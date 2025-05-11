import React, { Component } from "react";

export class EmojiCard extends Component {
    handleVote = () => {
        this.props.addVote(this.props.emoji.id);
    };
    render() {
        return (
            <div className="emoji-card" onClick={this.handleVote}>
                <p className="emoji-card__emoji">{this.props.emoji.smile}</p>
                <p className="emoji-card__vote">{this.props.emoji.vote}</p>
            </div>
        );
    }
}

export default EmojiCard;
