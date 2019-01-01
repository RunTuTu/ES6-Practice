"use strict";

var a = document.getElementById("title");
var dianji = a.getElementsByTagName("li");
var neirong = document.getElementsByClassName("my_div");

var _loop = function _loop(i) {
	dianji[i].onclick = function () {
		for (var _i = 0; _i < dianji.length; _i++) {
			dianji[_i].className = "";
			neirong[_i].style.display = "none";
		}
		dianji[i].className = "cur";
		neirong[i].style.display = "block";
	};
};

for (var i = 0; i < dianji.length; i++) {
	_loop(i);
}