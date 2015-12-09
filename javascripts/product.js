// JavaScript Document


var showbar=document.getElementById("showbar");
var divs=showbar.getElementsByTagName("div");
for(var i=0;i<divs.length;i++){
	divs[i].onmouseover=function(){
		var color=randomcolor();
		this.style.backgroundColor=color;
	}
}
function randomcolor()
{

var colorvalue=["0","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
colorprefix="#";
var index;
for(var j=0;j< 6;j++){
index=Math.round(Math.random()*14);//Math.random会提供给我们一个[0,1)之间的随机数
colorprefix+=colorvalue[index];
}
return colorprefix;
}