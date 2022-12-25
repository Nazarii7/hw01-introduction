const { addContact } = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      console.log("invoke list");
      break;

    case "get":
      console.log("invoke get");
      break;

    case "add":
      console.log("invoke add", name);
      await addContact(name, email, phone);
      break;

    case "remove":
      console.log("invoke remove");
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
}

//invokeAction({ action: "list" });
invokeAction({ action: "get" });
invokeAction({
  action: "add",
  name: "Cyrus Franks",
  email: "scelerisqiue@magnis.org",
  phone: "(186) 568-3620",
});
//invokeAction({ action: "remove" });
