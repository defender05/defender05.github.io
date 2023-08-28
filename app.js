let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

var output_data;

let post_type = document.getElementById("post_type");
let task_date = document.getElementById("task_date");
let task_time = document.getElementById("task_time");
let channel_list = document.getElementById("channel_list");

let submit_btn = document.getElementById("submit_btn");

submit_btn.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Данные формы сохранены");
		// data_string = "";
		form_data = [post_type.value, task_date.value, task_time.value, channel_list.value];
		// form_data.array.forEach(element => {
		// 	data_string += element.toString() + "\n";
		// });
		output_data = "form_data";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(output_data);
});


// let usercard = document.getElementById("usercard");

// let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;

// usercard.appendChild(p);
