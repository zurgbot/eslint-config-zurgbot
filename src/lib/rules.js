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
    console.log( `Unable to find ${plugin}, skipping.` );
    return {};
  }
}

module.exports = {
  loadPluginRules
};
