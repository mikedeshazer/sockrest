
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

	if(typeof params.success != "undefined"){
		globalCompleteFunctions[globalFunctionIteration] = params.success;
	}
	else{
		globalCompleteFunctions[globalFunctionIteration] = params.complete;
	}
	

	try{

		var socket = new WebSocket(params.url);


		socket.onmessage = function(event) {
	 	 	var message = event.data;
	  		globalCompleteFunctions[globalFunctionIteration](message);
	  		globalFunctionIteration = globalFunctionIteration+1;
		};

		socket.onopen = function(event) {
	 	 	socket.send(params.data);
		};

		socket.onerror = function(event) {
	 	 	
	 	 	try{
	 	 		params.error(event);
	 	 	}
	 	 	catch(err){
	 	 		console.log(event)
	 	 	}
	 	 	
		};
		
		
	}	

	catch(err){
		console.log(err)
		console.log("This browser does not support websockets");
		return;
	}



}



var WebSocketRest= function(restURL){

	this.restURL = restURL;
	this.setSocketInterval = false;

	this.send = function(sendParams){

		$.ajax({
		url:this.restURL,
		data:sendParams,
		complete:function(transport){
			_this.onmessage(transport.responseText);
		},
		error:function(errInfo){
			_this.onerror(transport.responseText);
		}
		})


		
			if(_this.setSocketInterval == false){
				_this.setSocketInterval = true;
				_this.interval = setInterval(function(){
					_this.send(sendParams);
				}, 3000);
			}

			
		
	}

	//this is replaced by coder 
	this.onmessage= function(msg){
		console.log(msg)
	}

	this.onopen = function(){
		console.log("onopen websocket event was not set. This is default message this is mock triggered even though this is a restful api being treated like a websocket.")
	}
	var _this = this;

	setTimeout(function(){
		_this.onopen();
	},100)

	this.close= function(){
		clearInterval(this.interval);
		console.log("mock socket closed.");
	}


	
}