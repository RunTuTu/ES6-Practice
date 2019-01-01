let a = document.getElementById("title");
	let dianji = a.getElementsByTagName("li");
	let neirong=document.getElementsByClassName("my_div");
	for (let i = 0;i<dianji.length;i++) {		
		dianji[i].onclick = function(){
			for (let i = 0;i<dianji.length;i++) {
				dianji[i].className="";
				neirong[i].style.display="none";
			}
			dianji[i].className="cur";
			neirong[i].style.display="block";
			
		}
	}