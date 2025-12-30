// ===== Subsystem =====
// Each class represents an internal part of the system.
// These classes may have many methods, but the client should not use them directly.

class CPU {
  start() {
    console.log('CPU started');
  }

  reset() {
    console.log('CPU reset');
  }
}

class Memory {
  load() {
    console.log('Memory loaded');
  }
}

class Disk {
  readBootSector() {
    console.log('Disk reading boot sector');
  }
}

class PowerSupply {
  supply() {
    console.log('Power supply providing energy');
  }
}

class OperatingSystem {
  boot() {
    console.log('Operating system booting');
  }
}

class Network {
  connect() {
    console.log('Network connected');
  }

  disconnect() {
    console.log('Network disconnected');
  }
}

class Display {
  on() {
    console.log('Display turned on');
  }
}

// ===== Facade =====
// Provides a simple interface for a complex process.
// It coordinates multiple subsystems in the correct order.

class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();
  private disk = new Disk();
  private power = new PowerSupply();
  private os = new OperatingSystem();
  private network = new Network();
  private display = new Display();

  // Single public method that hides all internal complexity
  startWorkSession() {
    this.power.supply();
    this.cpu.start();        // Uses start(), not reset()
    this.memory.load();
    this.disk.readBootSector();
    this.os.boot();
    this.network.connect();  // Uses connect(), not disconnect()
    this.display.on();
  }
}

// ===== Client =====
// The client only interacts with the facade, not with the subsystems.

const computer = new ComputerFacade();
computer.startWorkSession();
