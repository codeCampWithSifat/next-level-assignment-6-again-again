// another combine
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")

/** @type {import('next').NextConfig} */
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