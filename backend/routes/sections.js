var express = require('express');
var router = express.Router();
const Sections = require('../schemas/Sections.schema');

/* GET sections listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', async function(req, res, next) {
  const {name, description }= req.body ;
  const newSection = await Sections.create({
      name,
      description,
      createdAt: new Date()
  });
  res.send(newSection);
});
router.put('/', async function(req, res, next) {
  const {_id, name, description }= req.body ;
  const updatedSection = await Sections.findByIdAndUpdate (_id,
    {
      name,
      description
  },{new:true});
  res.send(updatedSection);
});
router.delete('/', async function(req, res, next) {
  const {_id }= req.body ;
  const deletedSection = await Sections.findByIdAndUpdate(_id,
    {
        isVisible:false
    },{new:true});
  res.send(deletedSection);
});

module.exports = router;
