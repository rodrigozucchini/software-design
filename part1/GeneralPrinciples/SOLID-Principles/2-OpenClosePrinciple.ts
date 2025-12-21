//Open/Closed Principle (OCP)

//You have a payment system.
//New payment methods appear frequently (Credit Card, PayPal, Crypto).
//You do not want to modify the core payment logic every time.

//PROBLEM 
class PaymentService2 {
  pay(type: string, amount: number) {
    if (type === "card") {
      console.log(`Paid ${amount} with card`);
    } else if (type === "paypal") {
      console.log(`Paid ${amount} with PayPal`);
    }
  }
}


//SOLUTION

// Defines the contract that all payment methods must follow
interface PaymentMethod {
  pay(amount: number): void;
}

// Concrete implementation of a card payment method
class CardPayment implements PaymentMethod {
  pay(amount: number) {
    console.log(`Paid ${amount} with card`);
  }
}

// Concrete implementation of a PayPal payment method
class PaypalPayment implements PaymentMethod {
  pay(amount: number) {
    console.log(`Paid ${amount} with PayPal`);
  }
}

// Uses a payment abstraction, allowing extension without modification
class PaymentService {
  constructor(private method: PaymentMethod) {}

  process(amount: number) {
    this.method.pay(amount);
  }
}

const payment = new PaymentService(new CardPayment());
payment.process(100);