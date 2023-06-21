var modal = document.getElementById("myModal");
        
// Get the button that opens the modal
var btn = document.getElementById("signup-btn");

// Get the close button element
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function openModal() {
    modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal1 = document.getElementById("myModal1");
        
// Get the button that opens the modal
var btn1 = document.getElementById("signin-btn");

// Get the close button element
var closeBtn1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
function openModal1() {
    modal1.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeBtn1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}