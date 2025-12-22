//Dependency Inversion Principle (DIP)

// BAD EXAMPLE
// High-level module depends on a low-level concrete implementation
/*
class MySQLDatabase {
    connect(): void {
        console.log("Connected to MySQL");
    }
}

class UserService {
    private database: MySQLDatabase;

    constructor() {
        this.database = new MySQLDatabase(); // ❌ concrete dependency
    }

    saveUser(): void {
        this.database.connect();
        console.log("User saved");
    }
}

*/

// GOOD EXAMPLE
// Both high-level and low-level modules depend on abstractions

interface Database {
    connect(): void;
}

class MySQLDatabase implements Database {
    connect(): void {
        console.log("Connected to MySQL");
    }
}

class MongoDatabase implements Database {
    connect(): void {
        console.log("Connected to MongoDB");
    }
}

class UserService {
    private database: Database;

    constructor(database: Database) {
        this.database = database; // ✅ dependency injected
    }

    saveUser(): void {
        this.database.connect();
        console.log("User saved");
    }
}
