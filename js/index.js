import { productsList } from "./products_list.js";
import { productsPage } from "./products_page.js";
import { productsQuickView } from "./products_page.js";

const app = {};

app.init = async () => {
  productsList();
  productsPage();
  productsQuickView();
};

app.init();
