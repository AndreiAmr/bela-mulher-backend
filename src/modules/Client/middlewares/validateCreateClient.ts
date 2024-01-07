import { z } from "zod";

const schema = z.object({
  name: z.string().min(3).max(255),
  phone: z.string().min(10).max(11),
});

export const validateCreateClient = (req: any, res: any, next: any): void => {
  const { name, phone } = req.body;

  const isValid = schema.parse({ name, phone });

  if (!isValid) {
    res.status(400).json({ message: "Invalid data" }).send();
    return;
  }

  next();
};
