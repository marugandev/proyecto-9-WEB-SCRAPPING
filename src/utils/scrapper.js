const puppeteer = require("puppeteer");
const fs = require("fs");

const tshirtsArray = [];

const scrapper = async (url) => {
  console.log(url);

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage();

  await page.goto(url);

  await page.waitForSelector("#CybotCookiebotDialogBodyButtonDecline");
  await page.click("#CybotCookiebotDialogBodyButtonDecline");

  await repeat(page);

  await browser.close();
};

const repeat = async (page) => {
  const arrayArticleProducts = await page.$$(".product-card");

  for (const element of arrayArticleProducts) {
    let img = await element.$eval(".img-product", (img) => img.src);

    let name = await element.$eval(".nombre-producto", (na) =>
      na.textContent.trim()
    );

    let currentPrice = await element.$eval(".precio-actual", (pr) =>
      parseFloat(pr.textContent.slice(0, pr.textContent.length - 1))
    );

    let previousPrice = await element.$eval(".precio-tachado", (pr) =>
      parseFloat(pr.textContent.slice(0, pr.textContent.length - 1))
    );

    let discount = parseFloat((previousPrice - currentPrice).toFixed(2));

    const tshirt = {
      img,
      name,
      price: {
        currentPrice,
        previousPrice,
        discount
      }
    };

    if (!tshirtsArray.some((el) => el.name === tshirt.name)) {
      tshirtsArray.push(tshirt);
    }
  }

  const isHidden = await page.$(
    ".valign-text-middle.buttonm.boton-negro.oculto"
  );
  if (!isHidden) {
    await page.$eval(".valign-text-middle.buttonm.boton-negro", (el) =>
      el.click()
    );

    await page.waitForNavigation();

    await repeat(page);
  } else {
    write(tshirtsArray.splice(1, tshirtsArray.length - 1));
  }
};

const write = (tshirtsArray) => {
  fs.writeFile("tshirts.json", JSON.stringify(tshirtsArray), () => {
    console.log(".json created ⚡️⚡️");
  });
};

module.exports = { scrapper };
