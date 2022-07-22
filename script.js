let inputs = document.querySelectorAll(".input"),
	form = document.querySelector("#form"),
	firstname_title = document.querySelector(".firstName");
let lastname_title = document.querySelector(".lastName");
inputs.forEach((input) => {
	input.addEventListener("focus", (e) => {
		e.preventDefault();

		input.classList.add("active");
	});
	input.addEventListener("blur", (e) => {
		e.preventDefault();

		if (input.value == "") {
			input.classList.remove("active");
		} else {
			input.classList.add("active");
		}
	});
});

let firstName = document.querySelector(".firstname_input"),
	lastName = document.querySelector(".lastname_input"),
	mark = `<i class="fa-solid fa-circle-exclamation"></i>`;

// check name
function checkEmptyName() {
	let note = document.querySelector(".name_note");

	note.classList.add("active");

	if (firstName.value.trim() == "" && lastName.value.trim() == "") {
		note.innerHTML = `${mark}
        <span>Enter first and last names</span>`;
		firstName.classList.add("active");
		firstname_title.classList.add("active");
		firstName.style.outline = "2px solid #d93025";
		lastName.style.outline = "1px solid #d93025";
		password1.style.outline = "1px solid #d93025";
		//
		/*  focus on firstName input when value is empty */
		firstName.addEventListener("focus", () => {
			firstName.style.outline = "2px solid #d93025";
			firstname_title.classList.add("active");
		});

		/*  focus on LastName input when value is empty */
		lastName.addEventListener("focus", () => {
			lastName.style.outline = "2px solid #d93025";
			lastname_title.classList.add("active");
		});
		/* lost focus from LastName */
		lastName.addEventListener("blur", () => {
			lastName.style.outline = "1px solid #d93025";
			lastname_title.classList.remove("active");
		});
		/* click outside input of firstName when it's empty */
		document.addEventListener("click", (e) => {
			if (e.target !== firstName) {
				firstName.style.outline = "1px solid #d93025";
				firstname_title.classList.remove("active");
				firstName.classList.remove("active");
				if (firstName.value.trim()) {
					firstName.classList.add("active");
					firstname_title.classList.add("active");
				}
			}
		});
	} else if (firstName.value.trim() == "") {
		note.innerHTML = `${mark} <span>Enter first name</span>`;
		firstname_title.classList.add("active");
		firstName.style.outline = "2px solid #d93025";
	} else if (lastName.value.trim() == "") {
		note.innerHTML = `${mark} <span>Enter last name</span>`;
		lastName.style.outline = "2px solid #d93025";
		lastName.classList.add("active");
		lastname_title.classList.add("active");

		document.addEventListener("click", (e) => {
			if (e.target !== lastName) {
				lastname_title.classList.remove("active");
				lastName.classList.remove("active");
				lastName.style.outline = "1px solid #d93025 ";
				if (lastName.value.trim()) {
					lastName.classList.add("active");
				}
			}
		});
	} else {
		note.innerHTML = "";
		firstName.style.outline = "";
		lastName.style.outline = "";
		lastname_title.classList.remove("active");
		firstname_title.classList.remove("active");
	}
}
// Check input value
function checkValueName() {
	if (firstName.value.trim()) {
		firstName.style.outline = "";

		firstname_title.classList.remove("active");
		document.addEventListener("click", (e) => {
			e.stopPropagation();
			if (e.target !== firstName) {
				firstName.style.outline = "";
				firstname_title.classList.remove("active");
			}
		});

		firstName.addEventListener("focus", () => {
			firstName.style.outline = "";
			firstname_title.classList.remove("active");
		});
		firstName.addEventListener("blur", () => {
			firstName.style.outline = "";
		});
	}
	if (lastName.value.trim()) {
		lastName.style.outline = "";
		lastname_title.classList.remove("active");

		firstName.classList.add("active");
		lastName.addEventListener("focus", () => {
			lastName.style.outline = "";
			firstName.style.outline = "";
			lastname_title.classList.remove("active");
		});
		lastName.addEventListener("blur", () => {
			lastName.style.outline = "";
			firstName.style.outline = "";
		});
		document.addEventListener("click", (e) => {
			e.stopPropagation();
			if (e.target !== lastName) {
				lastName.style.outline = "";
				lastname_title.classList.remove("active");
			}
		});
	}
}
let username = document.querySelector(".username_input ");

// check userName
function checkUsername() {
	let note = document.querySelector(".username_note");
	let usernameValue = username.value.trim();
	let title = document.querySelector(".username");
	let regex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let text = "";

	if (usernameValue == "") {
		note.classList.add("active");
		note.innerHTML = `${mark} <span>Choose a gmail address.</span>`;
		username.style.outline = "1px solid #d93025";
		username.addEventListener("focus", () => {
			username.style.outline = "2px solid #d93025";
			title.classList.add("active");
		});
		username.addEventListener("blur", () => {
			title.classList.remove("active");
		});
	} else if (
		usernameValue.length > 0 &&
		usernameValue.length < 6 &&
		usernameValue.length <= 30
	) {
		note.classList.add("active");
		username.classList.add("active");
		username.style.outline = "2px solid #d93025";
		title.classList.add("active");
		note.innerHTML = `${mark} 

        
        <div class="containerNote">
 
        <span>Sorry, your username must be between 6 and 30 characters</span>
        <span>long</span>
        </div>  `;
	} else {
		note.classList.add("active");
		username.classList.add("active");
		title.classList.remove("active");
		note.innerHTML = `You can use
        letters, number &
        periods`;
		username.style.outline = "";
		username.addEventListener("focus", () => {
			username.style.outline = "";
			title.classList.remove("active");
		});
		username.addEventListener("blur", () => {
			username.style.outline = "";
		});
		document.addEventListener("click", (e) => {
			e.stopPropagation();
			if (e.target !== lastName) {
				username.style.outline = "";
				title.classList.remove("active");
			}
		});
	}

	if (usernameValue == "" && lastName.value.trim()) {
		username.classList.add("active");
		username.style.outline = "2px solid #d93025";
		title.classList.add("active");
		document.addEventListener("click", (e) => {
			e.stopPropagation();
			if (e.target !== username) {
				username.classList.remove("active");
				title.classList.remove("active");
				// username.style.outline = "1px solid #d93025";
				if (username.value.trim()) {
					username.classList.add("active");
					username.style.outline = "";
				}
			}
		});
	}
}
let password1 = document.getElementById("password1_input");
let password2 = document.getElementById("password2_input");

// Check password
function checkPassword() {
	let note = document.querySelector(".password_note");
	let title = document.getElementById("password1");
	let passwordValue1 = password1.value.trim();
	if (password1.value.trim() == "") {
		note.classList.add("active");
		password1.style.outline = "1px solid #d93025";
		note.innerHTML = `${mark} <span>Enter a password </span>`;

		password1.addEventListener("focus", () => {
			password1.style.outline = "2px solid #d93025";
		});
	} else if (passwordValue1.length < 8) {
		note.classList.add("active");
		note.innerHTML = `${mark} <span>Use 8 characters or more for your password </span>`;
	} else if (password1.value.trim() === password2.value.trim()) {
		note.classList.add("active");
		note.innerHTML = `${mark} <span>Enter a password </span>`;
	} else {
		password1.style.outline = "";
		note.innerHTML = `<div class="containerNote">
       
        <span>Use 8 or more characters with a mix of letters, numbers & </span>
        <span>symbols</span>
        </div>`;
	}

	if (
		password1.value.trim() == "" &&
		username.value.trim() &&
		username.value.length >= 6
	) {
		password1.classList.add("active");
		password1.style.outline = "2px solid #d93025";
		title.classList.add("active");

		document.addEventListener("click", (e) => {
			e.stopPropagation();
			if (e.target !== password1) {
				password1.style.outline = "1px solid #d93025";
				title.classList.remove("active");
				password1.classList.remove("active");
				if (password1.value.trim()) {
					password1.classList.add("active");
				}
			}
		});
	}
}
form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkEmptyName();
	checkValueName();
	checkUsername();
	checkPassword();
});
