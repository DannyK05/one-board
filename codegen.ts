import type { CodegenConfig } from "@graphql-codegen/cli";
import dotenv from "dotenv";

dotenv.config();

const apiUrl = process.env.REACT_APP_API_URL;

if (!apiUrl) {
  throw new Error("Missing REACT_APP_API_URL in .env file");
}

const config: CodegenConfig = {
  overwrite: true,
  schema: apiUrl,
  documents: "src/**/*.graphql",
  generates: {
    "src/codegen/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
