module.exports = {
  output: {
    buildConfig: [
      {
        buildType: 'bundle',
        sourceMap: false,
        bundleOptions: {
          skipDeps: false,
        },
      },
      {
        enableDts: true,
        dtsOnly: true,
      },
    ],
  },
};
