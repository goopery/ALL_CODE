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
			

