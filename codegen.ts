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
    "src/codegen/hooks.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        reactApolloVersion: 4,
        apolloReactHooksImportFrom: "@apollo/client",
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
