var express = require('express');
var router = express.Router();
var databaseService = require('../services/DatabaseService');

router.get('/people', function(req, res) {
    databaseService.getPeopleWithNoCompany(req, res);
});

router.post('/person', function(req, res) {
    databaseService.createPerson(req, res);
});

router.post('/linkCompany', function(req, res) {
    databaseService.linkCompany(req, res);
});

router.get('/companies', function(req, res) {
    databaseService.getCompanies(req, res);
});

router.post('/company', function(req, res) {
    databaseService.createCompany(req, res);
});

router.post('/removeemployee', function(req, res) {
    databaseService.removeEmployee(req, res);
});

module.exports = router;
