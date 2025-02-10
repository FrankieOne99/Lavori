"use server";

import { createAuthSession } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  let errors = {};

  if (!email.includes("@")) {
    errors.mail = "Please enter a valid email";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be 8 characters long at least";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors: errors,
    };
  }
  const hashedPassword = hashUserPassword(password);
  //Posso utilizzare un try/catch per gestire il caso in cui venga inserita un email valida ma già esistente

  try {
    const id = createUser(email, hashedPassword);
    await createAuthSession(id);
    redirect("/training");
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "It seems like an account for the chosen email already exist",
        },
      };
    }
    throw error;
  }
}
