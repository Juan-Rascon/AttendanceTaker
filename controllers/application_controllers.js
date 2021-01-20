const myConfig = require('../chart/chartConfigurarion');
var db = require("../models");
const moment = require('moment');

const todayIs = moment().format('YYYY-MM-DD');

exports.test = async function(req, res) {
  let students = await db.Sections.findAll({
    attributes: ['id', 'SectionName'],
    include: [{
        model: db.Students,
        attributes: ['id','firstName','lastName'],
        through: {attributes: []},
        include:{
            model: db.Attendance,
            attributes: ['present', 'id', 'SectionId'],
            where: {"present":todayIs},
            required: false
        }
        }] 
 })
  students= JSON.parse(JSON.stringify(students));
  res.render('test', {sections:students})
};

exports.index = async function(req, res) {
  let students = await db.Sections.findAll({
    attributes: ['id', 'SectionName'],
    include: [{
        model: db.Students,
        attributes: ['id','firstName','lastName'],
        through: {attributes: []},
        include:{
            model: db.Attendance,
            attributes: ['present', 'id', 'SectionId'],
            where: {"present":todayIs},
            required: false
        }
        }] 
 })
  students= JSON.parse(JSON.stringify(students));
  res.render('test', {sections:students})
}


exports.report =  async function(req, res) {
  const event = await db.Sections.findAll({
    attributes: ['id', 'SectionName'],
    include: [{
        model: db.Students,
        attributes: ['id','firstName','lastName'],
        through: {attributes: []},
        include:{
            model: db.Attendance,
            attributes: ['present'],
            where: {"present": todayIs},
            required: false
        }
        }] 
 })

  // zingchart.render({
  //   id:'Ms Manzo\'s Roll Call',
  //   data: myConfig
  // });

  res.render("events/report");
};

exports.admin = async function(req, res) {
     const students = await db.Students.findAll({
      attributes: ['id','firstName','lastName'],
      order: [['firstName', 'ASC']],
      raw: true})

      const sections = await db.Sections.findAll({
        attributes: ['id','SectionName'],
        raw:true
      })
  res.render('events/admin',{enrollment:{students:students, sections:sections}});
};