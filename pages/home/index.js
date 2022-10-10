const body = document.querySelector("body");
const mainBody = document.querySelector(".main-body");
const containerBody = document.querySelector("#container-body");

createGenderButtons();

function createGenderButtons() {
  const sectionGender = document.createElement("section");
  const h3SectionGender = document.createElement("h3");
  const divButtonsGender = document.createElement("div");

  sectionGender.classList.add("section-gender");
  h3SectionGender.classList.add("title2-bold");
  divButtonsGender.classList.add("div-buttons-gender");

  containerBody.appendChild(sectionGender);
  sectionGender.append(h3SectionGender, divButtonsGender);

  h3SectionGender.innerText = "Gênero Musical";

  categories.forEach((element) => {
    const button = document.createElement("button");
    button.classList.add(
      "buttons-default",
      "buttons-gender",
      `button-${element}`
    );
    button.innerText = element;
    divButtonsGender.appendChild(button);
    return button;
  });

  createPriceRange();

  return sectionGender;
}

function createPriceRange() {
  const sectionPriceRange = document.createElement("section");
  const divTitlePriceRange = document.createElement("div");
  const h3DefinePrice = document.createElement("h3");
  const h3MaxPrice = document.createElement("h3");
  const inputTypeRange = document.createElement("input");

  sectionPriceRange.classList.add("section-price-range");
  divTitlePriceRange.classList.add("div-title-price-range");
  h3DefinePrice.classList.add("title2-bold");
  h3MaxPrice.classList.add("title-max-price", "title2-bold");
  inputTypeRange.classList.add("input-type-range");
  inputTypeRange.type = "range";
  inputTypeRange.name = "price";
  inputTypeRange.id = "price";
  inputTypeRange.min = "0";
  inputTypeRange.max = "240";
  inputTypeRange.oninput = "num.value = this.value";

  h3DefinePrice.innerText = "Definir Preço";
  h3MaxPrice.innerText = `Até R$ ${inputTypeRange.value},00`;

  const inputValue = inputTypeRange.addEventListener("mousemove", (event) => {
    h3MaxPrice.innerText = `Até R$ ${event.target.value},00`;
    inputTypeRange.value = event.target.value;
  });

  // console.log(inputTypeRange.value);

  containerBody.appendChild(sectionPriceRange);
  sectionPriceRange.append(divTitlePriceRange, inputTypeRange);
  divTitlePriceRange.append(h3DefinePrice, h3MaxPrice);

  createSectionAlbums();

  return sectionPriceRange;
}

function createSectionAlbums() {
  const sectionAlbums = document.createElement("section");
  const divTitleSectionAlbums = document.createElement("div");
  const h3TitleSectionAlbums = document.createElement("h3");
  const mainArticles = document.createElement("main");

  sectionAlbums.classList.add("section-albums");
  divTitleSectionAlbums.classList.add("div-title-section-albums");
  h3TitleSectionAlbums.classList.add("title2-bold");
  mainArticles.classList.add("main-articles");

  h3TitleSectionAlbums.innerText = "Álbuns Encontrados";

  containerBody.appendChild(sectionAlbums);
  sectionAlbums.append(divTitleSectionAlbums, mainArticles);
  divTitleSectionAlbums.appendChild(h3TitleSectionAlbums);

  // let gen = 0;
  // createCardsAlbums(products, mainArticles);
  buttonsListenner(products, mainArticles);
  separateByGendder(products, mainArticles, 3);

  return sectionAlbums;
}

function createCardsAlbums(data, toAppendHere) {
  data.forEach((element) => {
    // console.log(element);
    const articleAlbum = document.createElement("article");
    const divImg = document.createElement("div");
    const imgAlbum = document.createElement("img");

    const divInfo = document.createElement("div");
    const divInfoArtistYear = document.createElement("div");
    const h5Artist = document.createElement("h5");
    const h5Year = document.createElement("h5");

    const divInfoAlbumTitle = document.createElement("div");
    const h4AlbumName = document.createElement("h4");

    const divInfoPriceBuy = document.createElement("div");
    const h5Price = document.createElement("h5");
    const buttonBuy = document.createElement("button");

    articleAlbum.classList.add("article-album");
    divImg.classList.add("div-img");
    imgAlbum.src = element.img;
    imgAlbum.alt = element.title;

    divInfo.classList.add("div-info");
    divInfoArtistYear.classList.add("div-info-artist-year");
    h5Artist.classList.add("text3-medium");
    h5Year.classList.add("text3-medium");

    divInfoAlbumTitle.classList.add("div-info-album-title");
    h4AlbumName.classList.add("text1-bold");

    divInfoPriceBuy.classList.add("div-info-price-buy");
    h5Price.classList.add("text2-bold");
    buttonBuy.classList.add("text3-medium", "buttons-default", "buttons-buy");

    h5Artist.innerText = element.band;
    h5Year.innerText = element.year;
    h4AlbumName.innerText = element.title;
    h5Price.innerText = `R$ ${element.price},00`;
    buttonBuy.innerText = "Comprar";

    toAppendHere.appendChild(articleAlbum);
    articleAlbum.append(divImg, divInfo);
    divImg.append(imgAlbum);
    divInfo.append(divInfoArtistYear, divInfoAlbumTitle, divInfoPriceBuy);
    divInfoArtistYear.append(h5Artist, h5Year);
    divInfoAlbumTitle.appendChild(h4AlbumName);
    divInfoPriceBuy.append(h5Price, buttonBuy);

    return articleAlbum;
  });
}

function buttonsListenner(products, mainArticles) {
  let gen = 0;

  categories.forEach((element) => {
    let actualGen = element;
    let button = document.querySelector(`.button-${actualGen}`);
    console.log(button);
    button.addEventListener("click", (event) => {
      event.preventDefault();
      separateByGendder(products, mainArticles, gen, actualGen);
      console.log("click");
    });
  });
  // console.log(gen);
  // console.log(actualGen);
}

function separateByGendder(products, mainArticles, gen, actualGen) {
  console.log(categories[gen]);
  genNumber = categories.indexOf(categories[gen]);
  console.log(genNumber);
  // console.log(gen)
  // console.log(products);
  let filtered = products.filter((element) => element.category === gen);
  mainArticles.innerHTML = "";
  createCardsAlbums(filtered, mainArticles);
  // console.log(filtered);
}
