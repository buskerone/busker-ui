// Metro configuration for the mobile app (Expo + pnpm monorepo)
// Ensures that all packages resolve the same React instance,
// which is required when using shared libraries like @buskerone/primitives.

const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

/** @type {import('metro-config').ConfigT} */
const createConfig = () => {
  const projectRoot = __dirname;
  const workspaceRoot = path.resolve(projectRoot, "../..");

  const config = getDefaultConfig(projectRoot);

  // Make sure Metro watches the whole monorepo (so packages/* changes are picked up)
  config.watchFolders = [workspaceRoot];

  // Tell Metro where to resolve node_modules from (app + workspace root)
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
  ];

  // Ensure a single React instance is used across app and packages
  config.resolver.disableHierarchicalLookup = true;
  config.resolver.extraNodeModules = {
    ...(config.resolver.extraNodeModules || {}),
    react: path.resolve(workspaceRoot, "node_modules/react"),
  };

  return config;
};

module.exports = createConfig();
