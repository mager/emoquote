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
    "πͺπΌπ": "Motivation",
    "π‘ππΌ": "Inspiration",
    "π€£π»": "Funny",
    "ππΌπ": "Gratitude",
    "π€π€―": "Curiosity",
    "π€π": "Friendship",
    "ππ": "Love",
    "ππ": "Leadership",
    "π΅π§": "Music",
    "ππ": "Success",
    "πͺπ¦": "Courage",
    "βοΈποΈ": "Faith",
    "πποΈ": "Hope",
    "π±π": "Life",
    "ππ": "Joy",
    "ππ―": "Perseverance",
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
