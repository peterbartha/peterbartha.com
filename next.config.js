module.exports = {
  async rewrites() {
    return [
      {
        source: "/deno-playground",
        destination: `https://deno-playground.peterbartha.com`,
      },
      {
        source: "/deno-playground/:path*",
        destination: `https://deno-playground.peterbartha.com/:path*`,
      },
    ];
  },
};
