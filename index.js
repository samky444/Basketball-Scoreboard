// Samuel Kiarie -- 11/06/2022

// declaration and intialization of variables
let homePoints = 0 
let awayPoints = 0
const homeScoreDisplay=document.getElementById("homeScore")
const awayScoreDisplay=document.getElementById("awayScore")
document.getElementById("homeScore").textContent = homePoints
document.getElementById("awayScore").textContent = awayPoints


// function for adding points (Guest)
function addAwayPoint(points) {
  awayPoints += points
  awayScoreDisplay.textContent = awayPoints
}

// function for adding points (Home)
function addHomePoint(points) {
    homePoints += points   
    homeScoreDisplay.textContent = homePoints
}

// function for reseting the values back to zero
function resetScore() {
    homePoints = 0
    awayPoints = 0
    homeScoreDisplay.textContent = homePoints
    guestScoreDisplay.textContent = awayPoints
}