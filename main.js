function buttonClick(){
	one.value = one.value.replace(/\s+/g, "");
	
	
	if (one.value == "if(mousePressed)"){
		text1.innerHTML = "正解";
	}else{
		text1.innerHTML = "不正解　解答：if(mousePressed)";
	}

}

//解答欄１
var textBox1 = document.getElementById("one");
const text1 = document.getElementById("text1");

let checkButton = document.getElementById("btn");
checkButton.addEventListener("click", buttonClick);