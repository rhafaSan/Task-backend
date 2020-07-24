
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', table=>{
    table.increments('id').primary()
    table.string('desc').notNullable()
    table.timestamp('estimateAt')
    table.timestamp('doneAt')
    table.integer('userId').references('id')
      .inTable('users').notNullable()
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('tasks')
};
