import db from "#db/client";
import {faker} from "@faker-js/faker";
import {createEmployee} from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // Setup loop
    for (let i = 0; i < 10; i++) {
      // Create object
      const employee = {
        // Details to fill
        name: faker.person.fullName(),
        birthday: faker.date.birthdate({ years: 70}),
        salary: faker.number.int({min: 37000, max: 240000}),
      };
      await createEmployee(employee);
    }
  }

