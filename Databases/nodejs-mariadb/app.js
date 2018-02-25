const sql = require('./sql');
const database = require('./db-config.json');


const allSuppliers = `
SELECT CONCAT(first_name,' ',last_name) AS Supplier
FROM suppliers;`;

const productsCost = `
SELECT product_name, standard_cost from products ORDER BY standard_cost DESC;`;

sql.setup(database);

// PROMISES
// sql.execute(allSuppliers)
//     .then((results) =>
//         results.forEach((row) =>
//             console.log(row.Supplier)));

// sql.execute(productsCost)
//     .then((results) =>
//         results.forEach((row) =>
//     console.log(`${row.product_name}: ${row.standard_cost}`)));

// async & await
const run = async () => {
    const suppliers = await sql.execute(allSuppliers);
    suppliers.forEach((row) =>
        console.log(row.Supplier));
    const productsByCost = await sql.execute(productsCost);
    productsByCost.forEach((row) =>
        console.log(`${row.product_name}: ${row.standard_cost}`));
};

run();
