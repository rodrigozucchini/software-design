/**********************************************************************
 * PROVIDERS EXAMPLE FILE
 * This file contains SIMPLE and EDUCATIONAL examples of:
 * - React Provider (Context API)
 * - NestJS Provider (Dependency Injection)
 *
 * Purpose:
 * Show what a Provider is, how it works, and why it exists.
 * All comments are written in English for blog/educational use.
 *********************************************************************/


/* ================================================================
   REACT PROVIDER EXAMPLE
   ================================================================ */

import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * AuthContext
 * This context will hold the data we want to share globally.
 * The provider will inject these values into the component tree.
 */
type AuthContextType = {
  user: { name: string } | null;
  login: (name: string) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

/**
 * AuthProvider
 * This component is the PROVIDER.
 * It is responsible for:
 * - Creating the state
 * - Controlling the logic
 * - Exposing values to child components
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<{ name: string } | null>(null);

  // Business logic owned by the provider
  const login = (name: string) => {
    setUser({ name });
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * useAuth
 * Custom hook to consume the provider safely
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}

/**
 * Example consumer component
 * This component does NOT know how auth works.
 * It only consumes what the provider gives.
 */
function Profile() {
  const { user, login } = useAuth();

  if (!user) {
    return <button onClick={() => login('Rodrigo')}>Login</button>;
  }

  return <p>Welcome {user.name}</p>;
}

/* ================================================================
   NESTJS PROVIDER EXAMPLE
   ================================================================ */

import { Injectable, Controller, Get, Module } from '@nestjs/common';

/**
 * PostsService
 * This class is a PROVIDER in NestJS.
 * It contains business logic and can be injected anywhere.
 */
@Injectable()
export class PostsService {
  findAll(): string[] {
    return ['Post 1', 'Post 2', 'Post 3'];
  }
}

/**
 * PostsController
 * Controllers should be thin.
 * They delegate logic to providers.
 */
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts() {
    // The controller does not know how posts are built
    return this.postsService.findAll();
  }
}

/**
 * PostsModule
 * Modules connect providers and controllers.
 * NestJS Dependency Injection container is configured here.
 */
@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}

/**********************************************************************
 * KEY TAKEAWAYS (FOR BLOG)
 *
 * React Provider:
 * - Shares state and functions
 * - Avoids prop drilling
 * - Centralizes logic
 *
 * NestJS Provider:
 * - Encapsulates business logic
 * - Is injected automatically
 * - Improves decoupling and testability
 *
 * Same idea, different environments.
 *********************************************************************/
