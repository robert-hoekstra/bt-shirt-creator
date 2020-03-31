function copy() {
    var copyText = document.querySelector("#link");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#copy").addEventListener("click", copy);