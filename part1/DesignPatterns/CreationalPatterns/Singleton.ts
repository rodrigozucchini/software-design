// ConfigSingleton.ts
// Singleton Pattern example in TypeScript
// This class ensures that only ONE instance exists in the entire application

class ConfigSingleton {
  // Holds the single instance of the class
  private static instance: ConfigSingleton | null = null;

  // Example shared data
  public readonly appName: string;

  // Private constructor
  // Prevents creating instances using "new" from outside the class
  private constructor() {
    this.appName = "My Application";
  }

  // Public static method to access the single instance
  public static getInstance(): ConfigSingleton {
    // If the instance does not exist, create it
    if (this.instance === null) {
      this.instance = new ConfigSingleton();
    }

    // Always return the same instance
    return this.instance;
  }
}

// Usage example
const config1 = ConfigSingleton.getInstance();
const config2 = ConfigSingleton.getInstance();

// Both variables point to the same object in memory
console.log(config1.appName); // "My Application"
console.log(config1 === config2); // true
