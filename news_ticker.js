$(document).ready(function(){
			
	$('#newsTicker6').breakingNews({
		source: {
			type:'json',
			url:'https://jsonplaceholder.typicode.com/posts', 
			limit:20, 
			showingField:'title',
			linkEnabled: false,
			target:'_blank', 
			seperator: '<span class="bn-seperator" style="background-image:url(img/cnn-logo.png);"></span>',
			errorMsg: 'Json file not loaded. Please check the settings.'
		}
	});

});


