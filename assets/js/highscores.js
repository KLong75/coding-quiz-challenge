var savedScores = JSON.parse(localStorage.getItem("savedData")) || []
  for (let i = 0; i < savedScores.length; i++) {
       const playerName = document.createElement("h2")
       playerName.textContent = savedScores[i].name + ": " + savedScores[i].score
       document.getElementById("high-scores").appendChild(playerName)
      
  }