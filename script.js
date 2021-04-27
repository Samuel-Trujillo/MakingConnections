var philR= document.querySelector("#philR")
var toddR= document.querySelector("#toddR")
function removep(){
   philR.remove()
}
function removet(){
   toddR.remove()
}

var username= document.querySelector("#username")
var nameEdit= document.querySelector("#nameEdit")

function editname(){
 username.innerHTML=nameEdit.value
 nameEdit.blur()
 nameEdit.style.display= "none"
}


function popbox(){
   nameEdit.style.display="inline-block"
}

function hidebox(){
   nameEdit.style.display= "none"
}