$(document).ready( function() {

var $body = $('body');
				
		var setBodyScale = function() 
		{
			var scaleFactor = 0.35,
				scaleSource = $body.width(),
				maxScale = 600,
				minScale = 30;

			var fontSize = scaleSource * scaleFactor;

				if (fontSize > maxScale) fontSize = maxScale;
				if (fontSize < minScale) fontSize = minScale; 

					$('body').css('font-size', fontSize + '%');
		}
			
			    $(window).resize(function(){
					setBodyScale();
				});
				
				
				setBodyScale();
			});
			
		

//TWEET/SHARE/NEWSLETTER FUNCTIONS - LARGE SCREEN


function twt_click() 
{

window.open('https://twitter.com/share?url=http%3A%2F%2Flyresoapcompany.com%2F', width=300, height=300)
return false; 
}


function fbs_click(width, height) {
var leftPosition, topPosition;
leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
topPosition = (window.screen.height / 2) - ((height / 2) + 50);
var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=no,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
//u=location.href;
t=document.title;
window.open('http://www.facebook.com/sharer.php?u=http://lyresoapcompany.com/&t='+encodeURIComponent(t),'sharer', windowFeatures);
return false;
}


function show_thanks()
{

if 
(document.getElementById('email_sub').value.length == 0)

{
document.getElementById("thanks_text").style.display = "block";
document.getElementById("thanks_text").innerHTML = "PLEASE INSERT YOUR EMAIL ADDRESS";
}

else

{
document.getElementById("thanks_text").style.display = "block";
document.getElementById("thanks_text").innerHTML = "THANKS FOR SUBSCRIBING!";
document.getElementById("email_input").style.display = "none";
}

}


//DISABLE/ENABLE NEWSLETTER IMG BUTTON

/*window.onload = function()
{
	document.getElementById('news_img').disabled = true;
}


window.onresize = function getwidth()
{
var w = window.innerWidth;

if (w <= 400)
{
document.getElementById('news_img').disabled = false;
}
}

*/

//POP UP NEWSLETTER WINDOW - MOBILE - JQUERY LINK









