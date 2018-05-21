var cart=[];
var orderHeader=[]; 
var orderDetail=[];
var oid=0;
window.onload=function()
					{  //store(signupdata);
						orderHeader=getHead();
						orderDetail=getDetail();
						assignOid;
					}
					function storeHead()
					{ 
					localStorage.orderHeader = JSON.stringify(orderHeader);              
					}  
		
	
		
				function getHead()
				{
					  if (!localStorage.orderHeader)
						{ // default to empty array
						localStorage.orderHeader= JSON.stringify([]); 
						} 
					return JSON.parse(localStorage.orderHeader); 
				}
				function storeDetail()
					{ 
					localStorage.orderDetail = JSON.stringify(orderDetail);              
					}  
		
	
		
				function getDetail()
				{
					  if (!localStorage.orderDetail)
						{ // default to empty array
						localStorage.orderDetail= JSON.stringify([]); 
						} 
					return JSON.parse(localStorage.orderDetail); 
				}
function assignOid()
				{
					for(var i=0;orderHeader.length>i;i++);
					if(i!=0)
						oid=orderHeader[i-1].oid+1;
				}
function createArrays()
{
	var obj=new Object;
	obj.oid=oid++;
	obj.email=cart.email;
	obj.orderItem=cart.length;//no. of item in cart of that user
	odj.orderDate=sysDate();
	obj.shippDate=sysDate();
	orderHeader.push(obj);
	var sum=0;
for(var i=0;cart.length>i;i++)
{
	var pro=new object;
	sum=cart[i].subTotal;
	pro.oid=obj.oid;
	pro.odid=i;
	pro.itemName=cart[i].name;
	pro.qty=cart[i].qty;
	pro.orderStatus='0';
	pro.price=cart[i].price;
	orderDetail.push(pro);
}
obj.total=sum;
storeHead();
storeDetail();
}
function sysDate()
{
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!

	var yyyy = today.getFullYear();
	if(dd<10){
	    dd='0'+dd;
	} 
	if(mm<10){
	    mm='0'+mm;
	} 
	var today = dd+'/'+mm+'/'+yyyy;
	return today;
}