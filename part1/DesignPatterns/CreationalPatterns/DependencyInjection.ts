//Dependency Injection


//Sending message by email, maybe tomorrow I want to change email to sms
//BAD
/*
class EmailService {
  send(message: string) {
    console.log("Email sent:", message);
  }
}

class NotificationService {
  private emailService = new EmailService();

  notify(message: string) {
    this.emailService.send(message);
  }
}
*/

// SOLUTION
// We want to send notifications.
// Today by email, tomorrow by SMS or another channel.
// The notification service SHOULD NOT change.


// INTERFACE (ABSTRACTION)
// Defines WHAT can be done, not HOW.
// NotificationService will depend on this, not on concrete classes.
interface MessageSender {
  send(message: string): void;
}

// CONCRETE IMPLEMENTATION: EMAIL
// Follows the MessageSender contract
class EmailSender implements MessageSender {
  send(message: string) {
    console.log("Email sent:", message);
  }
}

// CONCRETE IMPLEMENTATION: SMS
// Another way to send messages, same interface
class SmsSender implements MessageSender {
  send(message: string) {
    console.log("SMS sent:", message);
  }
}

// MAIN CLASS
// It DOES NOT create EmailSender or SmsSender
// It RECEIVES the dependency from outside (this is DI: dependeny injection)
class NotificationService {
  constructor(private sender: MessageSender) {}
  // ↑ Dependency is injected through the constructor

  notify(message: string) {
    // It doesn't know if this is email or SMS
    // It only uses what was provided
    this.sender.send(message);
  }
}

// We choose the implementation FROM THE OUTSIDE
const emailNotification = new NotificationService(new EmailSender());
emailNotification.notify("Your order was shipped");

const smsNotification = new NotificationService(new SmsSender());
smsNotification.notify("Your code is 1234");