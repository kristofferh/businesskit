const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      exclude: /(node_modules)/,
      options: {
        presets: ["@babel/preset-react", "@babel/preset-typescript"],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
