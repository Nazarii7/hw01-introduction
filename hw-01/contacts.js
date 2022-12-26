const fs = require("node:fs/promises");
const path = require("node:path");
const { nanoid } = require("nanoid");
const contactsPath = path.resolve(__dirname, "./db/contacts.json");

//function for read
async function readContact() {
  try {
    const contactRaw = await fs.readFile(contactsPath, { encoding: "utf8" });
    const contacts = JSON.parse(contactRaw);
    return contacts;
  } catch (error) {
    console.error(error.message);
  }
}

async function listContacts() {
  try {
    const data = await readContact();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const data = await readContact();
    return data.find((contact) => contact.id === contactId);
  } catch (error) {
    console.error(error.message);
  }
}

//function for remove
async function removeContact(contactId) {
  try {
    const data = await readContact();
    const updateData = data.filter((contact) => contact.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(updateData, null, 2));
  } catch (error) {
    console.error(error.message);
  }
}

//function for add
async function addContact(name, email, phone) {
  try {
    const contactDB = await readContact();
    const contact = { id: nanoid(), name, email, phone };
    const updateContacts = [...contactDB, contact];
    await fs.writeFile(contactsPath, JSON.stringify(updateContacts, null, 2));
    return contact;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  addContact,
  removeContact,
  listContacts,
  getContactById,
};
