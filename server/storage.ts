import { users, type User, type InsertUser, news, type News, type InsertNews } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Modificando a interface para incluir métodos para notícias
export interface IStorage {
  // Métodos de usuário
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Métodos de notícias
  getNews(limit?: number, offset?: number): Promise<News[]>;
  getNewsById(id: number): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
  getFeaturedNews(limit?: number): Promise<News[]>;
  getLatestNews(limit?: number): Promise<News[]>;
  updateNewsFeatured(id: number, featured: boolean): Promise<void>;
}

// Substituindo MemStorage por DatabaseStorage
export class DatabaseStorage implements IStorage {
  // Métodos de usuário
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Métodos de notícias
  async getNews(limit = 20, offset = 0): Promise<News[]> {
    return db.select().from(news).limit(limit).offset(offset).orderBy(news.published_at);
  }
  
  async getNewsById(id: number): Promise<News | undefined> {
    const [newsItem] = await db.select().from(news).where(eq(news.id, id));
    return newsItem || undefined;
  }
  
  async createNews(newsItem: InsertNews): Promise<News> {
    const [createdNews] = await db
      .insert(news)
      .values(newsItem)
      .returning();
    return createdNews;
  }
  
  async getFeaturedNews(limit = 5): Promise<News[]> {
    return db.select().from(news).where(eq(news.featured, true)).limit(limit).orderBy(news.published_at);
  }
  
  async getLatestNews(limit = 10): Promise<News[]> {
    return db.select().from(news).limit(limit).orderBy(news.published_at);
  }
  
  async updateNewsFeatured(id: number, featured: boolean): Promise<void> {
    await db.update(news).set({ featured }).where(eq(news.id, id));
  }
}

export const storage = new DatabaseStorage();
