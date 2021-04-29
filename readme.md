PSQL commands:

<!-- prettier-ignore -->
\connect babynames;

<!-- prettier-ignore -->
select count(*) from "Names";

sequelize db:migrate
sequelize db:migrate:undo:all
sequelize db:seed:all
sequelize db:seed:undo:all
