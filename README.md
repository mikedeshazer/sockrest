# socketAndRESTfulConverter
Client-side Javascript lib that lets you consume Websocket Endpoints like HTTP (with AJAX) and Vice Versa

We are moving from a RESTful request world to a WebSocket world, but if you're an old schooler looking to do things (like consume APIs) and don't want to learn too many new tricks, this lib might be for you.

There is a lot of information online about WebSockets, but basically it's a way to use a single connection to pass data back and forth, whereas the way you might be accustomed to means you use AJAX to open a new request everytime with new data to get a response.

No worries! With this library, you can now consume a Websocket lib the same way you would a RESTful API. Also, for the websocket guys who have no idea how RESTful works, you can do your Websocket stuff on a RESTful API.

Not sure if the title is accurate, but you get the point if you're looking at this README, so let's just go with it.

