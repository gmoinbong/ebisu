import img1 from "../assets/collection1.jpg";
import img2 from "../assets/collection2.jpg";
import img3 from "../assets/Man1.jpg";
import img4 from "../assets/Woman1.jpg";
import img5 from "../assets/WEB2.jpg";

import ashtray from "../assets/Ashtray.jpg";

const SHOP_MAN = "SHOP MEN"
const SHOP_WOMAN = 'SHOP WOMAN'
const SHOP_NOW = 'SHOP NOW'

export const collectionData1 = {
  title: "- SINCE 1991 -",
  subtitle: "EVISU COLLECTION",
  image1: img1,
  image2: img2,
  button1Text: SHOP_MAN,
  button2Text: SHOP_WOMAN,
};

export const BlockData1 = {
  title: "Kamon Wooden Ashtray",
  subtitle: "Upon Net purchase of EUR420 or above",
  image1: ashtray,
  button1Text: SHOP_NOW
}

export const collectionData2 = {
  title: "- BEYOND DENIM BEYOND BLACK -",
  subtitle: "EVISUKURO COLLECTION",
  image1: img3,
  image2: img4,
  button1Text: SHOP_MAN,
  button2Text: SHOP_WOMAN,
};
export const BlockData2 = {
  title: "Pick Your Pattern",
  subtitle: "Spring Summer Collection 2023",
  image1: img5,
  button1Text: SHOP_NOW
}
export const availableSizes = ['XS', 'S', 'M', 'L', 'XL'];

export const mainCountries = [
  'United States',
  'China',
  'Ukraine',
  'Germany',
  'United Kingdom',
  'France',
  'Japan',
  'Brazil',
  'Australia',
  'Canada',
];

export const collectionOptions = ['Evisu'];
export const categoryOptions = ['t-shirt', 'shorts', 'shirt', 'pants', 'cap', 'jeans', 'skirt', 'jacket'];
export const genderOptions = ['KID', 'MEN', 'UNISEX', 'woman'];
export const sizeOptions = ['xs', 's', 'm', 'l', 'xl'];
export const colorOptions = ['white', 'black', 'indigo', 'beige', 'blue'];