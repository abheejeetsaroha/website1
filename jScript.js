//load from local storage
//save ,update,delete
var database=[];
var productId=1;
var addProduct=document.getElementById("addProduct");

var listProduct=document.getElementById("listProduct");
var link=document.getElementById("link");

link.addEventListener("click",function(event){
	//listProduct.setAttribute("style","border-style:solid;border-width:2px; border-radius:20px;border-color:orange;");
	var dataheading=document.getElementById("1");
	
	dataheading.innerHTML="<br> List of Products";
	dataheading.setAttribute("style","font-size:20px;font-weight:bold;");
	createFields(0,-1);});

function loadDatabase(){
	
	var dataheading=document.getElementById("1");
	dataheading.innerHTML="<br> List of Products";
	dataheading.setAttribute("style","font-size:20px;font-weight:bold;");
	
database=getPro();
	for(var i=0;i<database.length;i++,productId++)
	addingToList(database[i]);
	if(i!=0)
		productId=database[database.length-1].id+1;
}	
window.onload=loadDatabase();
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
function addingToDatabase(){
var pro=new Object();
	pro.id=productId;
	pro.name=document.getElementById("txtPName").value;
	pro.desc=document.getElementById("txtPDesc").value;
	pro.price=document.getElementById("txtPPrice").value;
	pro.qty=document.getElementById("txtPQty").value;
	database.push(pro);
	addingToList(pro);
	deletePanel();
	productId++;
}
function deletePanel(){
	var nodes=addProduct.childNodes;
	for(var i=0;nodes.length > 0;)
	{
		addProduct.removeChild(nodes[i]);
	}
}
var trigger=0,prev;
function storePro(database) { localStorage.database = JSON.stringify(database); }
function getPro() { if (!localStorage.database) { // default to empty array 
localStorage.database = JSON.stringify([]); } 
return JSON.parse(localStorage.database); }
function addingToList(pro){
	var proToList=document.createElement("div");
	proToList.setAttribute("id",pro.id);
	proToList.innerHTML+="&nbsp &nbsp &nbsp &nbsp";
	var proName=document.createElement("label");
	proName.setAttribute("style","font-weight:bold;");
	proName.innerHTML=pro.name;
	proToList.appendChild(proName);
	proToList.innerHTML+="&nbsp &nbsp &nbsp &nbsp";
	var lblDesc=document.createElement("label");
	lblDesc.setAttribute("style","font-weight:bold;");
	lblDesc.innerHTML=pro.desc;
	proToList.appendChild(lblDesc);
	proToList.innerHTML+="&nbsp &nbsp &nbsp &nbsp";
	var lblPrice=document.createElement("label");
	lblPrice.setAttribute("style","font-weight:bold;");
	lblPrice.innerHTML=pro.price;
	proToList.appendChild(lblPrice);
	proToList.innerHTML+="&nbsp &nbsp &nbsp &nbsp";
	var lblQty=document.createElement("label");
	lblQty.setAttribute("style","font-weight:bold;");
	lblQty.innerHTML=pro.qty;
	proToList.appendChild(lblQty);
	proToList.innerHTML+="&nbsp &nbsp &nbsp &nbsp";
	var editButton=document.createElement("button");
	editButton.innerHTML="Edit";
	proToList.appendChild(editButton);
	var delButton=document.createElement("button");
	delButton.innerHTML="Delete";
	proToList.appendChild(delButton);
	storePro(database);
	editButton.addEventListener("click",function(event){
		deletePanel();
		var parNode=event.target.parentNode;
		var reqIndex=getIndex(parseInt(parNode.id));
		createFields(1,reqIndex);
		parNode.parentNode.removeChild(parNode);
		trigger=1;
		
	});
	delButton.addEventListener("click",function(event){
		var parNode=event.target.parentNode;
		var reqIndex=getIndex(parseInt(parNode.id));
		deleteFromDatabase(reqIndex);
		storePro(database);
		parNode.parentNode.removeChild(parNode);
	});
	listProduct.appendChild(proToList);
	insertGap(proToList,2);
	unhideLink(link);
}

function deleteFromDatabase(index){
	database.splice(index,1);
	console.log(database);
}
function getIndex(id){
	for(var i=0;i<database.length;i++)
		if(id==database[i].id)
			return i;
}
function validateData(){
	var name=document.getElementById("txtPName").value;
	var desc=document.getElementById("txtPDesc").value;
	var price=document.getElementById("txtPPrice").value;
	var qty=document.getElementById("txtPQty").value;
	if(name==null || name=="" ||desc==null || desc=="" || price==""||qty=="")
	{alert("field can't be Empty");
	return false;
	}
	return true;
}
function createFields(flag,i){
	hideLink(link);
	var lblProduct=document.createElement("label");
	if(flag)
		lblProduct.innerHTML="Update Product Details:";
	else
	lblProduct.innerHTML="Enter Product Details:";
	lblProduct.setAttribute("style","font-weight:bold");
	addProduct.appendChild(lblProduct);
	insertGap(addProduct,2);
	var txtPName=document.createElement("input");
	txtPName.setAttribute("type","Text");
	txtPName.setAttribute("id","txtPName");
	txtPName.setAttribute("type","required");
	txtPName.setAttribute("style","width:250px");
	if(flag){
	txtPName.setAttribute("value",database[i].name);
	}else
	txtPName.setAttribute("placeholder","Enter the product name");
	addProduct.appendChild(txtPName);
	insertGap(addProduct,2);
	var txtPDesc=document.createElement("textarea");
	txtPDesc.setAttribute("id","txtPDesc");
	if(flag)
		txtPDesc.innerHTML=database[i].desc;
	else
	txtPDesc.setAttribute("placeholder","Enter Product Description");
	txtPDesc.setAttribute("style","height:50px;width:250px");
	addProduct.appendChild(txtPDesc);
	insertGap(addProduct,2);
	var txtPPrice=document.createElement("input");
	txtPPrice.setAttribute("type","number");
	txtPPrice.setAttribute("id","txtPPrice");
	txtPPrice.setAttribute("min","0");
	if(flag)
	txtPPrice.setAttribute("value",database[i].price);
	else
	txtPPrice.setAttribute("placeholder","Enter price of above mentioned Product");
	txtPPrice.setAttribute("style","width:250px");
	addProduct.appendChild(txtPPrice);
	insertGap(addProduct,2);
	var txtPQty=document.createElement("input");
	txtPQty.setAttribute("type","number");
	txtPQty.setAttribute("id","txtPQty");
	txtPQty.setAttribute("min","0");
	if(flag)
		txtPQty.setAttribute("value",database[i].qty);
	else
	txtPQty.setAttribute("placeholder","Enter Quantity");
	txtPQty.setAttribute("style","width:250px");
	addProduct.appendChild(txtPQty);
	insertGap(addProduct,2);
	var btn=document.createElement("button");
	if(flag==1)
	btn.innerHTML="Edit Details";
	else
	btn.innerHTML="Add Product";
	addProduct.appendChild(btn);
	btn.addEventListener("click",function(event){
		trigger =0;
	var t=validateData();
	if(t)
	if(flag)
	{
		database.splice(i,1);
		addingToDatabase();
	}
	else	
	addingToDatabase();
	});
	
}