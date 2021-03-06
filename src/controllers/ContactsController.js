import ContactModel from '../model/ContactModel';

const contactsController = {};

contactsController.listContacts = (request, response, next) => {
  ContactModel.find({}).exec()
    .then(contacts => {
      return response.json(contacts);
    })
    .catch(err => {
      return next(`Error ${err}`);
    });
};

contactsController.showContactId = (request, response, next) => {
  ContactModel.findById(request.params._id).exec()
    .then(contact => {
      return response.json(contact);
    })
    .catch(err => {
      return next(`Error ${err}`);
    });
};

contactsController.removeContact = (request, response, next) => {
  ContactModel.findByIdAndRemove(request.params._id).exec()
      .then(contact => {
        return response.json(contact);
      })
      .catch(err => {
        return next(`Error ${err}`);
      });
};

contactsController.createContact = (request, response, next) => {
  const contact = new ContactModel({
    name: request.body.name,
    occupation: request.body.occupation,
    avatar: request.body.avatar,
  });

  contact.save()
    .then(contactToSave => {
      return response.json(contactToSave);
    })
    .catch(err => {
      return next(`Error ${err}`);
    });
};

contactsController.updateContact = (request, response, next) => {
  ContactModel.findById(request.params._id).exec()
    .then(contact => {
      contact.name = request.body.name || contact.name;
      contact.occupation = request.body.occupation || contact.occupation;
      contact.avatar = request.body.avatar || contact.avatar;

      return contact.save();
    })
    .then(contact => {
      return response.json(contact);
    })
    .catch(err => {
      return next(`Error ${err}`);
    });
};

export default contactsController;
