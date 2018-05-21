var email=document.getElementById("email");
var mail=0;
var pass=document.getElementById("pass");
var btn=document.getElementById("btn");
window.onload=function(){
	user=getUser();
//	for(var ui=0;ui<user.length;ui++){	console.log(user[ui].email+" "+user[ui].login); }
}
var user=[];

var obj = JSON.parse(sessionStorage.getItem("user"));
//if(obj==null) alert("something!");
		console.log(obj);
function getUser() { if (!localStorage.user) { 
localStorage.user = JSON.stringify([]); } 
return JSON.parse(localStorage.user); }
btn.addEventListener("click",function(){
	 var x =email.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+5 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
	else{
		var f=-1; var ui;
		for( ui=0;ui<user.length;ui++){ //console.log(user[ui].email+" "+user[ui].pass+" "+email.value+" "+pass.value);
		
		
			//console.log(user[ui].email.indexOf(email.value)+" "+user[ui].pass.indexOf(pass.value));
		if((user[ui].email.indexOf(email.value)>-1 )&& (user[ui].pass.indexOf(pass.value) >-1 ) )
		{f=0;
			if((user[ui].email.indexOf("kirito@dispostable.com")>-1 )&& (user[ui].pass.indexOf("kirito") >-1 ) )
				f=1;
			break;
		}
		
		}
	
	
	if(f==1 || f==0)
	{
		
		//window.sessionStorage.setItem('user', JSON.stringify(mail));
		
		mail=user[ui].email;
		//console.log(mail);
		sessionStorage.setItem('user', JSON.stringify(mail));
		
		alert("WOOOO! you are logged in");
		f==1?window.location.href="dashboard.html":window.location.href="index.html";
	}
	else
		alert("Entered combination of password/email is incorrect");
	}
});