function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var addedElement = document.createTextNode(inputValue);
  li.appendChild(addedElement);
  document.getElementById("list").appendChild(li);
}

let empty = []; 
