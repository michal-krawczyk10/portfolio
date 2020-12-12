import "../scss/main.scss";
import { registerSW } from "./pwa.js";
registerSW();


const fblink = document.querySelector(".contact__links--fb--js");

fblink.onclick = () => {
		fblink.setAttribute(
			"href",
			"https://www.facebook.com/pizmakkun");
};
