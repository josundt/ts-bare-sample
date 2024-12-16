import tsBrowserConfig from "@josundt/eslint-config/ts-browser";

export default [
    {
        ...tsBrowserConfig,
        files: ["src/**/*.ts"]
    }
];
