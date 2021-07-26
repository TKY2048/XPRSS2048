module.exports = {
  'name': 'default',
  'type': 'mysql',
  'host': 'localhost',
  'port': 3306,
  'username': 'root',
  'password': 'password',
  'database': 'express',
  'synchronize': true,
  'logging': false,
  'entities': [
    './dist-server/db/entities/*.js'],
  'subscribers': [
    'src/subscriber/*.js',
  ],
  'migrations': [
    'src/migration/*.js',
  ],
  'cli': {
    'entitiesDir': 'src/entities',
    'migrationsDir': 'src/migration',
    'subscribersDir': 'src/subscriber',
  },
};
