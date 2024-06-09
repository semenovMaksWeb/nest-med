import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const bdMain:TypeOrmModuleOptions = {
    type: 'postgres',
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1",
    database: "web",
    synchronize: true,
    autoLoadEntities: true,
  }