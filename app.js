let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let task_form = document.getElementById("task_form");
let post_type = document.getElementById("post_type");
let submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Данные формы сохранены");
		item = post_type.value;
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


// let usercard = document.getElementById("usercard");

// let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;

// usercard.appendChild(p);
