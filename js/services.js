async function fetchData() {
  try {
    const response = await fetch("./../json/services.json");
    return await response.json();
  } catch (error) {
    console.error("Ошибка загрузки файла:", error);
    return null;
  }
}

let servicesList;

async function getData() {
  servicesList = await fetchData();
  renderList(servicesList);
}

const renderList = (Data) => {
  Data.services.forEach((El) => {
    if (El.text == null) {
      document.querySelector(".services_wrapper-card").innerHTML += `
			<div class="services_container-card">
			<img
				src="${El.img}"
				alt="${El.id}"
				class="services_img"
			/>
			<div class="services_container-text">
				<h3>${El.title}</h3>
			</div>
		</div>
  	`;
    }
		else{
			document.querySelector(".services_wrapper-card").innerHTML += `
			<div class="services_container-card">
			<img
				src="${El.img}"
				alt="${El.id}"
				class="services_img"
			/>
			<div class="services_container-text">
				<h3>${El.title}</h3>
				<h4>${El.text}</h4>
			</div>
		</div>
  	`;
		}
  });
};

getData();
