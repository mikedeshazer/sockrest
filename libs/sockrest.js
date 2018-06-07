$.ajaxSocket= function (params){


	if(typeof params != "object"){
		console.log("Parameters data type for ajaxSocket should be an object containing url and complete");
		return;
	}
	if(params.url.indexOf('ws') ==-1){
		console.log("Please use a target URL that uses the websocket protocol, begining in ws: or wss:")
		return;

	}
	if(typeof globalCompleteFunctions =="undefined"){
		globalCompleteFunctions = [];
		globalFunctionIteration = 0;

	}

	globalCompleteFunctions[globalFunctionIteration] = params.complete;

	try{

		socket = new WebSocket(params.url);

		

		socket.onmessage = function(event) {
	 	 	var message = event.data;
	  		globalCompleteFunctions[globalFunctionIteration](message);
	  		globalFunctionIteration = globalFunctionIteration+1;
		};

		socket.onopen = function(event) {
	 	 	socket.send(params.data);
		};
		
		
	}	

	catch(err){
		console.log(err)
		console.log("This browser does not support websockets");
		return;
	}


}