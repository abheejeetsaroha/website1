var user=[];
var userslist=document.getElementById("userslist");
function getUser() { if (!localStorage.user) { 
localStorage.user = JSON.stringify([]); } 
return JSON.parse(localStorage.user); }

function storeUser(user) { localStorage.user = JSON.stringify(user); }

function fetchData(){
	user=getUser();
	console.log(user);
	createList();
}

window.onload=fetchData();
function createList(){
	var table=document.createElement("table");
	table.setAttribute("style","border:1px solid black;width:60%;text-align:center; margin:auto; ");
	table.setAttribute("id","table");
	 
	var row=document.createElement("tr");
	row.setAttribute("id","label");
	
	var cn=document.createElement("th");
	var tn=document.createTextNode("First Name");
	cn.appendChild(tn);
	row.appendChild(cn);
	
	var cd=document.createElement("th");
	var td=document.createTextNode("Last Name");
	cd.appendChild(td);
	row.appendChild(cd);
	
	var cp=document.createElement("th");
	var tp=document.createTextNode("Email");
	cp.appendChild(tp);
	row.appendChild(cp);
	
	table.appendChild(row);
	userslist.appendChild(table);
	
	for(var i=0;i<user.length;i++)
	{
		var row1=document.createElement("tr");
		row1.setAttribute("id",user[i].email);
	var cn=document.createElement("td");
	var tn=document.createTextNode(user[i].fname);
	cn.appendChild(tn);
	row1.appendChild(cn);
	
	var cd=document.createElement("td");
	var td=document.createTextNode(user[i].lname);
	cd.appendChild(td);
	row1.appendChild(cd);
	
	var cp=document.createElement("td");
	var tp=document.createTextNode(user[i].email);
	cp.appendChild(tp);
	row1.appendChild(cp);
	
	var tbu=document.createElement("td");
	var cbtn=document.createElement("button");
	cbtn.innerHTML="Remove User";
	tbu.appendChild(cbtn);
	row1.appendChild(tbu);
		
	table.appendChild(row1);
	
	cbtn.addEventListener("click",function(event){
		var parNode=event.target.parentNode.parentNode;
		var index=getIndex(parNode.id);
		user.splice(index,1);
		storeUser(user);
		parNode.parentNode.removeChild(parNode);
		
	});
	}
}
	
function getIndex(id){
	for(var i=0;i<user.length;i++)
		if(id==user[i].email)
			return i;
}
