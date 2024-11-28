import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "http://ncmaz-faustjs.local/graphql",
	documents: ["src/**/*.{tsx,ts,js,jsx}", "!src/__generated__/**/*"],
	generates: {
		"./src/__generated__/": {
			preset: "client",
			presetConfig: {
				gqlTagName: "gql",
			},
		},
	},
	ignoreNoDocuments: true,
};

export default config;
