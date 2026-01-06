# Software Development Principles and Patterns

A comprehensive guide to software development principles and design patterns, including clear explanations and code examples.

## Part 1: Software Development Principles and Patterns

### General Principles

#### S.O.L.I.D. Principles
- Single Responsibility Principle (SRP) 
##### https://medium.com/@ro-zcn/solid-1-single-responsibility-principle-typescript-589d680676f8
- Open/Closed Principle (OCP) 
##### https://medium.com/@ro-zcn/solid-2-open-closed-principle-typescript-afd70b34dd8a
- Liskov Substitution Principle (LSP) 
##### https://ro-zcn.medium.com/solid-3-liskov-substitution-principle-typescript-322042ddf516
- Interface Segregation Principle (ISP) 
##### https://ro-zcn.medium.com/solid-4-interface-segregation-principle-typescript-452db671ac5c
- Dependency Inversion Principle (DIP)
##### https://ro-zcn.medium.com/solid-5-dependency-inversion-typescript-c6b997592a52

- SOLID WITH TYPESCRIPT AND NESTJS
##### https://ro-zcn.medium.com/solid-in-nestjs-with-typescript-8643018c5e1c

#### More
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
#### https://ro-zcn.medium.com/i-wonder-if-the-builder-pattern-is-a-good-pattern-634726da89ce
- Singleton
#### https://ro-zcn.medium.com/singleton-pattern-with-typescript-2e0ce61c314b
- Dependency Injection
##### https://ro-zcn.medium.com/dependency-injection-pattern-with-typescript-4c6d45bdd877
- Service Locator
- Abstract Factory
- Factory Method
##### https://ro-zcn.medium.com/factory-method-using-typescript-c8e03674c3c0

#### Structural Patterns
- Adapter
##### https://ro-zcn.medium.com/adapter-pattern-typescript-and-joystick-example-f073675fedce
- Data Access Object (DAO)
- Query Object
- Decorator
##### https://ro-zcn.medium.com/decorators-with-typescript-f00254121fee
- Bridge
##### https://ro-zcn.medium.com/bridge-pattern-using-typescript-e8a3a11f0796

#### Behavioral Patterns
- Command
- Chain of Responsibility
- Strategy
##### https://ro-zcn.medium.com/strategy-pattern-with-typescript-4351d6e6fea3
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

### Additional Principles (Extended)
- Separation of Concerns (SoC)
- Principle of Least Astonishment (POLA)
- Fail Fast
- Information Hiding
- Convention over Configuration
- Design for Testability
- Robustness Principle (Postel’s Law)
- Rule of Three
- Avoid Premature Optimization
- Explicit is better than implicit

---

### Additional Design Patterns

#### Structural Patterns
- Facade
##### https://ro-zcn.medium.com/facade-pattern-explaining-with-typescript-60de67f337fa
- Flyweight
- Proxy

#### Behavioral Patterns
- Mediator
- Memento
- Null Object
- Event Aggregator

---

### Additional Anti-Patterns

#### Design Anti-Patterns
- God Object
- Shotgun Surgery
- Tight Coupling

#### Methodology Anti-Patterns
- Overengineering
- Reinventing the Wheel

---

## Part 2: Software Architecture Principles and Patterns

### Introduction to Software Architecture

---

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

---

### Hexagonal Architecture
- System building blocks
- Ports and adapters

---

### Additional Concepts
- Components
- Control flow
  - Using application services
  - CQRS without a Bus
  - CQRS with a Bus
- Testing

---

### Event-Driven Architecture
- Introduction
- Domain Events
- Context
- Event Sourcing
- Eventual Consistency

---

### Additional Architectural Styles & Patterns

#### Architectural Styles
- Layered Architecture
- Monolithic Architecture
- Microservices Architecture
- Service-Oriented Architecture (SOA)
- Pipe and Filter Architecture
- Serverless Architecture
- MVC / MVP / MVVM

#### Distributed and Resilience Patterns
- Saga Pattern
- Circuit Breaker
- Retry / Timeout
- Bulkhead
- Rate Limiter
- Producer–Consumer
- Thread Pool

#### Cloud and Microservices Patterns
- API Gateway
- Sidecar
- Strangler Fig
- Database per Service
- Backends for Frontends (BFF)

