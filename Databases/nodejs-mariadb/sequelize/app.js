const config = require('./db-config.json');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config);

const Superhero = sequelize.define('superhero', {
    name: Sequelize.STRING,
    secret_identity: {
        type: Sequelize.STRING,
        unique: true,
    },
    power_level: Sequelize.INTEGER,
    hero_type: Sequelize.STRING,
}, {
    freezeTableName: true,
});

const Alignment = sequelize.define('alignment', {
    character_type: Sequelize.STRING,
});

// Alignment.hasMany(Superhero, {
//     foreignKey: 'hero_type',
//     sourceKey: 'character_type',
// });

// Superhero.hasOne(Alignment, {
//     foreignKey: 'hero_type',
//     targetKey: 'character_type',
// });

const superhero = {
    name: 'Batman',
    secretIdentity: 'Bruce Wayne',
    powerLevel: 3,
};

const alignment = {
    character_type: 'good',
};

const run = async () => {
    await sequelize.sync();
    await Superhero.create(superhero);
    await Alignment.create(alignment);
    (await Superhero.findAll())
    .forEach((hero) => console.log(`${hero.id} ${hero.name}`));
};

run();
