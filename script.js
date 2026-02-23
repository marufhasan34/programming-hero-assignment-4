let InterviewList = [];
let RejectedList = [];
let currentStatus = "all-filter-btn";

let total = document.getElementById("total");
let Interview = document.getElementById("Interview");
let Rejected = document.getElementById("Rejected");
const allCards = document.getElementById("allCards");
let jobsCount = document.getElementById("jobs-count");
let jobsText = document.getElementById("jobs-text");

const allFilterBtn = document.getElementById("all-filter-btn");
const InterviewFilterBtn = document.getElementById("Interview-filter-btn");
const RejectedFilterBtn = document.getElementById("Rejected-filter-btn");
const filteredSection = document.getElementById("filtered-section");

const mainContainer = document.querySelector("main");

function calculateCount() {
  const totalJobs = allCards.children.length;

  total.innerText = totalJobs;
  Interview.innerText = InterviewList.length;
  Rejected.innerText = RejectedList.length;

  if (currentStatus === "all-filter-btn") {
    jobsText.innerText = `${totalJobs} jobs`;
  } else if (currentStatus === "Interview-filter-btn") {
    jobsText.innerText = `${InterviewList.length} of ${totalJobs} jobs`;
  } else if (currentStatus === "Rejected-filter-btn") {
    jobsText.innerText = `${RejectedList.length} of ${totalJobs} jobs`;
  }
}
calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove("btn-primary");
  InterviewFilterBtn.classList.remove("btn-primary");
  RejectedFilterBtn.classList.remove("btn-primary");

  const selected = document.getElementById(id);
  currentStatus = id;
  selected.classList.add("btn-primary");
  if (id == "Interview-filter-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  } else if (id == "all-filter-btn") {
    allCards.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id == "Rejected-filter-btn") {
    allCards.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
  }
  calculateCount();
}

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobNeed = parentNode.querySelector(".job-need").innerText;
    const jobSalary = parentNode.querySelector(".job-salary").innerText;
    const jobApproval = parentNode.querySelector(".job-approval").innerText;
    const jobText = parentNode.querySelector(".job-text").innerText;
    parentNode.querySelector(".job-approval").innerText = "Interview";
    const cartInfo = {
      jobName,
      jobNeed,
      jobSalary,
      jobApproval: "Interview",
      jobText,
    };
    const jobExist = InterviewList.find(
      (item) => item.jobName == cartInfo.jobName,
    );
    if (!jobExist) {
      InterviewList.push(cartInfo);
    }
    RejectedList = RejectedList.filter(
      (item) => item.jobName != cartInfo.jobName,
    );
    calculateCount();
    if (currentStatus == "Rejected-filter-btn") {
      renderRejected();
    }
    if (currentStatus == "Interview-filter-btn") {
      renderInterview();
    }
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobNeed = parentNode.querySelector(".job-need").innerText;
    const jobSalary = parentNode.querySelector(".job-salary").innerText;
    const jobApproval = parentNode.querySelector(".job-approval").innerText;
    const jobText = parentNode.querySelector(".job-text").innerText;
    parentNode.querySelector(".job-approval").innerText = "Rejected";
    const cartInfo = {
      jobName,
      jobNeed,
      jobSalary,
      jobApproval: "Rejected",
      jobText,
    };
    const jobExist = RejectedList.find(
      (item) => item.jobName == cartInfo.jobName,
    );
    if (!jobExist) {
      RejectedList.push(cartInfo);
    }

    InterviewList = InterviewList.filter(
      (item) => item.jobName != cartInfo.jobName,
    );

    if (currentStatus == "Interview-filter-btn") {
      renderInterview();
    }
    if (currentStatus == "Rejected-filter-btn") {
      renderRejected();
    }
    calculateCount();
  } else if (
    event.target.classList.contains("trash-btn") &&
    currentStatus === "all-filter-btn"
  ) {
    const card = event.target.closest(".shadow-2xl");
    card.remove();
    calculateCount();
  }
});

function renderInterview() {
  filteredSection.innerHTML = "";
  if (InterviewList.length === 0) {
    filteredSection.innerHTML = `
     <div class="flex flex-col items-center justify-center py-20 text-center">
       <img src='./jobs.png'>
       <h3 class="font-bold text-xl my-3">No jobs available</h3>
       <p class='text-gray-400'>Check back soon for new job opportunities</p>
     </div>

    `;
    return;
  }

  for (let Interview of InterviewList) {
    console.log(Interview);
    let div = document.createElement("div");
    div.className = "flex justify-between shadow-2xl p-10 rounded-xl";
    div.innerHTML = `
      <div class="space-y-5">
            <h3 class="font-semibold job-name text-xl">${Interview.jobName}</h3>
            <p class="font-normal job-need text-gray-600">${Interview.jobNeed}</p>
            <p class="font-normal job-salary text-gray-400">
              ${Interview.jobSalary}
            </p>
            <p class="font-medium btn uppercase job-approval">${Interview.jobApproval}</p>
            <p class="job-text">
              ${Interview.jobText}
            </p>
            <div class="flex gap-3">
              <button class="btn interview-btn btn-outline uppercase btn-success">
                Interview
              </button>
              <button class="btn rejected-btn btn-outline uppercase btn-error">
                Rejected
              </button>
            </div>
          </div>
          <div>
            <div class="border rounded-full p-2 border-gray-300">
              <i class="fa-solid fa-trash-can"></i>
            </div>
          </div>
    `;
    filteredSection.appendChild(div);
  }
}

function renderRejected() {
  filteredSection.innerHTML = "";
  if (RejectedList.length === 0) {
    filteredSection.innerHTML = `
     <div class="flex flex-col items-center justify-center py-20 text-center">
       <img src='./jobs.png'>
       <h3 class="font-bold text-xl my-3">No jobs available</h3>
       <p class='text-gray-400'>Check back soon for new job opportunities</p>
     </div>

    `;
    return;
  }

  for (let rejected of RejectedList) {
    let div = document.createElement("div");
    div.className = "flex justify-between shadow-2xl p-10 rounded-xl";
    div.innerHTML = `
      <div class="space-y-5">
            <h3 class="font-semibold job-name text-xl">${rejected.jobName}</h3>
            <p class="font-normal job-need text-gray-600">${rejected.jobNeed}</p>
            <p class="font-normal job-salary text-gray-400">
              ${rejected.jobSalary}
            </p>
            <p class="font-medium btn uppercase job-approval">${rejected.jobApproval}</p>
            <p class="job-text">
              ${rejected.jobText}
            </p>
            <div class="flex gap-3">
              <button class="btn interview-btn btn-outline uppercase btn-success">
                Interview
              </button>
              <button class="btn rejected-btn btn-outline uppercase btn-error">
                Rejected
              </button>
            </div>
          </div>
          <div>
            <div class="border rounded-full p-2 border-gray-300">
              <i class="fa-solid fa-trash-can"></i>
            </div>
          </div>
    `;
    filteredSection.appendChild(div);
  }
}
