import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });

  // Serve resume.pdf from client/public
  app.get('/resume.pdf', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/public/resume.pdf'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
