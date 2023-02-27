let shops = {
  Id: 1,
  shopName: "keya cosmetic",
  product: [
    "Bkash",
    "Rocket",
    "Mobile",
    "Leptop",
    "Computer",
    "Desktop",
    "LIight",
    "Shempo",
  ],
  review: 12000,
  isOpen: true,
  isClose: false,
};

let convertToJSON = JSON.stringify(shops);
console.log(typeof convertToJSON);

let convertJSONtoObject = JSON.parse(convertToJSON);
console.log(convertJSONtoObject);

let obj = {
  Id: 1,
  shopName: "keya cosmetic",
  product: [
    "Bkash",
    "Rocket",
    "Mobile",
    "Leptop",
    "Computer",
    "Desktop",
    "LIight",
    "Shempo",
  ],
  review: 12000,
  isOpen: true,
  isClose: false,
};
