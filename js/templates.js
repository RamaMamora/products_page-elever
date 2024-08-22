// Template functions - hver function opfører sig som en HTML template.

export const productListTmpl = (product) =>
  `
  <div class="container"
        <h3><b>${product.title}</b></h3>
        <img src="${product.image}">
        <p><i>${product.price} kr</i></p>
        <article class="info">
    <button><a href="page.html?id=${product.id}">Se produkt</a></button> 
    <button id=“${product.id}”>Hurtigvisning</button>
    </article>
    </div>
    `;

export const productPageTmpl = (product) =>
  `
  <div class="container"
        <h2>${product.title}</h2>
        <p><i>${product.price} kr</i></p>
        <p>${product.description}</p>
        <img src="${product.image}">
    <button><a href="index.html">tilbage</a></button> 
   
    </div>
    `;
