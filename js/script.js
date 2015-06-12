$(document).ready(function(){
	
	var divPos = {};
	var offset = $(".object_cover").offset();

	var container_width = $(".object_cover").width();

	var shadow_range = 30; //This set the drop shadow range from -30px to 30px.
	//Since the range varies from -30 to +30, the numbers between them are 60. So multiply the shadow range by 2.
	var key_value = (shadow_range)*2/container_width;	
	
	$(document).mousemove(function(e){
    	divPos = {
        	left: e.pageX - offset.left,
        	top: e.pageY - offset.top
        };
        
        if(divPos.left < container_width/2 && divPos.left > 0){
	     	step1 = divPos.left * key_value;
	     	step2 = step1 - shadow_range;
	     	result = Math.abs(step2);
	     	change_shadow(result);
	     	
        }else if(divPos.left > container_width/2 && divPos.left < container_width){
	        step1  = divPos.left * (-key_value);
	        result = step1 + shadow_range; 
	        change_shadow(result);
        }
        
        
    });
    
    function change_shadow(new_pos){
	    $('.shadowed').css({
	    	'-webkit-filter' : 'drop-shadow('+new_pos+'px -8px 4px rgba(0,0,0,1))'
	    });
	}
	
})	
	