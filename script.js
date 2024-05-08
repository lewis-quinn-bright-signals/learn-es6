function varFunc() {
    var prevous = 0;
    var current = 1;
    var i;
    var temp;

    for (i = 0; i < n; i += 1) {
        temp = prevous;
        prevous = current;
        current = temp + current;
    }
}

function letFunc() {
    let prevous = 0;
    let current = 1;
    
    for (let i = 0; i < n; i += 1) {
        let temp = prevous;
        prevous = current;
        current = temp + current;
    }

    console.log(current) || displayInPreview(current);
}

varFunc();
letFunc();

// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}