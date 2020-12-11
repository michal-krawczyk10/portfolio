import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const fblink = document.querySelector(".contact__links--fb--js");

fblink.onclick = () => {
		fblink.setAttribute(
			"href",
			"https://www.facebook.com/pizmakkun");
};
