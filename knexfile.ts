import type { Knex } from "knex";
import "dotenv/config"

const {DB_PORT, DB_USER,DB_NAME,DB_HOST,DB_PASSWORD} = process.env

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
        connectionString:`${DB_USER}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
      filename: "knex_migration"
    },
    migrations:{
      directory:"./database/migrations/"
    }
    
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

export default config;
