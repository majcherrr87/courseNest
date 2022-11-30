const addProduct = (currentBasket, name, price, count = 1) =>
    [
        ...currentBasket,
        {
            name,
            price,
            count,
        }
    ];

const itemNames = basket => basket.map(item => item.name);

const priceSum = basket => basket.reduce((prev, curr) => prev + curr.price * curr.count, 0);

const basket1 = addProduct([],'bread',2.5);
const basket2 = addProduct(basket1,'cucumber', 4, 5);
console.log(itemNames(basket2));
console.log(priceSum(basket2))

