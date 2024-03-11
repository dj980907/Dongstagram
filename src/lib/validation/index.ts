import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, {message: 'I am sure your name is longer than that...'}),
    username: z.string().min(2,{message: 'choose your username to be longer!'}),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Anyone can hack into THAT short of a password...'}),
    
  })