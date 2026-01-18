import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(5, "1 m"),
});

export async function rateLimit(key: string) {
  const { success } = await limiter.limit(key);
  return success;
}
