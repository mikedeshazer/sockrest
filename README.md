# sockREST: socketAndRESTfulClientCallAndHandlerConverter
### Client-side Javascript library that lets you consume Websocket Endpoints like HTTP (with AJAX) and Vice Versa

If you have a websocket endpoint, but want to consume it in your app like you would do an jQuery AJAX call, run: 

```javascript

$.ajaxSocket({
	url:'wss://echo.websocket.org',
	data:exampleData,
	complete:function(transport){
		console.log(transport);
		alert("Response from server: " + transport);
	}
})

```

If you have a RESTful endpoint, but want to consume it in your app like you would with a native Websocket object, run:

```javascript

var socket1 = new WebSocketRest('https://jsonplaceholder.typicode.com/posts/1');
	
socket1.onopen = function(event) {
	socket1.send(exampleRData);
};

socket1.onmessage=function(event){
	alert("this returned from server: "+ event);
}

```

We are moving from a RESTful request world to a WebSocket world, but if you're an old schooler looking to do things (like consume APIs) and don't want to learn too many new tricks, this lib might be for you.

There is a lot of information online about WebSockets, but basically it's a way to use a single connection to pass data back and forth, whereas the way you might be accustomed to means you use AJAX to open a new request everytime with new data to get a response.

No worries! With this library, you can now consume a Websocket lib the same way you would a RESTful API. Also, for the websocket guys who have no idea how RESTful works, you can do your Websocket stuff on a RESTful API.

Not sure if the title is accurate, but you get the point if you're looking at this README, so let's just go with it.


## You can run the example in example.html 


## TODOS

1. Make it work for Angular
2. Make it work with React
3. Perhaps make the library have the jquery and other libs detect an "http" request in a websocket call and automatically handle it smartly, or see a "ws" request in a RESTful call and handle it smartly.







