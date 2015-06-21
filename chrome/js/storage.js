function prepareForStorage (data) {
	var dataForStorage = [];
	$(data).each(function(i, v){
		dataForStorage.push({
			id                    	 : 	i,
			link 					 : 	v.flmr10_link,
			main_image            	 : 	v.flmr10_image, 
			description           	 : 	v["flmr10_image/_alt"], 
			content_description   	 : 	v.description,
			content_value         	 : 	v.date_value
		});
		

	});
	return dataForStorage;
}