module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',  // Ensures Babel targets the current Node.js version
          },
        },
      ],
    ],
  };
  