const container = document.getElementById('my-container');

window.onload = getAllProducts

async function getAllProducts() {
    const url = 'products.json'

    try {
        const myStringData = await fetch(url)
        const myJSONData = await myStringData.json()
        for (let i = 0; i < myJSONData.length; i++) {
            container.innerHTML +=
                `
                 <div class="product-card">
            <a href="#" class="product-top">
                <div class="product-img">
                <img src="${myJSONData[i].productImage}"
                    alt="${myJSONData[i].productName}">
                </div>
                <h4 class="product-name">${myJSONData[i].productName}</h4>
            </a>
            <div class="product-info-wrapper">
                <div class="product-info">
                    <span>Qiymet</span>
                    <h3 class="product-discount">${myJSONData[i].price} <i class="fa-solid fa-manat-sign"></i></h3>
                    <h4 class="product-price"><del>${myJSONData[i].discount} <i class="fa-solid fa-manat-sign"></i></del></h4>
                </div>
                <div class="product-btns">
                ${myJSONData[i].isSold ? `<button disabled class="disabled-btn">stokda yoxdur</button>` : `<button>Almaq</button>`}
                    <a href="#" tabindex="1"><i tabindex="1" class="fa-regular fa-heart"></i></a>
                </div>
            </div>
        </div>
                `
        }
    }
    catch (e) {

    }
}
