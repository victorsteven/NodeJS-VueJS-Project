export default {
  port: process.env.PORT || 8082,
  db: {
    database: process.env.DB_NAME || 'node_vue',
    user: process.env.DB_USER || 'steven',
    password: process.env.DB_PASS || 'password',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './node_vue.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
};
