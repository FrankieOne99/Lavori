import db from "./db";

export function createUser(email, password) {
  const result = db
    .prepare("INSERT INTO USERS (email,password) VALUES(?,?)")
    .run(email, password);

  return result.lastInsertRowid;
}
