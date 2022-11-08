// Samuel Kiarie -- 11/06/2022

// declaration and intialization of variables
let homePoints = 0 
let guestPoints = 0
const homeScoreDisplay=document.getElementById("homeScore")
const guestScoreDisplay=document.getElementById("guestScore")
document.getElementById("homeScore").textContent = homePoints
document.getElementById("guestScore").textContent = guestPoints


// function for adding points (Guest)
function addGuestPoint(points) {
  guestPoints += points
  guestScoreDisplay.textContent = guestPoints
}

// function for adding points (Home)
function addHomePoint(points) {
    homePoints += points   
    homeScoreDisplay.textContent = homePoints
}

// function for reseting the values back to zero
function resetScore() {
    homePoints = 0
    guestPoints = 0
    homeScoreDisplay.textContent = homePoints
    guestScoreDisplay.textContent = guestPoints
}