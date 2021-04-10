var faker = require('faker');

var database = []

for(var i=0;i<50;i++){
    database.push({
       id:i,
       title:faker.commerce.productName(),
       desc:faker.commerce.productDescription(),
       price:parseInt(faker.commerce.price()),
       img:"http://bestjquery.com/tutorial/product-grid/demo4/images/img-1.jpg"
    });
}

console.log(JSON.stringify(database));