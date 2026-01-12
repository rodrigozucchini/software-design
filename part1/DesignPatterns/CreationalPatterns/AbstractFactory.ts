// ===== Product interfaces =====

// Button interface
interface Button {
  render(): void;
}

// Checkbox interface
interface Checkbox {
  render(): void;
}

// ===== Concrete products =====

// Windows Button
class WindowsButton implements Button {
  render(): void {
    console.log("Render Windows Button");
  }
}

// Mac Button
class MacButton implements Button {
  render(): void {
    console.log("Render Mac Button");
  }
}

// Windows Checkbox
class WindowsCheckbox implements Checkbox {
  render(): void {
    console.log("Render Windows Checkbox");
  }
}

// Mac Checkbox
class MacCheckbox implements Checkbox {
  render(): void {
    console.log("Render Mac Checkbox");
  }
}

// ===== Abstract Factory =====

interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// ===== Concrete Factories =====

// Windows factory creates Windows components
class WindowsFactory implements UIFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

// Mac factory creates Mac components
class MacFactory implements UIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// ===== Client code =====

function renderUI(factory: UIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.render();
}

// Usage
const windowsFactory = new WindowsFactory();
renderUI(windowsFactory);

const macFactory = new MacFactory();
renderUI(macFactory);
