var list=[];
var cart=[];
var pro=document.getElementById("availProduct");
var heading=document.getElementById("heading");
function storeCart(cart) { localStorage.cart = JSON.stringify(cart); }
var user = JSON.parse(sessionStorage.getItem("user"));
if(user!=null){
	var login=document.getElementById("login");
	var signup=document.getElementById("signup");
	login.innerHTML="Log Out!: "+user+" !";
	login.setAttribute("onclick","logout()");
	signup.setAttribute("style","visibility:hidden;");
	
}
function logout(){
	sessionStorage.removeItem("user");
	window.location.reload();
	/*login.innerHTML="Login";
	signup.setAttribute("style","visibility:visible;float:right; margin:0 10px 0 0;");
	login.setAttribute("onclick","window.location.href='login.html'");*/
}

function getCart() { if (!localStorage.cart) { 
localStorage.cart = JSON.stringify([]); } 
return JSON.parse(localStorage.cart); }


function getPro() { if (!localStorage.database) { 
localStorage.database = JSON.stringify([]); } 
return JSON.parse(localStorage.database); }
function fetchData(){
	list=getPro();
	//storeCart(cart);
	cart=getCart();
	for(var i=0;i<cart.length;i++) if(cart[i].email==user) console.log(cart[i].name);
		if(list.length<1)
			alert("No products are avaialble in shop");
	else	
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
	var tn=document.createTextNode("Name");
	cn.appendChild(tn);
	row.appendChild(cn);
	
	var cd=document.createElement("th");
	var td=document.createTextNode("Description");
	cd.appendChild(td);
	row.appendChild(cd);
	
	var cp=document.createElement("th");
	var tp=document.createTextNode("Price");
	cp.appendChild(tp);
	row.appendChild(cp);
	
	var cq=document.createElement("th");
	var tq=document.createTextNode("Quantity");
	cq.appendChild(tq);
	row.appendChild(cq);
	table.appendChild(row);
	pro.appendChild(table);
	
	for(var i=0;i<list.length;i++)
	{
		var row1=document.createElement("tr");
		row1.setAttribute("id",list[i].id);
	var cn=document.createElement("td");
	var tn=document.createTextNode(list[i].name);
	cn.appendChild(tn);
	row1.appendChild(cn);
	
	var cd=document.createElement("td");
	var td=document.createTextNode(list[i].desc);
	cd.appendChild(td);
	row1.appendChild(cd);
	
	var cp=document.createElement("td");
	var tp=document.createTextNode(list[i].price);
	cp.appendChild(tp);
	row1.appendChild(cp);
	
	var cq=document.createElement("td");
	var iq=document.createElement("input");
	iq.setAttribute("type","number");
	iq.setAttribute("min","1");
	iq.setAttribute("max",list[i].qty);
	cq.appendChild(iq);
	cq.style.width = '200px';
	row1.appendChild(cq);
	
	var tb=document.createElement("td");
	var viewbtn=document.createElement("button");
	viewbtn.innerHTML="View Product";
	tb.appendChild(viewbtn);
	row1.appendChild(tb);
	
	var f=1;
	for(var j=0;j<cart.length;j++)
		if( (cart[j].id==list[i].id) && (cart[j].email==user))
		{f=0; break;}
	
	var tbu=document.createElement("td");
	var cbtn=document.createElement("button");
	if(f)
	{
	
	cbtn.innerHTML="Add To Cart";
	tbu.appendChild(cbtn);
	}
	else{
	var a=document.createTextNode("added to cart");
	tbu.appendChild(a);
	}row1.appendChild(tbu);
		
	table.appendChild(row1);
	
	viewbtn.addEventListener("click",function(event){
		var parNode=event.target.parentNode.parentNode;
		var index=getIndex(parseInt(parNode.id));
		hideLink(pro); 
		proDetails(index);
	});
	cbtn.addEventListener("click",function(event){
		var parNode=event.target.parentNode.parentNode;
		var inp=parseInt(parNode.childNodes[3].firstChild.value);
		var index=getIndex(parseInt(parNode.id));
		if(inp <= parseInt(list[index].qty)){
		addToCart(index,parseInt(inp));
		parNode.childNodes[5].removeChild(parNode.childNodes[5].firstChild);
		var a=document.createTextNode("added to cart");
		parNode.childNodes[5].appendChild(a);
		}
		else
			alert("we have only "+list[index].qty +" in stock");
	});
	}
}

function addToCart(i,qty){
	var obj=new Object();
	obj.id=list[i].id;
	obj.name=list[i].name;
	obj.desc=list[i].desc;
	obj.price=list[i].price;
	obj.qty=qty;
	obj.subtotal=list[i].price*obj.qty;
	//console.log(obj.subtotal+"= "+list[i].price+" * "+ obj.qty);
	obj.email=user;
	console.log(obj.email);
	cart.push(obj);
		storeCart(cart);
	return;
	
};

function proDetails(i){
	heading.innerHTML="<hr> <br><br> Product Name: "+list[i].name + "<br><br>";
	heading.innerHTML+="Price: &#8377;"+list[i].price+ "<br><br>";
	if(list[i].qty>0)
	{
		if(list[i].qty==1)		
	heading.innerHTML+="In Stock: "+list[i].qty+ " pc. left  <br><br>";
	else
		heading.innerHTML+="In Stock: "+list[i].qty+ " pcs. left  <br><br>";
	}
	else
	heading.innerHTML+="Out of Stock: "+ "<br><br>";
	
	heading.innerHTML+="Product Description: "+list[i].desc + "<br><br>";
	heading.innerHTML+="<button onclick='myf()'> < Continue Shopping </button> ";
	
}
	function myf(){
		window.location.href="index.html";
	}
	
function getIndex(id){
	for(var i=0;i<list.length;i++)
		if(id==list[i].id)
			return i;
}
function hideLink(node){
	node.setAttribute("style","visibility:hidden");
}

function unhideLink(node){
	node.setAttribute("style","visibility:visible");
}

function insertGap(target,times){
for(var i=0;i<times;i++){
		var br=document.createElement("br");
		target.appendChild(br);
}
}