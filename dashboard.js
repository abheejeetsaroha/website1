var content=document.getElementById("content");
var loginpage=document.getElementById("loginpage");
var sum=0;var product=[];
var database=[];
function storeNames(database)
{
localStorage.database = JSON.stringify(database);
}
function getStoredNames()
{
if (!localStorage.database)
{
// default to empty array
localStorage.database = JSON.stringify([]);
}
return JSON.parse(localStorage.database);
}
function insertBreak(target_element)
{
	var br=document.createElement("BR")
	target_element.appendChild(br)
}

var btn=document.createElement('input');
					  btn.type="button";
					  btn.value="LOGOUT";insertBreak(loginpage);
			loginpage.appendChild(btn);btn.addEventListener("click",function(event){
				window.location.href = "sign up.html";
			});



function storeName(product)
{
localStorage.product = JSON.stringify(product);
}
function getStoredName()
{
if (!localStorage.product)
{
// default to empty array
localStorage.product = JSON.stringify([]);
}
return JSON.parse(localStorage.product);
}
			
		
		
function storing(result)
{
localStorage.result = JSON.stringify(result);
}
function getting()
{
if (!localStorage.result)
{
// default to empty array
localStorage.result = JSON.stringify([]);
}
return JSON.parse(localStorage.result);
}

var cart1=[];
  document.getElementById("parent-list").addEventListener("click",function(e) {
	  
	   if(e.target && e.target.nodeName == "LI"&&document.getElementById(e.target.id).innerHTML=="Orders"){
		   cart1=getting();
		   console.log(cart1.length);
		   while(content.firstChild){
				content.removeChild(content.firstChild);
			}
			document.getElementById("loginpage").innerHTML="You are currently on Admin Page.";
								  var btn=document.createElement('input');
					  btn.type="button";
					  btn.value="LOGOUT";insertBreak(loginpage);
			loginpage.appendChild(btn);btn.addEventListener("click",function(event){
				window.location.href = "sign up.html";
			});
				var heading=document.createElement('p');
											var ya=document.createTextNode("THIS IS LIST OF USERS WHO'VE ORDERED");heading.appendChild(ya);
											content.appendChild(ya);insertBreak(content);
										
										
										  var table = document.createElement('TABLE')
            var tableBody = document.createElement('TBODY')

            table.border = '4px'
			table.border.style='4px solid red';
            table.appendChild(tableBody);

            var heading = new Array();
            heading[0] = "User ID"
            heading[1] = "Product ID"
            heading[2] = "Date"
            heading[3] = "Order ID"
           
           
            
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);var i=0;
            for (i = 0; i < heading.length; i++) {
                var th = document.createElement('TH')
                th.width = '75';
                th.appendChild(document.createTextNode(heading[i]));
                tr.appendChild(th);

            }

            
         

            for (i = 0; i < cart1.length; i++) {
                var tr = document.createElement('TR');
                    var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(cart1[i].userid));
                    tr.appendChild(td)
					  var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(cart1[i].productid));
                    tr.appendChild(td)
					  var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(cart1[i].date));
                    tr.appendChild(td)
					  var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(cart1[i].odid));
                    tr.appendChild(td)
					
					
					
			tableBody.appendChild(tr);}content.appendChild(table);
			
			
			
			
			
		   
	   }
	  
	   
        if(e.target && e.target.nodeName == "LI"&&document.getElementById(e.target.id).innerHTML=="Home") {
            console.log(e.target.id + " was clicked  ");
			document.getElementById("loginpage").innerHTML="You are currently on Admin Page.";
			var btn=document.createElement('input');
					  btn.type="button";
					  btn.value="LOGOUT";insertBreak(loginpage);
			loginpage.appendChild(btn);btn.addEventListener("click",function(event){
				window.location.href = "sign up.html";
			});
			while(content.firstChild){
				content.removeChild(content.firstChild);
			}
			var head=document.createTextNode("Online Shopping");
			
			  
			content.appendChild(head);
			
			var pa=document.createElement('p');
			var we=document.createTextNode("This is one of the best shopping platforms and is ready to give you an amazing aquaintance of amazement.");
			pa.appendChild(we);
			content.appendChild(pa);
			var pa=document.createElement('p');
			var we=document.createTextNode("Admin is the extreme end controller of this shopping platform. Admin has the control to view registered users, orders and products.");
			pa.appendChild(we);
			content.appendChild(pa);
        }
		  if(e.target && e.target.nodeName == "LI"&&document.getElementById(e.target.id).innerHTML=="Users"){
			   while(content.firstChild){
				content.removeChild(content.firstChild);
			}
			
			document.getElementById("loginpage").innerHTML="You are currently on Admin Page.";
			var btn=document.createElement('input');
					  btn.type="button";
					  btn.value="LOGOUT";insertBreak(loginpage);
			loginpage.appendChild(btn);btn.addEventListener("click",function(event){
				window.location.href = "sign up.html";
			});
			database=getStoredNames();
				var heading=document.createElement('p');
											var ya=document.createTextNode("THIS IS LIST OF REGISTERED USERS");heading.appendChild(ya);
											content.appendChild(ya);insertBreak(content);
											
								  var table = document.createElement('TABLE')
            var tableBody = document.createElement('TBODY')

            table.border = '4px'
			table.border.style='4px solid red';
            table.appendChild(tableBody);

            var heading = new Array();
            heading[0] = "FIRST NAME"
            heading[1] = "LAST NAME"
            heading[2] = "EMAIL ID"
            
           
           
            
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);var i=0;
            for (i = 0; i < heading.length; i++) {
                var th = document.createElement('TH')
                th.width = '75';
                th.appendChild(document.createTextNode(heading[i]));
                tr.appendChild(th);

            }

            
         

            for (i = 0; i < database.length; i++) {
                var tr = document.createElement('TR');
                    var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(database[i].fName));
                    tr.appendChild(td)
					  var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(database[i].lName));
                    tr.appendChild(td)
					  var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(database[i].Email));
                    tr.appendChild(td)
					
					
					
					
			tableBody.appendChild(tr);}content.appendChild(table);				
											
			  
			  
		  }
		 if(e.target && e.target.nodeName == "LI"&&document.getElementById(e.target.id).innerHTML=="Products"){
			 while(content.firstChild){
				content.removeChild(content.firstChild);
			}
			
	product=getStoredName();
			  var table = document.createElement('TABLE')
            var tableBody = document.createElement('TBODY')

            table.border = '4px'
			table.border.style='4px solid red';
            table.appendChild(tableBody);

            var heading = new Array();
            heading[0] = "Product ID"
            heading[1] = "Name"
            heading[2] = "Description"
            heading[3] = "Price"
            heading[4] = "Quantity"
			heading[5] = "Required Qty"
            heading[6] = "Choose/Select"
           
            
            var tr = document.createElement('TR');
            tableBody.appendChild(tr);var i=0;
            for (i = 0; i < heading.length; i++) {
                var th = document.createElement('TH')
                th.width = '75';
                th.appendChild(document.createTextNode(heading[i]));
                tr.appendChild(th);

            }

            
         

            for (i = 0; i < product.length; i++) {
                var tr = document.createElement('TR');
                    var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(product[i].productid));
                    tr.appendChild(td)
					  var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(product[i].pName));
                    tr.appendChild(td)
					  var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(product[i].pDesc));
                    tr.appendChild(td)
					  var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(product[i].pPrice));
                    tr.appendChild(td)
					  var td = document.createElement('TD')
                    td.appendChild(document.createTextNode(product[i].pQuantity));
                    tr.appendChild(td);
					 var td = document.createElement('TD')
					 var inp=document.createElement('input');inp.class="inp";
					 inp.type="number";inp.setAttribute("placeholder","Enter Quantity");inp.setAttribute("id",i+1);
                    td.appendChild(inp);
                    tr.appendChild(td);
					  var td = document.createElement('TD')
					  var btn=document.createElement('input');
					  btn.type="button";
					  btn.value="Add to cart";
					  btn.setAttribute("id",i+1);
                    td.appendChild(btn);
                    tr.appendChild(td);
                  tableBody.appendChild(tr);
				  btn.addEventListener("click",function(event){
					 
var x=event.target.id;
var mul=1;
 var arr=document.getElementsByTagName('input');
  for(var h=0;h<arr.length;h++){
	  if(arr[h].id==x){
		  mul=arr[h].value;break;
	  }
  }
  
  if(mul>product[x-1].pQuantity){
	  document.getElementById("loginpage").innerHTML=" Asked Quantity of Product is not available";
  }else{
	  
sum=sum+ product[x-1].pPrice*mul;
product[x-1].pQuantity=product[x-1].pQuantity-mul;
  document.getElementById("loginpage").innerHTML=" total bill so far is "+sum;
  
		 }
		
			});
			}content.appendChild(table);var btn=document.createElement('input');
					  btn.type="button";
					  btn.value="LOGOUT";insertBreak(loginpage);
			loginpage.appendChild(btn);
			btn.addEventListener("click",function(event){
				window.location.href = "sign up.html";
			});
			}
  });