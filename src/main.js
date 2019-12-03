let moleImageURL = "https://image.shutterstock.com/image-vector/cartoon-cute-mole-260nw-274323440.jpg"
let moleCounter = 0
let containter = document.querySelector(".container")
let score = document.querySelector("span")
let clickable = false
fetch('http://localhost:3000')
  .then(response => response.json())
  .then(data => {
    // console.log(data)
  })

//mole timing
setInterval(function(){ molePopUp() }, 3000);

function molePopUp() {
  if (document.querySelector('.mole')) {
    document.querySelector('.mole').remove()
    renderMole()
    } else {
      renderMole()

      }
}

//mole render
function renderMole() {
  clickable = true
  randomHole()
  
  let moleHTML = `
    <img class="mole" src=${moleImageURL}>
    `
    randomHole().insertAdjacentHTML('beforeend',moleHTML)

    moleCounter += 1
}

//pick a hole
function randomHole() {
  let holeID = Math.floor((Math.random() * 9) + 1)
  return document.querySelector(`[data-id="${holeID}"]`)
}

containter.addEventListener("click", function(e) {

  if (e.target.className === "mole" && clickable) {
    let score = document.querySelector("span")
    score.innerHTML = parseInt(score.textContent) + 1 
    clickable = false
  }
  
})
