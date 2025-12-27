
//STRATEGY PATTERN
/*********************************************************************
 * BAD
 * No Strategy Pattern
 * Violates Open/Closed Principle
 *********************************************************************/
/*
  This class is responsible for sending notifications.
  The problem: it contains ALL notification logic.
  Every time we add a new notification type,
  we must MODIFY this class.
*/
class BadNotificationService {
  send(type: string, message: string): void {
    // Behavior is controlled by conditionals
    if (type === "email") {
      console.log(`Sending EMAIL: ${message}`);
    } else if (type === "sms") {
      console.log(`Sending SMS: ${message}`);
    } else if (type === "push") {
      console.log(`Sending PUSH: ${message}`);
    }
  }
}
// Usage of bad code
const badService = new BadNotificationService();
badService.send("email", "Welcome user");
badService.send("sms", "Your code is 1234");



//* SOLUTION
/*
  Strategy interface.
  It defines a contract that all notification strategies must follow.
*/
interface NotificationStrategy {
  send(message: string): void;
}

/*
  Concrete Strategy: Email notification.
  This class knows ONLY how to send emails.
*/
class EmailNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending EMAIL: ${message}`);
  }
}

/*
  Concrete Strategy: SMS notification.
*/
class SmsNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

/*
  Concrete Strategy: Push notification.
*/
class PushNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending PUSH: ${message}`);
  }
}

/*
  Context class.
  This is the service used by the API.
  It does NOT know the details of how notifications are sent.
  It delegates that responsibility to a strategy.
*/
class NotificationService {
  private strategy: NotificationStrategy;

  constructor(strategy: NotificationStrategy) {
    this.strategy = strategy;
  }

  // Executes the selected strategy
  notify(message: string): void {
    this.strategy.send(message);
  }

  // Allows changing behavior at runtime
  changeStrategy(strategy: NotificationStrategy): void {
    this.strategy = strategy;
  }
}

// Usage of good code
const service = new NotificationService(new EmailNotification());
service.notify("Welcome user");

// Change behavior without modifying the service
service.changeStrategy(new SmsNotification());
service.notify("Your code is 1234");

/*
  New strategy added WITHOUT modifying existing code.
*/
class WhatsAppNotification implements NotificationStrategy {
  send(message: string): void {
    console.log(`Sending WhatsApp: ${message}`);
  }
}

// Using the new strategy
service.changeStrategy(new WhatsAppNotification());
service.notify("Hello from WhatsApp");
