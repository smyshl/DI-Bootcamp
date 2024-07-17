const { products } = require("./products.js");

function product_search(product_name){
    for (let product of products) {
        if (product.name === product_name){
            console.log(`Found product ${product.name} at price ${product.price} from ${product.category} category`);
            return;
        }
    }
    console.log(`No "${product_name}" found in products`);
};

product_search("papaya");