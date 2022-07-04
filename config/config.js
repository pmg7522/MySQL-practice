import dotenv from "dotenv";
dotenv.config();

const {
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME
} = process.env

export const config = {
  development: {
    host: DATABASE_HOST,
    user: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME
  },
};