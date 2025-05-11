import React, { Component } from "react";

export class VoteResults extends Component {
    render() {
        const { winner } = this.props;
        return (
            <div className="vote-results">
                <p className="vote-results__winner">
                    Winner: <span>{winner.smile}</span>
                </p>
                <p className="vote-results__vote">Vote: {winner.vote}</p>
            </div>
        );
    }
}

export default VoteResults;
