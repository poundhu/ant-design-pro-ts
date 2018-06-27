export default {
  plugins: [
    ['umi-plugin-dva'],
    [
      "umi-plugin-polyfill",
      {
        extend: ["url-polyfill"]
      }
    ],
    [
      "umi-plugin-routes",
      {
        update(routes) {
          return [...require("./src/pages/_routes"), ...routes];
        }
      }
    ],
  ],
  hashHistory: true
};
