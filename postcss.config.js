module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue({ file }) {
        return file.indexOf("node_modules/vant") !== -1 ? 37.5 : 75;
      },
      propList: ["*"],
    },
  },
};
