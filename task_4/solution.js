// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON

    let data = JSON.parse(json);
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    return data.products;
}

function renderProductsCards(json) {
// Аргументом функции является JSON
    clearProducts();
    let products = parseProducts(json);
    let length = products.length;
    for (let i = 0; i < length; i +=1) {
    addProduct(products[i]);
}
}
