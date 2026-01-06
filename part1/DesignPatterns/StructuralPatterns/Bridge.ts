// Bridge Pattern Example
// This example separates the abstraction (RemoteControl)
// from its implementation (Device).

// Device defines the interface for concrete implementations.
// The abstraction will interact with devices through this interface.
interface Device {
  turnOn(): void;
  turnOff(): void;
}

// Concrete implementation: TV
// Provides the actual behavior for a TV device.
class TV implements Device {
  turnOn(): void {
    console.log("TV is ON");
  }

  turnOff(): void {
    console.log("TV is OFF");
  }
}

// Concrete implementation: Radio
// Provides the actual behavior for a Radio device.
class Radio implements Device {
  turnOn(): void {
    console.log("Radio is ON");
  }

  turnOff(): void {
    console.log("Radio is OFF");
  }
}

// -----------------------------
// Abstraction side
// -----------------------------

// RemoteControl is the abstraction.
// It does NOT know concrete classes like TV or Radio.
// It only depends on the Device interface.
class RemoteControl {
  // Reference to the implementation
  protected device: Device;

  // The device is injected via the constructor.
  // This allows changing the implementation at runtime.
  constructor(device: Device) {
    this.device = device;
  }

  // High-level operation that delegates work to the device
  on(): void {
    this.device.turnOn();
  }

  // High-level operation that delegates work to the device
  off(): void {
    this.device.turnOff();
  }
}

// -----------------------------
// Client code
// -----------------------------

// Remote control working with a TV
const tvRemote = new RemoteControl(new TV());
tvRemote.on();   // Output: TV is ON
tvRemote.off();  // Output: TV is OFF

// Remote control working with a Radio
const radioRemote = new RemoteControl(new Radio());
radioRemote.on();   // Output: Radio is ON
radioRemote.off();  // Output: Radio is OFF
