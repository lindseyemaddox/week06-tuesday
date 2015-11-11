function floatie(event){
	var input = $(this);

	setTimeout(function(){
		var value = input.val();
      
		if(value !== ""){
			input.parent().addClass("float");
        }
		else {
			input.parent().removeClass("float");
        }
	},1);

}

$(".floatingPlaceholder input").keydown(floatie);
$(".floatingPlaceholder input").change(floatie);



//Spent way too much time trying to get this to work, finally put it in jsbin and realized there was some sort of conflict with backbone functionality that I couldn't remedy. I'd like to know what's going on.