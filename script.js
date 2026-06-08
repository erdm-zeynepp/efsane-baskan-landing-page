function showResult(type){

const result = document.getElementById("result");

if(type === "Builder"){
result.innerHTML =
"You are The Builder 🏗️<br>You create powerhouse clubs through ambition and big signings.";
}

if(type === "Scout"){
result.innerHTML =
"You are The Scout 🔍<br>You discover talent before everyone else.";
}

if(type === "Tactician"){
result.innerHTML =
"You are The Tactician 🧠<br>You win through preparation and smart decisions.";
}

}
