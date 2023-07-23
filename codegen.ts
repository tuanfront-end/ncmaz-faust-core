import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "http://localhost/wordpress-2/graphql",
	documents: ["src/**/*.{tsx,ts,js,jsx}"],
	generates: {
		"./src/__generated__/": {
			preset: "client",
		},
	},
	ignoreNoDocuments: true,
};

export default config;
