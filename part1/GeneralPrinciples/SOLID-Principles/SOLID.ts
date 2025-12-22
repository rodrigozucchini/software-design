import { Controller, Get, Post, Delete, Body, Param, Injectable } from '@nestjs/common';

/* =========================
   DOMAIN (Entity)
   SRP: Only represents data
========================= */

class User {
    constructor(
        public id: number,
        public name: string,
    ) {}
}

/* =========================
   REPOSITORY INTERFACE
   ISP + DIP: Small, focused abstraction
========================= */

interface UserRepository {
    findAll(): User[];
    save(user: User): void;
    deleteById(id: number): void;
}

/* =========================
   REPOSITORY IMPLEMENTATION
   Low-level module
========================= */

@Injectable()
class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    findAll(): User[] {
        return this.users;
    }

    save(user: User): void {
        this.users.push(user);
    }

    deleteById(id: number): void {
        this.users = this.users.filter(u => u.id !== id);
    }
}

/* =========================
   SERVICE
   SRP: Business logic only
   DIP: Depends on abstraction
========================= */

@Injectable()
class UserService {
    constructor(private readonly repository: UserRepository) {}

    getUsers(): User[] {
        return this.repository.findAll();
    }

    createUser(name: string): void {
        const user = new User(Date.now(), name);
        this.repository.save(user);
    }

    deleteUser(id: number): void {
        this.repository.deleteById(id);
    }
}

/* =========================
   CONTROLLER
   SRP: HTTP handling only
========================= */

@Controller('users')
class UserController {
    constructor(private readonly service: UserService) {}

    @Get()
    getAll() {
        return this.service.getUsers();
    }

    @Post()
    create(@Body('name') name: string) {
        this.service.createUser(name);
        return { message: 'User created' };
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this.service.deleteUser(Number(id));
        return { message: 'User deleted' };
    }
}
