# Software Development Principles and Patterns

A comprehensive guide to software development principles and design patterns, including clear explanations and code examples.


## Part 1: Software Development Principles and Patterns

### General Principles

- **S.O.L.I.D. Principles**
  - Single Responsibility Principle (SRP)
  - Open/Closed Principle (OCP)
  - Liskov Substitution Principle (LSP)
  - Interface Segregation Principle (ISP)
  - Dependency Inversion Principle (DIP)
- Don’t Repeat Yourself (DRY)
- Inversion of Control (IoC)
- You Aren’t Gonna Need It (YAGNI)
- Keep It Simple, Stupid (KISS)
- Law of Demeter (LoD)
- Strive for loosely coupled design between interacting objects
- Composition over inheritance
- Encapsulate what varies
- The Four Rules of Simple Design
- The Boy Scout Rule
- Last Responsible Moment

---

### Design Patterns

#### Creational Patterns
- Builder
- Singleton
- Dependency Injection
- Service Locator
- Abstract Factory
- Factory Method

#### Structural Patterns
- Adapter
- Data Access Object (DAO)
- Query Object
- Decorator
- Bridge

#### Behavioral Patterns
- Command
- Chain of Responsibility
- Strategy
- Template Method
- Interpreter
- Observer
- State
- Visitor
- Iterator

---

### JEE Patterns
- Introduction
- Intercepting Filter
- Front Controller
- Dispatcher View
- Business Delegate
- Value Object
- Session Facade
- Composite Entity
- Transfer Object Assembler
- Value List Handler
- Service Locator
- Data Access Object
- Service Activator

---

### Anti-Patterns

#### Design Anti-Patterns
- The Blob
- Lava Flow
- Ambiguous Viewpoint
- Functional Decomposition
- Poltergeists
- Spaghetti Code
- Input Kludge

#### Methodology Anti-Patterns
- Golden Hammer
- Cut-and-Paste Programming

#### Management Anti-Patterns
- Continuous Obsolescence
- Mushroom Management
- Dead End
- Boat Anchor
- Walking through a Minefield

---

## Part 2: Software Architecture Principles and Patterns

### Introduction to Software Architecture

### DDD: Domain-Driven Design

#### Building Blocks
- Entities
- Value Objects
- Modules
- Services
- Aggregates
- Repositories
- Factories

#### Strategic Design
- Introduction
- Bounded Context
- Subdomains
- Relationships Between Bounded Contexts
  - Shared Kernel
  - Customer / Supplier
  - Anti-Corruption Layer

---

### Command–Query Responsibility Segregation (CQRS)
- Command
- Query

---

### Clean Architecture

#### Layers
- Domain Layer
- Application Layer
- Infrastructure Layer

#### Hexagonal Architecture
- System building blocks
- Ports and adapters

#### Additional Concepts
- Components
- Control flow
  - Using application services
  - CQRS without a Bus
  - CQRS with a Bus
- Testing
- Event-Driven Architecture
  - Introduction
  - Domain Events
  - Context
- Event Sourcing
- Eventual Consistency
