function addAct(){
   var newAct = document.createElement("div");
   newAct.innerHTML = document.getElementById("textBox").value;
   newAct.onclick = removeActlist;
   document.getElementById("Actlist").appendChild(newAct);
   saveActlist();
}

function saveActlist(){
  localStorage.storedList = document.getElementById("Actlist").innerHTML;
}
  
function loadActlist(){
  document.getElementById("Actlist").innerHTML = localStorage.storedActlist;
  for(var i=0;i<Actlist.children.length; i++){
  Actlist.children[i].onclick = removeActlist;
  }
}

function removeActlist(){
  document.getElementById("Actlist").removeChild(this);
  saveActlist();
}

if(localStorage.storedActlist != null){
  loadActlist();
}
