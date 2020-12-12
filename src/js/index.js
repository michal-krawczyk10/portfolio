import "../scss/main.scss";
import { registerSW } from "./pwa.js";
registerSW();

const fblink = document.querySelector(".contact__links--fb--js");

fblink.onclick = () => {
	fblink.setAttribute("href", "https://www.facebook.com/pizmakkun");
};

fetch("https://api.github.com/users/michal-krawczyk10/repos")
	.then((resp) => resp.json())
	.then((resp) => {
		for (let repo of resp) {
			console.log(repo);
		}
	})
	.catch((error) => {
		console.log(error);
	});
