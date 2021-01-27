var db = require("../models");


function GetLocalISODate(){
  let yourDate = new Date();
  const offset = yourDate.getTimezoneOffset()
  yourDate = new Date(yourDate.getTime() - (offset*60*1000))
  return yourDate.toISOString().split('T')[0]
}

let todayIs = GetLocalISODate();
console.log(todayIs);

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
  res.render('index', {sections:students})
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