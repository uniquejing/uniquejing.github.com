
var headermenu=document.getElementById("header_menu");
var lis=headermenu.getElementsByTagName("li");
var index;
for(i=0;i<lis.length;i++){
	lis[i].index=i;
}
for(i=0;i<lis.length;i++){
	
	lis[i].onclick=function(){
		
		for(i=0;i<lis.length;i++){
			lis[i].className="";
			
		}
		/*var flag=this.index;
		lis[flag].className="active";
		this.location.href="index.html";*/
		if(this.className!=="active"){
			this.className="active";	
		}
		
	}
}
