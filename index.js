let homepoint = document.getElementById("homepoint")
let home = 0

function incrementOne(){
    home += 1
    homepoint.textContent = home
}
function incrementTwo(){
    home += 2
    homepoint.textContent = home
}
function incrementThree(){
    home += 3
    homepoint.textContent = home
}

let guestpoint = document.getElementById("guestpoint")
let guest = 0

function incrementOneg(){
    guest += 1
   guestpoint.textContent = guest
}
function incrementTwog(){
    guest += 2
    guestpoint.textContent = guest
}
function incrementThreeg(){
    guest += 3
    guestpoint.textContent = guest
}
function restart(){
    homepoint.textContent = 0
    guestpoint.textContent = 0
    home = 0
    guest = 0
}