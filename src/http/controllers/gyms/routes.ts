import { verifyJWT } from "@/http/middlewares/middleware";
import { FastifyInstance } from "fastify";

export async function gymsRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyJWT);
}
