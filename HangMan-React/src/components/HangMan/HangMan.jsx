import stage1 from "../../assets/img/HangMan stage 1.png";
import stage2 from "../../assets/img/HangMan stage 2.png";
import stage3 from "../../assets/img/HangMan stage 3.png";
import stage4 from "../../assets/img/HangMan stage 4.png";
import stage5 from "../../assets/img/HangMan stage 5.png";
import stage6 from "../../assets/img/HangMan stage 6.png";
import stage7 from "../../assets/img/HangMan stage 7.png";
import stage8 from "../../assets/img/HangMan stage 8.png";

function HangMan({ stageCounter }) {
	const hangManStages = new Array(
		stage1,
		stage2,
		stage3,
		stage4,
		stage5,
		stage6,
		stage7,
		stage8
	);

	const getCurrStage = hangManStages[stageCounter];

	return <img className="max-w-xs" src={getCurrStage} alt={`HangMan${stageCounter}`} />;
}

export default HangMan;
