import { ReactComponent as Scoot } from "../assets/logos/scoot.svg";
import { ReactComponent as Blogr } from "../assets/logos/blogr.svg";
import { ReactComponent as Coffeeroasters } from "../assets/logos/coffeeroasters.svg";
import { ReactComponent as Creative } from "../assets/logos/creative.svg";
import { ReactComponent as Crowdfund } from "../assets/logos/crowdfund.svg";
import { ReactComponent as Maker } from "../assets/logos/maker.svg";
import { ReactComponent as Mastercraft } from "../assets/logos/mastercraft.svg";
import { ReactComponent as Officelite } from "../assets/logos/officelite.svg";
import { ReactComponent as Pod } from "../assets/logos/pod.svg";
import { ReactComponent as Pomodoro } from "../assets/logos/pomodoro.svg";
import { ReactComponent as Typemaster } from "../assets/logos/typemaster.svg";
import { ReactComponent as Vector } from "../assets/logos/vector.svg";

function getLogo(id) {
	const logos = [
		Scoot,
		Blogr,
		Vector,
		Officelite,
		Pomodoro,
		Coffeeroasters,
		Mastercraft,
		Crowdfund,
		Creative,
		Typemaster,
		Blogr,
		Pod,
		Maker,
		Crowdfund,
		Coffeeroasters,
	];

	var selecedtLogo = logos[id];

	return selecedtLogo;
}

export default getLogo;
