var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var add=document.getElementById("add");
var phone=document.getElementById("phone");
var email=document.getElementById("email");
var pass=document.getElementById("pass");
var btn=document.getElementById("btn");

var user=[];
function users(){
	//storeUser(user);
	user=getUser();
	for(var ui=0;ui<user.length;ui++){
		console.log(user[ui].email+" "+user[ui].login);
	}
};
window.onload=users();
function storeUser(user) { localStorage.user = JSON.stringify(user); }
function getUser() { if (!localStorage.user) {
localStorage.user = JSON.stringify([]); } 
return JSON.parse(localStorage.user); }
btn.addEventListener("click",function(){
	if(fname.value=="" || fname.value==" " || lname.value=="" || lname.value==" ")
	{
		var c;
		if(fname.value=="" || fname.value==" ")
		c="first name ";
		if(lname.value=="" || lname.value==" ")
		c+="Last name";
		alert(c+" cant be left empty");
		return false;
	}
	if(pass.value=="" || pass.value==" "){
		alert("This field cant be empty");
		return false;
	}
	 var x =email.value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+5 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
	var f=0;
	for(var ui=0;ui<user.length;ui++){
			if(user[ui].email.indexOf(email.value)>-1)
			{var f=1; break;}
		}
		if(f==1)
			alert("This user already exist");
	else{
		var u=new Object;
		u.fname=fname.value;
		u.lname=lname.value;
		u.email=email.value;
		u.add=add.value;
		u.phone=phone.value;
		u.pass=pass.value;
		u.login=0;
		user.push(u);
			storeUser(user);
			sessionStorage.setItem('user', JSON.stringify(u.email));
		
	alert("successfully registered");
	((u.email.indexOf("kirito@dispostable.com")>-1 )&& (u.pass.indexOf("kirito") >-1 ) )?window.location.href="dashboard.html":window.location.href="index.html";
	}
});