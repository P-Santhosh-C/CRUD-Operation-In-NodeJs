const express = require("express");
const contacts = require("./contacts");
const app = express();

app.use(express.json());

app.get("/contacts", (request, response) => {
  response.status = 200;
  response.header({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
  });
  response.send(contacts.getDetails());
  response.status = 200;
  response.end();
});

app.get("/contacts/:contactName", (request, response) => {
  const contact = contacts.getContactsByName(request.params.contactName);
  if (!contact) {
    res
      .status(400)
      .json({ msg: `No meber whit name of ${req.params.contactName}` });
  } else {
    response.status = 200;
    response.header("Content-type", "application/json");
    response.send(contact);
    response.end();
  }
});

app.delete("/contacts/:contactName", (request, response) => {
  const contact = contacts.deleteContactByName(request.params.contactName);
  if (!contact) {
    res
      .status(400)
      .json({ msg: `No meber whit name of ${req.params.contactName}` });
  } else {
    response.status = 200;
    response.header("Content-type", "application/json");
    response.send(contact);
    response.end();
  }
});

app.post("/contacts", (request, response) => {
  let added = contacts.addContact(request.body);
  response.send(added);
});

app.put("/contacts/:name", (request, response) => {
  let update = contacts.updateContact(request.params.name, request.body);
  if (update) response.send(update);
  else response.status(404).send("customer not updated");
});

app.get("*", (req, res) => {
  res.status(404).send("not found");
});

app.listen(3001, (err) => {
  if (err) throw err;
  console.log("Listening on port 3001");
});
