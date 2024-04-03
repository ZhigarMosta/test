let jsonData;

async function fetchData() {
  try {
    const response = await fetch("./../json/search.json");
    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки файла:", error);
    return null;
  }
}

let visibleTackList;

async function getData() {
  jsonData = await fetchData();
  visibleTackList = await fetchData();
  renderCase(visibleTackList);
}

getData();

const renderCase = (Case) => {
  Case.case.forEach((CaseEl) => {
    document.querySelector(".case_list").innerHTML += `
  			<div class="card-body">
  			<p class="case_list_text">${CaseEl.title}</p>
  			</dib>
  	`;
  });
};

const Search = document.querySelector(".header_input");
const CaseList = document.querySelector(".case_list");

async function runSearch(query) {
  if (!query) {
    CaseList.classList.add("none");
    return;
  }
  CaseList.classList.remove("none");
}

Search.addEventListener("input", (e) => {
  let query = e.target.value.replaceAll(" ", "");
  runSearch(query);
});
