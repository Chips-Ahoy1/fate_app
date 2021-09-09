module.exports = function(api) {
  var validEnv = ['development', 'test', 'production']
  var currentEnv = api.env()
  var isDevelopmentEnv = api.env('development')
  var isProductionEnv = api.env('production')
  var isTestEnv = api.env('test')

  if (!validEnv.includes(currentEnv)) {
    throw new Error(
      'Please specify a valid `NODE_ENV` or ' +
        '`BABEL_ENV` environment variables. Valid values are "development", ' +
        '"test", and "production". Instead, received: ' +
        JSON.stringify(currentEnv) +
        '.'
    )
  }

  return {
    presets: [
      '@babel/preset-flow',
      '@babel/preset-react',
      '@babel/preset-env',
    ],
    plugins: [
      'babel-plugin-macros',
      '@babel/plugin-syntax-dynamic-import',
      'babel-plugin-dynamic-import-node',
      '@babel/plugin-transform-destructuring',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-proposal-private-methods',
      '@babel/plugin-proposal-private-property-in-object',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-transform-regenerator',
      'babel-plugin-transform-react-remove-prop-types'
    ]
  }
}
