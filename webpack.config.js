const { WebpackWarPlugin } = require( 'webpack-war-plugin' );

const override = ( config, env ) => {

  if ( env === 'production' ) {
    config.plugins.push(
      new WebpackWarPlugin( {
        archiveName : 'jenkins',
        webInf : 'public/WEB-INF',
        additionalElements : [
          { path : 'public/static', destPath : '/static' }
        ]
      } )
    );
  }

  return config;

};

module.exports = override;