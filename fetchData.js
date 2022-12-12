const api_url = "https://api.escuelajs.co/api/v1/products";

async function getapi(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  data.slice(0, 9).forEach((dataItem) => {
    //container
    const container = document.getElementById("container");
    //item  class='item'
    const item = document.createElement("div");
    item.classList.add("item");
    container.appendChild(item);

    //item_title  class='title'
    const item_title = document.createElement("h3");
    item.appendChild(item_title);
    item_title.innerText = `${dataItem.title}`;
    //item  class='img'
    const item_image = document.createElement("img");
    item_image.classList.add("image");
    item.appendChild(item_image);
    item_image.src = `${dataItem.images[0]}`;
    //item_price  class='price'
    const item_price = document.createElement("h5");
    item.appendChild(item_price);
    item_price.innerText = `${dataItem.price} sek`;

    //item_description
    const item_description = document.createElement("p");
    item_description.classList.add("description");
    item.appendChild(item_description);
    item_description.innerText = `${dataItem.description}`;
  });
}
getapi(api_url);
