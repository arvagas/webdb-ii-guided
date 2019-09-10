// changes we want to make
exports.up = function(knex) {
    // table called fruits
    return knex.schema.createTable('fruits', tbl => {
        // id: primary key, auto-increment, integer
        tbl.increments() // if no str is passed, defaults to 'id'
        
        // name: str up to 128, unique, required (not null)
        // tbl.text() works as well
        tbl.string('name', 128).unique().notNullable()

        // avg weight(oz): decimals
        tbl.decimal('avgWeightOz')

        // delicious: boolean
        tbl.boolean('delicious')
    })
};

// to revert changes from the up function
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
