const env = process.env.NODE_ENV || 'development';

process.env['DEBUG'] = 'wee*';

if (env === 'development') {
  process.env.PORT = 3000;
} else if (env === 'test') {
  process.env.PORT = 3000;
}
