console.log("Connected!!!");

var body = document.body;
var marquee = body.querySelector(".marquee p");
var marqueeText = (marquee.textContent + "&nbsp;".repeat(20)).repeat(3);
// Set up Marque Text content
marquee.innerHTML = "<em>" + marqueeText + "</em>";
