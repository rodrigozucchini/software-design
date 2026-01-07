/*
  The DAO pattern abstracts and encapsulates all access to the data source.
  The business logic interacts with the DAO instead of accessing data directly.
*/

/* =========================
   Domain Model (Entity)
   ========================= */

// Represents a User entity in the system
interface User {
  id: number;
  name: string;
  email: string;
}

/* =========================
   DAO Interface
   ========================= */

// Defines the contract for data access operations
// The application depends on this interface, not on a concrete implementation
interface UserDAO {
  getById(id: number): User | null;
  getAll(): User[];
  save(user: User): void;
  delete(id: number): void;
}

/* =========================
   DAO Concrete Implementation
   ========================= */

// In-memory implementation of UserDAO
// This class is responsible for how data is stored and retrieved
class UserMemoryDAO implements UserDAO {
  // Simulates a database using an array
  private users: User[] = [];

  // Returns a user by id or null if not found
  getById(id: number): User | null {
    return this.users.find(user => user.id === id) || null;
  }

  // Returns all users
  getAll(): User[] {
    return this.users;
  }

  // Saves a new user in memory
  save(user: User): void {
    this.users.push(user);
  }

  // Deletes a user by id
  delete(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}

/* =========================
   Business Logic / Usage
   ========================= */

// The business layer only knows about the DAO interface
// It does not know how or where the data is stored
const userDAO: UserDAO = new UserMemoryDAO();

// Create users
userDAO.save({ id: 1, name: "Alice", email: "alice@mail.com" });
userDAO.save({ id: 2, name: "Bob", email: "bob@mail.com" });

// Read a single user
const user = userDAO.getById(1);
console.log("User with id 1:", user);

// Read all users
console.log("All users:", userDAO.getAll());

// Delete a user
userDAO.delete(2);

// Verify deletion
console.log("Users after deletion:", userDAO.getAll());

/*
  Key idea:
  - The DAO hides the data source details
  - Business logic depends on abstractions, not implementations
  - Changing the storage (DB, API, file, etc.) requires changes only in the DAO
*/
