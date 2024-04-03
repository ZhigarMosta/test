async function fetchData() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/ZhigarMosta/test/main/json/news.json");
    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки файла:", error);
    return null;
  }
}

let newsList;

async function getData() {
  newsList = await fetchData();
  renderList(newsList);
}

const renderList = (Data) => {
  Data.news.forEach((El) => {
    if (El.img == null) {
      document.querySelector(".news_wrapper-card").innerHTML += `
			<div class="news_container-card">
            <div class="news_right">
              <div class="news_container-text">
                <h3>${El.title}</h3>
                <h4>
									${El.text}
                </h4>
              </div>
              <p class="news_data-text">${El.data}</p>
            </div>
          </div>
  	`;
    } else {
      document.querySelector(".news_wrapper-card").innerHTML += `
			<div class="news_container-card">
            <img
              src="${El.img}"
              alt="${El.id}"
							class="news_img"
            />
            <div class="news_right">
              <div class="news_container-text">
                <h3>${El.title}</h3>
                <h4>
									${El.text}
                </h4>
              </div>
              <p class="news_data-text">${El.data}</p>
            </div>
          </div>
  	`;
    }
  });
};

getData();
