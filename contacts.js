const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.resolve(__dirname, "db/contacts.json");

//function for reading
async function readContact() {
  const contactRaw = await fs.readFile(contactsPath);
  const contactDB = JSON.parse(contactRaw);
  return contactDB;
}

//function for writing
async function writeContact(contactDB) {
  await fs.writeFile(contactsPath, JSON.stringify(contactDB, null, 2));
}

//function for adding
async function addContact(name, email, phone) {
  const contact = { id: nanoid(), name, email, phone };

  const contactDB = await readContact();
  contactDB.push(contact);

  await writeContact(contactDB);
}

module.exports = {
  addContact,
};
