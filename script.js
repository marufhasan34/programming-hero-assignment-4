

let total = document.getElementById("total");
let Interview = document.getElementById("Interview");
let Rejected = document.getElementById("Rejected");
const allCards = document.getElementById("allCards");
let jobsCount = document.getElementById("jobs-count");

function calculateCount() {
  total.innerText = allCards.children.length;
  jobsCount.innerText = allCards.children.length;
}
calculateCount();
