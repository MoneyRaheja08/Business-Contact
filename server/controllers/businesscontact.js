let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');



// create a reference to the model
let BusinessContact = require('../models/businesscontact');

module.exports.displayContactList = async(req,res,next) =>{try {
    //Retrieving the data from the database and sorting in ascending order
    let contactList = await BusinessContact.find({}).sort({name:1}).exec();
    res.render('contact/list', 
            {title: 'Business Contact', 
            ContactList: contactList , 
           displayName: req.user ? req.user.displayName : ''});  
} catch (error) {
    console.log(error.message);
}
}

/*module.exports.displayContactList = (req, res, next) => {
    BusinessContact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('contact/list', 
            {title: 'Business Contact', 
            ContactList: contactList , 
           displayName: req.user ? req.user.displayName : ''});      
        }
    });
}*/

module.exports.displayAddPage = (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact', 
    displayName: req.user ? req.user.displayName : ''})          
}

module.exports.processAddPage = (req, res, next) => {
    let newContact = BusinessContact({
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number
      
    });

    BusinessContact.create(newContact, (err, BusinessContact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/business-contact');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    BusinessContact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('contact/edit', {title: 'Edit CONTACT', contact: contactToEdit, 
            displayName: req.user ? req.user.displayName : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedContact = BusinessContact({
        "_id": id,
        "name": req.body.name,
        "email": req.body.email,
        "number": req.body.number
    });

    BusinessContact.updateOne({_id: id}, updatedContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business contact list
            res.redirect('/business-contact');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    BusinessContact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/business-contact');
        }
    });
}