//businesscontact.js Money Raheja 301276615 19/02/2023
let express = require('Express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//connect to our book model
//let Book = require('../models/book');

//helper function for guard purposes
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
let contactController = require('../controllers/businesscontact');

/* GET route for the Book List Page - READ operation */
router.get('/', contactController.displayContactList);

/* GET route for the displaying Add Page - Create Operation */
router.get('/add', requireAuth,contactController.displayAddPage);

/* POST route for processing the Add Page - Create Operation */
router.post('/add',requireAuth, contactController.processAddPage);

/* GET route for the displaying Edit Page - Update Operation */
router.get('/edit/:id',requireAuth, contactController.displayEditPage);

/* Post route for processing the Edit page- Update Operation */
router.post('/edit/:id', requireAuth,contactController.processEditPage);

/* GET to perdom the DELETION - Update Operation */
router.get('/delete/:id',requireAuth, contactController.performDelete );

/* GET to perdom the DELETION - Update Operation */
//router.get('/edit/delete/:id',requireAuth, contactController.performDelete );

module.exports = router;