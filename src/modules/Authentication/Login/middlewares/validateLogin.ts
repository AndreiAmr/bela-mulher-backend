import zod from "zod";

const loginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
});

export const validateLogin = (req: any, resp: any, next: () => void) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (err: any) {
    resp.status(400).json({ message: err });
  }
};
