import "dotenv/config"
import { defineConfig } from "drizzle-kit";
import { url } from "inspector";

export default defineConfig ({
    out: './drizzle',
    schema: './db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    }

});