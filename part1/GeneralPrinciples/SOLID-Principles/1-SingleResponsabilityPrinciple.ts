//Single Responsability Principle

//Problem, violate SRP, a class handle data and logic

//example

//BAD
class Cart {
    items: number[] = [];

    add(price: number) { // 1° responsability
        this.items.push(price);
    }

    total(): number { // 2° responsability
        return this.items.reduce((sum, price) => sum + price, 0); 
    }
} 


// SOLUTION

class CartItemAdder {
  private items: number[] = [];

  add(price: number) { 
    // single responsibility: add items to the cart
    this.items.push(price);
  }

  getItems(): number[] { 
    // this does NOT add a new responsibility
    // it only exposes the items managed by this class
    return this.items;
  }
}

class CartTotalCalculator {
  calculate(cart: CartItemAdder): number { 
    // single responsibility: calculate the total
    return cart.getItems().reduce(
      (sum, price) => sum + price,
      0
    );
  }
}