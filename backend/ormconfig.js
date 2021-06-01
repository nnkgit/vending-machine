"use strict";
exports.__esModule = true;
exports["default"] = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "rootpw",
    database: "vending_machine_db",
    synchronize: false,
    logging: false,
    entities: [
        "src/entity/**/*.ts"
    ],
    migrations: [
        "src/migration/**/*.ts"
    ],
    subscribers: [
        "src/subscriber/**/*.ts"
    ],
    cli: {
        entitiesDir: "src/entity",
        migrationsDir: "src/migration",
        subscribersDir: "src/subscriber"
    }
};
