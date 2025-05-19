import { createContext, useState, useCallback, useMemo, useContext } from "react";

export const EmojiContext = createContext(null);

export const useEmojiContext = () => {
    const context = useContext(EmojiContext);
    if (!context) {
        throw new Error("useEmojiContext must be used with an EmojiProvider");
    }
    return context;
};

export default function EmojiProvider({ children }) {
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

    const addVote = useCallback((id) => {
        setEmojis((prevState) => {
            const newEmojis = prevState.map((emoji) =>
                emoji.id === id ? { ...emoji, vote: emoji.vote + 1 } : emoji
            );
            localStorage.setItem("emojis", JSON.stringify(newEmojis));
            return newEmojis;
        });
    }, []);

    const findWinner = useCallback(() => {
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
    }, [emojis]);

    const resetVotes = useCallback(() => {
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
    }, [emojis]);

    const contextValue = useMemo(
        () => ({
            emojis,
            winner,
            addVote,
            findWinner,
            resetVotes,
        }),
        [emojis, winner, addVote, findWinner, resetVotes]
    );

    return <EmojiContext.Provider value={contextValue}>{children}</EmojiContext.Provider>;
}
