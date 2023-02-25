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

  return (
    <div className="grid grid-cols-4 my-4">
      <Emotion
        selected={selectedEmotions.includes("❤️")}
        onClick={() => handleEmotionClick("❤️")}
      >
        ❤️
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("😊")}
        onClick={() => handleEmotionClick("😊")}
      >
        😊
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("😦")}
        onClick={() => handleEmotionClick("😦")}
      >
        😦
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("🙏")}
        onClick={() => handleEmotionClick("🙏")}
      >
        🙏
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("😅")}
        onClick={() => handleEmotionClick("😅")}
      >
        😅
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("😭")}
        onClick={() => handleEmotionClick("😭")}
      >
        😭
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("🤯")}
        onClick={() => handleEmotionClick("🤯")}
      >
        🤯
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("👩‍❤️‍👨")}
        onClick={() => handleEmotionClick("👩‍❤️‍👨")}
      >
        👩‍❤️‍👨
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("🌞")}
        onClick={() => handleEmotionClick("🌞")}
      >
        🌞
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("🍕")}
        onClick={() => handleEmotionClick("🍕")}
      >
        🍕
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("🪄")}
        onClick={() => handleEmotionClick("🪄")}
      >
        🪄
      </Emotion>
      <Emotion
        selected={selectedEmotions.includes("🥴")}
        onClick={() => handleEmotionClick("🥴")}
      >
        🥴
      </Emotion>
    </div>
  );
};

export default Emotions;
