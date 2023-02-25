import { useState } from "react";
import Emotion from "../emotion";

type Props = {
  selectedEmotions: string[];
  onEmotionSelect: (selectedEmotions: string[]) => void;
};

const Emotions = ({ selectedEmotions, onEmotionSelect }: Props) => {
  const handleEmotionClick = (emotion: string) => {
    const index = selectedEmotions.indexOf(emotion);
    if (index === -1) {
      onEmotionSelect([...selectedEmotions, emotion]);
    } else {
      const updatedEmotions = [...selectedEmotions];
      updatedEmotions.splice(index, 1);
      onEmotionSelect(updatedEmotions);
    }
  };

  const emojiMap = {
    "💪🏼🚀": "Motivation",
    "💡👏🏼": "Inspiration",
    "🤣👻": "Funny",
    "🙏🏼💖": "Gratitude",
    "🤔🤯": "Curiosity",
    "🤝💛": "Friendship",
    "💕💘": "Love",
    "🏆👑": "Leadership",
    "🎵🎧": "Music",
    "🎊🏅": "Success",
    "💪🦁": "Courage",
    "✝️🕊️": "Faith",
    "🌟🕊️": "Hope",
    "🌱🌍": "Life",
    "🌈🌞": "Joy",
    "🏃🎯": "Perseverance",
  };

  return (
    <div className="grid grid-cols-4 m-2">
      {Object.entries(emojiMap).map(([emoji, topic]) => (
        <Emotion
          key={emoji}
          selected={selectedEmotions.includes(topic)}
          onClick={() => handleEmotionClick(topic)}
        >
          {emoji}
        </Emotion>
      ))}
    </div>
  );
};

export default Emotions;
