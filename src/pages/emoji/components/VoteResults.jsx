const VoteResults = ({ winner }) => {
    return (
        <div className="vote-results">
            <p className="vote-results__winner">
                Winner: <span>{winner.smile}</span>
            </p>
            <p className="vote-results__vote">Vote: {winner.vote}</p>
        </div>
    );
};

export default VoteResults;
