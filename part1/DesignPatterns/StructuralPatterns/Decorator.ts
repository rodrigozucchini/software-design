/**
 * DECORATOR PATTERN EXAMPLE (TypeScript, Single File)
 *
 * Scenario:
 * - We want to add extra behavior (logging) to a method
 *   without modifying its original implementation.
 * - The Decorator Pattern allows us to wrap functionality
 *   around an existing method dynamically.
 */

/**
 * Method Decorator
 * This decorator intercepts the method call,
 * logs its name and arguments, and then executes
 * the original method.
 */
function Log(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
): void {
  // Save a reference to the original method
  const originalMethod = descriptor.value;

  // Replace the method with a decorated version
  descriptor.value = function (...args: any[]) {
    console.log(`[LOG] ${name} called with:`, args);

    // Execute the original method
    return originalMethod.apply(this, args);
  };
}

/**
 * Concrete class
 * The class itself is not aware of the logging behavior.
 * The decorator adds that responsibility externally.
 */
class Test {
  @Log
  sum(a: number, b: number): number {
    return a + b;
  }
}

/**
 * Usage
 */
const t = new Test();
t.sum(2, 3);

/**
 * Output:
 * [LOG] sum called with: [ 2, 3 ]
 */
