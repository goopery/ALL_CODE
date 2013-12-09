function checkForm()
{
inputs = document.getElementById("entry").getElementsByTagName("input"); 
//alert( inputs.length);
for (i = 0; i < inputs.length; i++)
{
	//inputs[i].setAttribute("class","error");
	inputs[i].parentNode.removeAttribute("class");
	if (inputs[i].value == "")
	{
	inputs[i].parentNode.setAttribute("class","error");
	}
}
return false;
}

 