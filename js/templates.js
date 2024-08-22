// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  `
        <p><b>${product.title}</b></p>
        <p><i>${product.price} kr</i></p>
        <img src="${product.image}${product.id}">
    <button><a href="page.html?id=${product.id}">Se produkt</a></button> 
    `;

export const productPageTmpl = (product) =>
  `
        <h2>${product.title}</h2>
        <p><i>${product.price} kr</i></p>
        <p>${product.description}</p>
        <img src="${product.image}${product.id}">
    <button><a href="index.html">tilbage</a></button> 
    `;
