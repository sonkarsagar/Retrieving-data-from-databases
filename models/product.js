const Cart = require('./cart');
const db=require('../util/database')

module.exports = class Product{
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save(){
    return db.execute('INSERT INTO products (title, price, description, imageURL) VALUES (?,?,?,?)',[this.title,this.price,this.description,this.imageUrl])
  }

  static deleteById(id){
    return db.execute("DELETE FROM products WHERE products.id=?",[id])
  }

  static fetchAll(){
    return db.execute('SELECT * FROM products')
  }

  static findById(id){
    return db.execute("SELECT * FROM products WHERE products.id=?",[id])
  }
};
