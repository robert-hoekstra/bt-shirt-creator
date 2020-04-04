// Get the modal
if (document.getElementById("myModal")){
  var modal = document.getElementById("myModal"); // var to make it reachable by outer scope functions
  offline(modal),
  online(modal);
}


// Get the <span> element that closes the modal

if (document.getElementsByClassName("close")[0]){
  let span = document.getElementsByClassName("close")[0];
  AddtoSpan(span);
}


function offline(parameter){
  window.addEventListener('offline', function(e) { parameter.style.display = "block"; });
}

function online(parameter){
  window.addEventListener('online', function(e) { parameter.style.display = "none"; });
}

function AddtoSpan(parameter){
  parameter.onclick = function() {
    modal.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it
if (document.getElementById("myModal")){
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 
}
