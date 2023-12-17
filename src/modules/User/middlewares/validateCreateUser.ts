import zod from "zod";

const createUserSchema = zod.object({
  name: zod.string().min(3).max(25),
  email: zod.string().email(),
  password: zod.string().min(6),
  nickname: zod.string().min(3).max(25).optional(),
});

export const validateCreateUser = async (req: any, res: any, next: any) => {
  try {
    const { name, email, password, nickname } = req.body;

    createUserSchema.parse({ name, email, password, nickname });

    next();
  } catch (err: any) {
    res.status(400).json({ message: err });
  }
};
