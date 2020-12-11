import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const fblink = document.querySelector(".contact__links--fb--js");

fblink.setAttribute(
			"href",
			"https://m.facebook.com/messages/compose?ids=pizmakkun"
		);

fblink.onclick = () => {
	if (true) {
		fblink.setAttribute(
			"href",
			"https://m.facebook.com/messages/compose?ids=pizmakkun"
		);
	} else {
		fblink.setAttribute(
	 		"href",
			"https://m.facebook.com/messages/compose?ids=pizmakkun"
		 );
  }
};
