// COMMAND PATTERN EXAMPLE IN TYPESCRIPT
// -----------------------------------
// The goal of this pattern is to encapsulate a request as an object,
// so the sender of the request does not need to know how it is executed.

// 1. Command interface
// This interface declares a common method for all commands.
// Every command must implement the execute() method.
interface Command {
  execute(): void;
}

// 2. Receiver
// The Receiver is the object that actually performs the action.
// It contains the real business logic.
class Light {
  turnOn(): void {
    console.log("The light is ON");
  }

  turnOff(): void {
    console.log("The light is OFF");
  }
}

// 3. Concrete Command: Turn ON the light
// This class implements the Command interface.
// It stores a reference to the Receiver (Light)
// and calls the appropriate method on it.
class TurnOnLightCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  // The execute method delegates the action to the receiver
  execute(): void {
    this.light.turnOn();
  }
}

// 4. Concrete Command: Turn OFF the light
// This is another command, but it performs a different action.
class TurnOffLightCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

// 5. Invoker
// The Invoker does not know how the command works.
// It only knows that it can call execute() on a command.
class RemoteControl {
  private command!: Command;

  // The command can be changed at runtime
  setCommand(command: Command): void {
    this.command = command;
  }

  // This simulates pressing a button
  pressButton(): void {
    this.command.execute();
  }
}

// 6. Client code
// The client creates the receiver and the commands
// and assigns commands to the invoker.
const light = new Light();

const turnOnCommand = new TurnOnLightCommand(light);
const turnOffCommand = new TurnOffLightCommand(light);

const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton(); // The light is ON

remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton(); // The light is OFF