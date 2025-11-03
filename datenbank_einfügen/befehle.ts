import { DatabaseSync } from "node:sqlite";
const db = new DatabaseSync("2ahwii.db");
const insert = db.prepare("INSERT INTO students (name, birthdate, lieblingsfarbe) VALUES (?, ?, ?)");
insert.run("Max Conti, 2008-05-12, blau");
