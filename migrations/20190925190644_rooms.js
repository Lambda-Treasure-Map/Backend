exports.up = function(knex) {
  return knex.schema.createTable("rooms", tbl => {
    tbl.increments();
    tbl.integer("room_id");
    tbl.string("description");
    tbl.string("coordinates");
    tbl.integer("elevation");
    tbl.enu("players", []);
    tbl.enu("items", []);
    tbl.enu("exits", []);
    tbl.integer("cooldown");
    tbl.enu("errors", []);
    tbl.enu("messages", []);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("rooms");
};
