// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: { //an object or a string
      filename: './data/produce.db3' //from the root folder, not from current location
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }, //used for sqlite
    seeds: {
      directory: './data/seeds'
    },
  },

};

// to create a migration -> knex migrate:make [name]
// to run all pending migrations -> knex migrate:latest
// to undo migrations -> knex migrate:rollback