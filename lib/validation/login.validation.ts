import * as zod from "zod";

export const registerSchema = zod.object({
  name: zod.string().min(3, "Votre nom doit contenir 3 caractères"),
  email: zod.string().email("L'email n'est pas valide!"),
  password: zod
    .string()
    .min(12, "Votre mot de passe doit contenir 12 caractères"),
});

export const connexionSchema = zod.object({
  email: zod.string().email("L'email n'est pas valide!"),
  password: zod
    .string()
    .min(12, "Votre mot de passe doit contenir 12 caractères"),
});
