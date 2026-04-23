import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-identifiy-key");

    if (!success) {
      res.status(429).json({
        message: "Too many requests",
      });
    }

    next();
  } catch (error) {
    console.log("Error in rateimiter ", error);
    next(error);
  }
};

export default rateLimiter;
