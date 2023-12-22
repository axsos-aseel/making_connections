

var userName = document.querySelector("#user-name")
var connectionsNumber = document.querySelector("#connections")
var requestsNumber = document.querySelector("#requests")



function editName() {
    userName.innerText = "Mia John"
}

function accept(element) {
    // var element = document.querySelector(id);
    // element.remove();
    // requestsNumber.innerText --;
    ignore(element)
    connectionsNumber.innerText ++;

}

function ignore(element) {
    var request = element.closest(".card-list-item")
    // var image = request.querySelector(".avatar-s")
    request.remove(); 
    requestsNumber.innerText --;
}

