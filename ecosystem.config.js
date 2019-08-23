module.exports = {

  apps: [
    {
      name: 'live-server-app',
      script: 'app.js',
      error_file: 'logs/err.log',
      out_file: 'logs/out.log',
      watch: true,
      time: true,
      ignore_watch: [
        'media', 'logs', 'assert', '.git'
      ],
      env: {
        PORT: 6990,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 6990,
        NODE_ENV: 'production'
      }
    }, {
      name: 'live-server',
      script: 'nms.js',
      error_file: 'logs/err_nms.log',
      out_file: 'logs/out_nms.log'
    }
  ]
}