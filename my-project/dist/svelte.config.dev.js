"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _adapterAuto = _interopRequireDefault(require("@sveltejs/adapter-auto"));

var _vitePluginSvelte = require("@sveltejs/vite-plugin-svelte");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @type {import('@sveltejs/kit').Config} */
var config = _defineProperty({
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: (0, _vitePluginSvelte.vitePreprocess)(),
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: (0, _adapterAuto["default"])()
  }
}, "preprocess", (0, _vitePluginSvelte.vitePreprocess)());

var _default = config;
exports["default"] = _default;
//# sourceMappingURL=svelte.config.dev.js.map
