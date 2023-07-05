import { IonButton } from "@ionic/react";
import "./ExploreContainer.css";
import { TextToSpeech } from "@capacitor-community/text-to-speech";

interface ContainerProps {}

const SpeechComponent: React.FC<ContainerProps> = () => {
  const speak = async () => {
    try {
      await TextToSpeech.speak({
        text: "This is a sample text.",
        lang: "en-US",
        rate: 1.0,
        pitch: 1.0,
        volume: 1.0,
        category: "ambient",
      });
    } catch (error) {
      alert("error occured while speaking" + error);
    }
  };
  return (
    <div className="container">
      <p>On Pressing Button, text should be played on LoudSpeakers</p>
      <IonButton onClick={speak}>Press Me to Speak</IonButton>
    </div>
  );
};

export default SpeechComponent;
