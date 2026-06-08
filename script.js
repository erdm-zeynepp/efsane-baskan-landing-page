function showResult(type){

const result = document.getElementById("result");

if(type === "Builder"){
result.innerHTML =
"You are The Builder 🏗️<br>You create powerhouse clubs through vision, ambition and bold investments.";
}

if(type === "Scout"){
result.innerHTML =
"You are The Scout 🔍<br>You discover future stars before anyone else.";
}

if(type === "Tactician"){
result.innerHTML =
"You are The Tactician 🧠<br>You win through preparation, analysis and smart decisions.";
}

}
