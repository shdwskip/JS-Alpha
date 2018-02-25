'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "alignment_id" to table "superheroes"
 *
 **/

var info = {
    "revision": 11,
    "name": "superhero-has-alignment-column",
    "created": "2018-02-24T15:48:01.511Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "superheroes",
        "alignment_id",
        {
            "type": Sequelize.INTEGER,
            "allowNull": false
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
