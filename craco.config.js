const CracoAlias = require("craco-alias");
const { resolve } = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "src", // this is from where all search in files will start
        aliases: {
          "@": resolve(__dirname, "src"),
          "@components": resolve(__dirname, "src/components"),
          "@pages": resolve(__dirname, "src/pages"),
          "@util": resolve(__dirname, "src/utils"),
          "@routes": resolve(__dirname, "src/routes"),
          "@test": resolve(__dirname, "src/test"),
          "@config": resolve(__dirname, "src/config"),
          "@hooks": resolve(__dirname, "src/hooks"),
          "@css": resolve(__dirname, "src/css"),
          "@apis": resolve(__dirname, "src/apis"),
          "@redux": resolve(__dirname, "src/features"),
        },
      },
    },
  ],
};
