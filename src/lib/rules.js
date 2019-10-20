/**
 * loadPluginRules
 * @description Only includes rules is plugin can successfully be loaded
 * @example loadPluginRules('eslint-plugin-react', {'react/jsx-curly-spacing': 'error'})
 */

function loadPluginRules( plugin, pluginRules = {}) {
  try {
    require( plugin );
    return {
      ...pluginRules
    };
  } catch ( e ) {
    return {};
  }
}

module.exports = {
  loadPluginRules
};

/**
 * loadPluginExtension
 * @description Only includes the extension ID warpped in an array if the plugin can successfully be loaded
 * @example loadPluginExtension('eslint-plugin-react', 'plugin:react/recommended')
 */

function loadPluginExtensions( plugin, extensionIds = []) {
  if ( !Array.isArray( extensionIds )) {
    extensionIds = [extensionIds];
  }
  try {
    require( plugin );
    return extensionIds;
  } catch ( e ) {
    return [];
  }
}

module.exports = {
  loadPluginExtensions,
  loadPluginRules
};
