var net = require('net');
var fs = require('fs');
var port = 3000;

var server = net.createServer(function(connection){
    console.log("connected");
    var responses = ["If you love something let it free unless its a tiger", 
    "Watch a sunrise atleast once a day", "Follow the heart of the cards", 
    "When life gives you lemonade, make lemondade and life will be like WHA WHA  WHAt?", 
    "Success is 1% inspiration, 98% perspiration and 2% attention to detail", 
    "Take a lesson from parakeets. If you are feeling lonely just eat in front of the mirror",
     "And that's why you always leave a note", "That's why you never leave the tree"]; 
    connection.on("data", function(data){
    		var trim = data.toString().trim().toLowerCase();
            var split = trim.split("");
            var index = split.length - 1;

            
            if(split[index] === "?") {
                
    			var random = responses[Math.floor(Math.random() * responses.length)];
               
    			connection.write(random + "\n");
                    
                
    		} else {
    			connection.write("Don't you want to know your future?");
    		}
    	})

});

server.listen(port, function(){
	console.log("listening");
});