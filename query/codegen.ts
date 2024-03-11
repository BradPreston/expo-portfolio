import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://gql.hashnode.com/",
	documents: "query/queries.ts",
	generates: {
		"query/graphql/gql/": {
			preset: "client",
			plugins: []
		}
	}
};

export default config;
