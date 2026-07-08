// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n){return n!=n}var r=Number.POSITIVE_INFINITY;function t(){var t;return function(u){if(0===arguments.length)return void 0===t?null:t;(void 0===t||u>t||n(u)||u===t&&function(n){return 0===n&&1/n===r}(u))&&(t=u);return t}}function u(){var n=t();return function(r){if(0===arguments.length)return n();return n(function(n){return Math.abs(n)}(r))}}function e(){var r=u();return function(t){if(0===arguments.length||n(t))return r();return r(t)}}export{e as default};
//# sourceMappingURL=mod.js.map
