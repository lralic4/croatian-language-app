import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

require("./TranslationBox.css");

const TranslationBox = () => {
  const [showEnglish, setShowEnglish] = useState(false);
  const [buttonText, setButtonText] = useState("Show Translation");
  const [currentItem, setCurrentItem] = useState(0);

  const greetingsData = require("./../../data/greetings/greetings.json");

  const clickTranslateButton = () => {
    if (showEnglish) {
      setShowEnglish(false);
      setButtonText("Show Translation");
    } else {
      setShowEnglish(true);
      setButtonText("Hide Translation");
    }
  };

  const clickNextButton = () => {
    if (currentItem == greetingsData.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem(currentItem + 1);
    }

    setShowEnglish(false);
    setButtonText("Show Translation");
  };

  const notImplemented = () => {
    alert("Functionality Coming Soon");
  };

  return (
    <div className="translationBox">
      <h4>
        Croatian Phrase: <i>{greetingsData[currentItem]["croatian"]}</i>
        <Badge bg="info" onClick={notImplemented} className="audioBtn">
          Audio
        </Badge>
      </h4>

      <div>
        <Button
          className="translationButton"
          variant="primary"
          onClick={clickTranslateButton}
        >
          {buttonText}
        </Button>
      </div>

      <h4>
        English Translation:{" "}
        {showEnglish && <i>{greetingsData[currentItem]["english"]}</i>}
      </h4>

      <div>
        <Button
          className="nextButton"
          variant="secondary"
          onClick={clickNextButton}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TranslationBox;
