let jsonDatabase = [
  {
    title: "Totoro",
    picture_url:
      "https://cdn.shopify.com/s/files/1/0618/8715/2293/files/totoro_hires_1.jpg?v=1676047353",
    favorite_color: "#1E8449",
    characters: ["mei", "satsuki", "totoro"],
  },
  {
    title: "Kiki's Delivery Service",
    picture_url:
      "https://cdn.shopify.com/s/files/1/0618/8715/2293/files/kiki_hires_3.jpg?v=1676047415",
    favorite_color: "#1F618D",
    characters: ["jiji", "kiki", "tombo"],
  },
  {
    title: "Spirited Away",
    picture_url:
      "https://cdn.shopify.com/s/files/1/0618/8715/2293/files/spirited_hires_3.jpg?v=1676047772",
    favorite_color: "#873600",
    characters: ["chihiro", "yubaba", "haku"],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let contentGridElement = document.getElementById("contentGrid");

  for (let jsonData of jsonDatabase) {
    createContentElement(jsonData);
  }

  function createContentElement(incomingJSON) {
    let newContentElement = document.createElement("div");
    newContentElement.style.backgroundColor = incomingJSON.favorite_color;
    newContentElement.classList.add("contentItem");

    let newContentHeading = document.createElement("h2");
    newContentHeading.classList.add("contentTitle");
    newContentHeading.innerText = incomingJSON.title;
    newContentElement.appendChild(newContentHeading);

    // Create an image element and set its source
    let newImage = document.createElement("img");
    newImage.src = incomingJSON.picture_url;
    newContentElement.appendChild(newImage);

    let newContentSubhead = document.createElement("h3");
    newContentSubhead.innerText = "Characters:";
    newContentElement.appendChild(newContentSubhead);

    let newContentCharactersList = document.createElement("ul");
    newContentElement.appendChild(newContentCharactersList);

    for (let character of incomingJSON.characters) {
      let newCharacterItem = document.createElement("li");
      newCharacterItem.innerText = character;
      newContentCharactersList.appendChild(newCharacterItem);
    }

    contentGridElement.appendChild(newContentElement);
  }
});

  AOS.init();
