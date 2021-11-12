let contacts = [
  {
    contactName: "John Peter",
    designation: "Vice President",
    organization: "ABC Electronics",
    city: "Bloomington",
    email: "john@abc.com",
    mobile: "+143545454",
    landline: "34343333",
  },
  {
    contactName: "santhosh",
    designation: "developer",
    organization: "developer",
    city: "Bloomington",
    email: "john@abc.com",
    mobile: "+143545454",
    landline: "34343333",
  },
];

module.exports.getDetails = function () {
  return contacts;
};

module.exports.getContactsByOrganization = (organization) => {
  let name = contacts.filter(
    (contact) => contact.organization === organization
  );
  return name;
};

module.exports.getContactsByName = (name) => {
  let data = contacts.filter((contact) => contact.contactName === name);
  return data;
};

module.exports.deleteContactByName = (name) => {
  let data = contacts.filter((contact) => contact.contactName !== name);
  return data;
};

module.exports.addContact = (newContact) => {
  contacts.push(newContact);
  return;
};

module.exports.updateContact = (contactName, newcontact) => {
  const contact = contacts.find((contact) => {
    return contact.contactName === contactName;
  });
  if (contact) {
    contact.designation = newcontact.designation;
    contact.organization = newcontact.organization;
    contact.city = newcontact.city;
    contact.mobile = newcontact.mobile;
    contact.landline = newcontact.landline;
  }
  return contact;
};
