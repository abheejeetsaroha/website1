var cart=[];
var list=[];
var total=document.getElementById("priceTotal");
var  mycart=document.getElementById("mycart");

function storeCart(cart) { localStorage.cart = JSON.stringify(cart); }

var obj = JSON.parse(sessionStorage.getItem("user"));




function getPro() { if (!localStorage.database) { 
localStorage.database = JSON.stringify([]); } 
return JSON.parse(localStorage.database); 
}


function getCart() { if (!localStorage.cart) {
localStorage.cart = JSON.stringify([]); }
return JSON.parse(localStorage.cart); }
var count=0;
function fetchData(){
	//storeCart(cart);
	cart=getCart();
	list=getPro();
	createList();
	
	for(var i=0;i<cart.length;i++)
	if(cart[i].email==obj) count++;
	document.getElementById("heading").innerHTML+="("+count+")";
}

window.onload=fetchData();

function logout(){
	sessionStorage.removeItem("user");
	window.location.reload();


	}
	
function createList(){
	for(var i=0;i<cart.length;i++){
		console.log(cart[i].name+" "+cart[i].email);
	}
	if(obj!=null)
	{
	
	var user=document.getElementById("usr");
	user.setAttribute("style","visibility:visible;");
	user.innerHTML="LogOut, "+obj+" !";
	user.setAttribute("onclick","logout()");
	user.setAttribute("style","float:right;");

	}
	var t=parseInt(0);
	var f=0;
	for(var i=0;i<cart.length;i++)
	{
		
		if(cart[i].email==obj){
			f=1;
		var div=document.createElement("div");
			div.setAttribute("id",cart[i].id);
	
	
	t=t+(parseInt(cart[i].price)*parseInt(cart[i].qty));
	total.innerHTML=" TOTAL PAYABLE AMOUNT: "+"<b>"+t+"</B>";
		div.innerHTML="<B>"+ cart[i].name +"</B><br>"+cart[i].desc+"<br>"+"&#8377;"+cart[i].price+"<br>";
		div.classList.add("pro");
		var plus=document.createElement("button");
		plus.setAttribute("style","margin:5px; border:1px; border-radius:100px;");
		plus.innerHTML="+";
		div.appendChild(plus);
		var inp=document.createElement("input");
		inp.classList.add("inpUpdate");
		inp.setAttribute("value",cart[i].qty);
		inp.setAttribute("id","i"+cart[i].id);
		
		div.appendChild(inp);
		var minus=document.createElement("button");
		minus.setAttribute("style","margin:5px; border:1px; border-radius:100px;");
		minus.innerHTML="-";
		div.appendChild(minus);
		
		
		var rembtn=document.createElement("button");
		rembtn.setAttribute("style","margin:10px; margin-left:0;");
		rembtn.innerHTML="Remove";
		div.appendChild(rembtn);
		mycart.appendChild(div);
		plus.addEventListener("click",function(event){
			var parNode=event.target.parentNode;
		var cartIndex=getIndex(parseInt(parNode.id));
		var listIndex=getiList(parseInt(parNode.id));
			if(parseInt(cart[cartIndex].qty)+1 <= list[listIndex].qty ){
				var inpVal=document.getElementById("i"+parNode.id);
				cart[cartIndex].qty++;
				t=t+(parseInt(cart[cartIndex].price));
	total.innerHTML=" TOTAL PAYABLE AMOUNT: "+"<b>"+t+"</B>";
	makeOrderBtn();
				storeCart(cart);
				inpVal.setAttribute("value",cart[cartIndex].qty);
				
			}
			else
				alert("we have only:"+list[listIndex].qty+" pcs left");
		});
		minus.addEventListener("click",function(event){
			var parNode=event.target.parentNode;
		var cartIndex=getIndex(parseInt(parNode.id));
		var inpVal=document.getElementById("i"+parNode.id);
				cart[cartIndex].qty--;
								t=t-(parseInt(cart[cartIndex].price));
	total.innerHTML=" TOTAL PAYABLE AMOUNT: "+"<b>"+t+"</B>";
	makeOrderBtn();
				if(cart[cartIndex].qty==0)
				{deleteFromDatabase(cartIndex);
		storeCart(cart);
		parNode.parentNode.removeChild(parNode);
		count--;
		if(count==0)
			emptyCart();
		
		document.getElementById("heading").innerHTML="My Cart("+count+")";
		makeOrderBtn();
		}
		else
		{	storeCart(cart);
				inpVal.setAttribute("value",cart[cartIndex].qty);
		}	
			});
		
		
		rembtn.addEventListener("click",function(event){
		var parNode=event.target.parentNode;
		var reqIndex=getIndex(parseInt(parNode.id));
		
		t=t-(parseInt(cart[reqIndex].price)*parseInt(cart[reqIndex].qty));
		total.innerHTML=" TOTAL PAYABLE AMOUNT: "+"<b>"+t+"</B>";
		deleteFromDatabase(reqIndex);
		storeCart(cart);
		count--;
		document.getElementById("heading").innerHTML="My Cart("+count+")";
		makeOrderBtn();
		if(count==0)
			emptyCart();
		parNode.parentNode.removeChild(parNode);
	});
		}
	}
	if(f==0)
	emptyCart();
	else
	makeOrderBtn();
}
document.getElementById("place").addEventListener("click",function(){
	alert("Your Order has been placed!");
});
function makeOrderBtn(){
	total.appendChild(document.createElement("br"));
		var placeOrderbtn=document.createElement("button");
	placeOrderbtn.innerHTML="Place Your Order Here";
	placeOrderbtn.setAttribute("id","place");
	total.appendChild(placeOrderbtn);
}
function emptyCart(){
	
		mycart.innerHTML="<B> Your CART is Empty now !! Shop here:";
		total.setAttribute("style","visibility:hidden");
}
function deleteFromDatabase(index){
	cart.splice(index,1);
	console.log(cart);
}
function getiList(id){
	for(var i=0;i<list.length;i++)
		if(id==list[i].id )
			return i;
}

function getIndex(id){
	for(var i=0;i<cart.length;i++)
		if(id==cart[i].id && cart[i].email==obj)
			return i;
}
