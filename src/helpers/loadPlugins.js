const loadPlugins = (fileNames) => {
  const requirePlugin = require.context("@/plugins", false, /\.js$/);
  let fileMap = {};
  for (const fileName of requirePlugin.keys()) {
    fileMap[fileName.replace("./", "")] = true;
  }
  for (const fileName in fileNames) {
    const fileNameWithExt = `${fileName}.js`;
    if (Object.prototype.hasOwnProperty.call(fileMap, fileNameWithExt))
      requirePlugin(`./${fileNameWithExt}`);
    else
      throw new Error(
        `No plugin found for ${fileName}. Did you spell the plugin filename correctly?`
      );
  }
};

export default loadPlugins;
