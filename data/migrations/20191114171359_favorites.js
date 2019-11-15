exports.up = function(knex) {
    return knex.schema.createTable("favorites", table =>{
        table.increments();
        table.string("fav")
          .notNullable()
          .unique();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("favorites");
  };
