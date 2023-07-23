const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const path = require("path");
const DefinePlugin = require("webpack").DefinePlugin;
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Sterling",
    projectName: "team-management",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@Sterling-shared"],
    // modify the webpack config however you'd like to by adding to this object
    devServer: {
      port: 8083,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      client: {
        webSocketURL: {
          port: 8083,
        },
      },
      allowedHosts: "all",
      https: true,
    },
    resolve: {
      alias: {
        "@sterlingAuth": path.resolve(__dirname, "src"),
      },
    },
    plugins: [
      new DefinePlugin({
        "process.env": JSON.stringify(dotenv.parsed),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["postcss-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "postcss-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  });
};
