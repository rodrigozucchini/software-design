/**
 * ADAPTER PATTERN EXAMPLE (Single File)
 *
 * Scenario:
 * - The PC expects a device that connects via USB.
 * - We have an old joystick that only supports PS2.
 * - An adapter is used to make the old joystick compatible with USB.
 */

/**
 * Target interface
 * This is the interface the PC expects.
 */
interface USBJoystick {
  connectUSB(): void;
}

/**
 * Adaptee
 * Old joystick that only knows how to connect via PS2.
 */
class OldJoystick {
  connectPS2(): void {
    console.log("Joystick connected by port: PS2");
  }
}

/**
 * Adapter
 * Translates USB calls into PS2 calls.
 * It implements the interface expected by the PC
 * and internally uses the old joystick.
 */
class JoystickAdapter implements USBJoystick {
  private oldJoystick: OldJoystick;

  constructor(oldJoystick: OldJoystick) {
    this.oldJoystick = oldJoystick;
  }

  connectUSB(): void {
    // Adapter translates the USB connection request
    // into a PS2 connection
    this.oldJoystick.connectPS2();
  }
}

/**
 * Client code (PC)
 * Works only with the USBJoystick interface.
 * It does not know or care if an adapter is used.
 */
function connectJoystick(joystick: USBJoystick): void {
  joystick.connectUSB();
}

/**
 * Usage
 */
const oldJoystick = new OldJoystick();                // PS2 joystick
const adaptedJoystick = new JoystickAdapter(oldJoystick); // Adapter

connectJoystick(adaptedJoystick); // Works through the adapter
