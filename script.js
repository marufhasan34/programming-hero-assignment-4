let InterviewList = [];
let RejectedList = [];

let total = document.getElementById("total");
let Interview = document.getElementById("Interview");
let Rejected = document.getElementById("Rejected");
const allCards = document.getElementById("allCards");
let jobsCount = document.getElementById("jobs-count");

const allFilterBtn = document.getElementById("all-filter-btn");
const InterviewFilterBtn = document.getElementById("Interview-filter-btn");
const RejectedFilterBtn = document.getElementById("Rejected-filter-btn");

const mainContainer = document.querySelector("main");

function calculateCount() {
  total.innerText = allCards.children.length;
  jobsCount.innerText = allCards.children.length;
  Interview.innerText = InterviewList.length;
  Rejected.innerText = RejectedList.length;
}
calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove("btn-primary");
  InterviewFilterBtn.classList.remove("btn-primary");
  RejectedFilterBtn.classList.remove("btn-primary");

  const selected = document.getElementById(id);
  selected.classList.add('btn-primary')
}
