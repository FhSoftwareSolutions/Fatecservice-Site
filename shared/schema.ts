import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Nova tabela para notícias
export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  summary: text("summary").notNull(),
  content: text("content").notNull(),
  image_url: text("image_url"),
  source_url: text("source_url").notNull(),
  source_name: text("source_name").notNull(),
  published_at: timestamp("published_at").notNull().defaultNow(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  category: text("category").default("technology"),
  featured: boolean("featured").default(false),
});

export const insertNewsSchema = createInsertSchema(news).omit({
  id: true,
  created_at: true,
});

export type InsertNews = z.infer<typeof insertNewsSchema>;
export type News = typeof news.$inferSelect;
