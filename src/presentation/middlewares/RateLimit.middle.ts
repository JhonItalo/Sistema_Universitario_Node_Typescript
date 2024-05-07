import rateLimit from "express-rate-limit";

const ratelimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 50, // número máximo de solicitações por IP
  message: "Você atingiu o limite de solicitações. Tente novamente mais tarde.",
});

export default ratelimiter;
