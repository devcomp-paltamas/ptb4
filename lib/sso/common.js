window.onload=function() {
		var node_list = document.getElementsByTagName('input');
		  
		for (var i = 0; i < node_list.length; i++) {
		     var node = node_list[i];
		 
		     if (node.getAttribute('type') == 'text') {
		    	 node.focus();
		         return true;
		  }
	   } 
}