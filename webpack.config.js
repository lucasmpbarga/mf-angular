const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf_angular",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/bootstrap.js",
      },
      shared: {
        // "@angular/core": {
        //   singleton: true,
        //   requiredVersion: "auto",
        // },
        // "@angular/common": {
        //   singleton: true,
        //   requiredVersion: "auto",
        // },
        // "@angular/router": {
        //   singleton: true,
        //   requiredVersion: "auto",
        // },
      },
    }),
  ],
};
