"use strict";

const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const wrong = document.querySelector(".wrong");
const password = document.querySelector(".password");
const wrongPassword = document.querySelector(".wrongPassword");
let clickCount = 0;

//SUBMIT BUTTON
const click = function () {
	clickCount++;
	const value = input.value;
	let pw = password.value;
	if (isNaN(value) && pw.length >= 4) {
		wrong.textContent = "You be correct person🤙";
		wrong.style.color = "green";
		wrongPassword.textContent = "Correct password🤙";
		wrongPassword.style.color = "green";
		window.location.href = "https://shakuurr.github.io/Dream-hotel/";
	} else if (isNaN(value) && pw.length < 4) {
		wrong.textContent = "You be correct person🤙";
		wrong.style.color = "green";
		wrongPassword.textContent = "Password must be more than 4 character";
		wrongPassword.style.color = "red";
		if (clickCount === 2) {
			// check if clickCount is 2
			window.location.href = "https://shakuurr.github.io/error404/";
		}
	} else if (!isNaN(value) && pw.length > 4) {
		wrong.textContent = "Username must have atleast a letter";
		wrong.style.color = "red";
		if (clickCount === 2) {
			// check if clickCount is 2
			window.location.href = "https://shakuurr.github.io/error404/";
		}
	} else if (!value && pw.length > 4) {
		wrong.textContent = "Name cannot be blank, you be hacksultan?😷";
		wrong.style.color = "red";
		if (clickCount === 2) {
			// check if clickCount is 2
			window.location.href = "https://shakuurr.github.io/error404/";
		}
	} else {
		wrong.textContent = "Abeg, enter correct name😏";
		wrongPassword.textContent = "Password must be more than 4 character";
		if (clickCount === 2) {
			// check if clickCount is 2
			window.location.href = "https://shakuurr.github.io/error404/";
		}
	}
	if (!value && !pw) {
		wrong.textContent = "Name cannot be blank, you be hacksultan?😷";
		wrong.style.color = "red";
		wrongPassword.textContent = "Abeg, input password!😌";
		wrongPassword.style.color = "red";
		if (clickCount === 2) {
			// check if clickCount is 2
			window.location.href = "https://shakuurr.github.io/error404/";
		}
	}
};
//ENTER NAME
const type = function () {
	const value2 = input.value;
	if (isNaN(value2)) {
		input.style.border = "2px solid green";
		wrong.textContent = "Excellent! Keep going...";
		wrong.style.color = "green";
	} else {
		input.style.border = "2px solid red";
		wrong.textContent = "Username must have atleast a letter";
		wrong.style.color = "red";
	}
};

//ENTER PASSWORD
const passwordFunction = function () {
	let pw = password.value;
	if (pw.length < 4) {
		password.style.border = "2px solid red";
		wrongPassword.textContent = "Password must be more than 4 character";
		wrongPassword.style.color = "red";
	} else {
		password.style.border = "2px solid green";
		wrongPassword.textContent = "";
	}
};

submit.addEventListener("click", click);
input.addEventListener("input", type);
password.addEventListener("input", passwordFunction);
