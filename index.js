class Product {
    constructor(name, price, currency, quantity) {
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.quantity = quantity;
    }

    getProductInfo() {
        return `name ${this.name} price ${this.price} currency ${this.currency} quantity ${this.quantity} `
    }

    buyProduct(quantity) {
       return quantity * this.price;
    }
}

class PhysicalProduct extends Product {
    constructor(name, price, currency, quantity, weight) {
        super(name, price, currency, quantity);
        this.weight = weight;
    }

    getProductInfo() {
        return `name ${this.name} price ${this.price} weight ${this.weight} currency ${this.currency} quantity ${this.quantity}`
    }
}


class VirtualProduct extends Product {
    constructor(name, price, currency, quantity, memorySize) {
        super(name, price, currency, quantity, memorySize);
        this.memorySize = memorySize;
    }

    getProductInfo() {
        return ` name ${this.name} price ${this.price} currency ${this.currency} quantity ${this.quantity} memorySize ${this.memorySize}`
    }
}



const product = new Product('Cookies', 10, 'euro', 5);

console.log(product.getProductInfo());
console.log(product.buyProduct(45));
const physicalProduct = new PhysicalProduct('Cookies', 10, 'euro', 5, 300);

console.log(physicalProduct.getProductInfo());


const virtualProduct = new VirtualProduct('coffee', 7, 'euro', 7 , 8);
console.log(virtualProduct.getProductInfo());