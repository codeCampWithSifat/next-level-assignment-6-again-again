/** @type {import('next').NextConfig} */

// another combine
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")
const nextConfig = {
  reactStrictMode: true,
  forceSwcTransforms: true,
}

module.exports = nextConfig


// module.exports = {
//   experimental: {
//     forceSwcTransforms: true,
//   },
// }