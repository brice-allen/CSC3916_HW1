var event = require("events");
// Emitter class
class myEvent extends event{}
// Creating object of class myEvent
var myEventObject = new myEvent();
// Object emitter class exposes 'on' method to attach listeners to name Event.
// Attaching listener function to 'namedEvent'
myEventObject.on("namedEvent", function () {
    console.log("Called namedEvent in myEventObject's attached listener.");
});
myEventObject.emit("namedEvent");
/*
    Called namedEvent for myEventObject, all the listeners
    listing to "namedEvent" will be called synchronously
 */
