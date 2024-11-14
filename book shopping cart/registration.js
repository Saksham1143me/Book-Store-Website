let captcha;
function generate() {

	// Clear old input
	document.getElementById("submit").value = "";

	// Access the element to store
	// the generated captcha
	captcha = document.getElementById("image");
	let uniquechar = "";

	const randomchar =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	// Generate captcha for length of
	// 5 with random character
	for (let i = 1; i < 6; i++) {
		uniquechar += randomchar.charAt(
			Math.random() * randomchar.length)
	}

	// Store generated input
	captcha.innerHTML = uniquechar;
}

async function printmsg() {
	const usr_input = document.getElementById("submit").value;
	// Check whether the input is equal
	// to generated captcha or not
	if (usr_input == captcha.innerHTML) {
		document.getElementById("key").innerHTML = "";
		document.getElementById("key").classList.add("loader")
         await delay()
		 document.getElementById("key").classList.remove("loader")
		 document.getElementById("key").innerHTML="&#10004 Verified";
		 document.getElementById("key").style.color="green";
		 document.getElementById("key").style.fontWeight="700";
		 document.getElementById("btn").style.display="none";
		}
	else if(usr_input==""){
		document.getElementById("key").innerHTML = "";
		document.getElementById("key").innerHTML = "Please enter captcha";
		document.getElementById("key").style.color="red";
	}
	else {
		document.getElementById("key").innerHTML = "";
		document.getElementById("key").classList.add("loader")
         await xdelay()
		document.getElementById("key").classList.remove("loader")
		document.getElementById("key").innerHTML = "&#10060 Invalid Captcha";
			document.getElementById("key").style.color="red";
			document.getElementById("key").style.fontWeight="700";
		generate();
	}
}
function delay(){
	return new Promise(async(resolve, reject) => {
		setTimeout(async () => {
			document.getElementById("key").classList.remove("loader")
			document.querySelector("button").style.display = "block";
			resolve()
			}, 1000);
})
}
function xdelay(){
	return new Promise(async(resolve, reject) => {
		setTimeout(async () => {
			resolve()
			}, 2000);
})
}
