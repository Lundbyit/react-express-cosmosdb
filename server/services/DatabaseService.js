const Company = require('../models/Company');
const Person = require('../models/Person');

require('../mongo').connect();

function getCompanies(req, res) {
    const query = Company.find({});
    query
        .populate({ path: 'employees', model: 'Person' })
        .exec()
        .then(companies => {
            return res.json(companies);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

function createCompany(req, res) {
    const { name } = req.body;
    const company = new Company({ name });

    company
        .save()
        .then(() => {
            res.json(company);
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

function removeEmployee(req, res) {
    const { companyId, employeeId } = req.body;

    Company.findOne({ _id: companyId })
        .then(company => {
            const index = company.employees.indexOf(employeeId);

            if (index > -1) {
                company.employees.splice(index, 1);

                company.save().then(() => {
                    removeCompany(employeeId).then(person => {
                        res.json(person);
                    });
                });
            } else {
                res.status(500).send('Could not find employee');
            }
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

function addEmployee(companyId, employeeId) {
    return new Promise((resolve, reject) => {
        Company.findOne({ _id: companyId })
            .then(company => {
                company.employees.push(employeeId);
                company.save().then(() => {
                    resolve(company);
                });
            })
            .catch(err => {
                reject(err);
            });
    });
}

function getPeopleWithNoCompany(req, res) {
    const query = Person.find({ company: null });
    query
        .exec()
        .then(persons => res.json(persons))
        .catch(err => {
            res.status(500).send(err);
        });
}

function createPerson(req, res) {
    const { name, companyId } = req.body;

    const person = new Person({ name, companyId });

    person
        .save()
        .then(result => {
            if (companyId) {
                addEmployee(companyId, result._id)
                    .then(() => {
                        res.json(person);
                    })
                    .catch(err => {
                        throw err;
                    });
            } else {
                res.json(person);
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });
}

function linkCompany(req, res) {
    const { companyId, personId } = req.body;

    Person.findOne({ _id: personId })
        .then(person => {
            person.company = companyId;
            person.save().then(result => {
                if (companyId) {
                    addEmployee(companyId, result._id).then(() => {
                        res.json(person);
                    });
                } else {
                    res.json(person);
                }
            });
        })
        .catch(err => {
            res.status(500).send(err);
        });
}

function removeCompany(personId) {
    return new Promise((resolve, reject) => {
        Person.findOne({ _id: personId })
            .then(person => {
                person.company = null;
                person.save().then(() => {
                    resolve(person);
                });
            })
            .catch(err => {
                reject(err);
            });
    });
}

module.exports = {
    getCompanies,
    createPerson,
    removeEmployee,
    getPeopleWithNoCompany,
    createCompany,
    linkCompany
};
