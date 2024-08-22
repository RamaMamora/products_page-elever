import { fetchProducts } from "./fetch_data.js";
import { productPageTmpl, productQuickTmpl } from "./templates.js";

let products = await fetchProducts();

export function productsPage() {
  const productsPageContainer = document.querySelector(
    ".product-page-container"
  );
  if (productsPageContainer) {
    let search = location.search;
    let productID = new URLSearchParams(search).get("id");
    console.log(productID);

    let findProduct = products.find((product) => product.id == productID);
    console.log(findProduct);

    productsPageContainer.insertAdjacentHTML(
      "beforeend",
      productPageTmpl(findProduct)
    );
  }
}
export function productsQuickView() {
  const productsQuickContainer = document.querySelector(".hurtigvis");
  if (productsQuickContainer) {
    const btnQuick = document.querySelectorAll(".buttonQuick");

    btnQuick.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let getBtnId = e.target.getAttribute(id);
        console.log(getBtnId);
        let findProduct = products.find((product) => product.id == getBtnId);
        console.log(findProduct);

        productsQuickContainer.insertAdjacentHTML(
          "beforeend",
          productQuickTmpl(findProduct)
        );
      });
    });
  }
}
