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
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
        update(routes) {
          return [...require("./src/pages/_routes"), ...routes];
        }
      }
    ],
  ],
  hashHistory: true
};
