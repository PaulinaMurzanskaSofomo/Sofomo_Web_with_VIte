import backend from "../../icons/outsourcepageIcons/Backend.svg";
import fronend from "../../icons/outsourcepageIcons/Frontend i.svg";
import mobile from "../../icons/outsourcepageIcons/Mobile.svg";
import salesforce from "../../icons/outsourcepageIcons/Salesforce.svg";
import cloud from "../../icons/outsourcepageIcons/AWS Cloud.svg";
import magento from "../../icons/outsourcepageIcons/Magento.svg";

export const spanTop = `OUR DEVELOPERS`;
export const textBold = `With our skillset,
We’ve got you covered`;
export const devList = [
	{
		type: `Backend`,
		role: [`Ruby`, `Python`, `PHP`, `Node.js`, `Java`, `.Net`, `Golang`],
		icon: `${backend}`,
	},
	{
		type: `Frontend`,
		role: [`React`, `Angular`, `Vue.js`],
		icon: `${fronend}`,
	},
	{
		type: `Mobile`,
		role: [`iOs`, `Android`],
		icon: `${mobile}`,
	},
	{
		type: `Cloud/ AWS`,
		role: [`AWS Engineers`],
		icon: `${cloud}`,
	},
	{
		type: `Magento`,
		role: [`Magento`],
		icon: `${magento}`,
	},
];
