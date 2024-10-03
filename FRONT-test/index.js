fetch("http://localhost:3000/api/v1/tshirts/")
  .then((res) => res.json())
  .then((tshirts) => {
    console.log(tshirts);
    runTest(tshirts);
  });

const runTest = (tshirts) => {
  const app = document.querySelector("#app");

  const reduce = (key) => {
    return (
      tshirts.reduce((acc, tshirt) => acc + tshirt.price[key], 0) /
      tshirts.length
    ).toFixed(2);
  };

  const resume = `
    <article id="resume">
      <p>Total tshirts: ${tshirts.length}</p>
      <p>Media Current Price:  ${reduce("currentPrice")} €</p>
      <p>Media Previus Price: ${reduce("previousPrice")} €</p>
      <p>Media Discount: ${reduce("discount")} € | -${(
    (reduce("discount") / reduce("previousPrice")) *
    100
  ).toFixed(2)} %</p>
    </article>
  `;

  app.innerHTML += resume;
  for (const tshirt of tshirts) {
    const cardHTML = `
      <article>
        <img src="${tshirt.img}" alt="${tshirt.name}">
        <h2>${tshirt.name}</h2>
        <p>Current Price: ${tshirt.price.currentPrice} €</p>
        <p>Previous Price: ${tshirt.price.previousPrice} €</p>
        <p>Discount: ${tshirt.price.discount} €</p>
      </article>
    `;

    app.innerHTML += cardHTML;
  }
};
