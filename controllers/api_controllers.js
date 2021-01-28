var db = require("../models");
const convertToValues = require('../helpers/convertToValues');

function GetLocalISODate(){
  let yourDate = new Date();
  const offset = yourDate.getTimezoneOffset()
  yourDate = new Date(yourDate.getTime() - (offset*60*1000))
  return yourDate.toISOString().split('T')[0]
}

let todayIs = GetLocalISODate();
console.log(todayIs);

exports.undoMarkPresent = async function(req, res) {
    switch(req.params.section) {
      case "englishSection":
        const englishAtt = await db.Attendance.destroy(
          {where: {
              id: req.params.id
          }})
          ;
       res.status(200).json(englishAtt);
       break;
      case "mathSection":
        const mathAtt = await db.Attendance.destroy(
          {where: {
            id: req.params.id
          }}
          );
        res.status(200).json(mathAtt);
        break;
      case "scienceSection":
        const scienceAtt = await db.Attendance.destroy(
          {where: {
            id: req.params.id
          }}
          );
         res.status(200).json(scienceAtt);
         break;
      default:
        res.status(500).json({"Error":"No Student"})
}};

exports.getAttendanceRecord = async function(req, res) {
  //Get Attendance in a Count
    const arr1 = await db.Attendance.findAll({
    attributes: ['present',[db.Sequelize.fn('count', db.sequelize.col('present')),'count']],
    group: ['Attendance.present'],
    where: {'StudentId':req.params.id}
    });

  //Get All Sections
    const getSections = await db.Attendance.findAll({
      attributes: ['present','sectionId'],
      where: {'StudentId':req.params.id}
    });

   //Convert the Attendance and Sections into an array for arrays so it's structured as expected in the
   //calendar data
  let studentArray = convertToValues(JSON.parse(JSON.stringify(arr1)), JSON.parse(JSON.stringify(getSections)));
  
  res.status(200).json(studentArray);
};

exports.enroll = async function(req, res) {
  const sections = req.body.section;
  const student = req.body.student;
  sections.forEach( async(section)=> await db.sequelize.models.Enrollment.create(
    {StudentId: student,
     SectionId: section}));
  res.status(200).redirect("back");
};


exports.markPresent = async function(req, res) { 
  switch(req.params.section) {
    case "englishSection":
      const englishAtt = await db.Attendance.create(
        {StudentId: req.params.id,
         SectionId: 2,
         present: new Date()}
      );
     res.status(200).json(englishAtt);
     break;
    case "mathSection":
      const mathAtt = await db.Attendance.create(
        {StudentId: req.params.id,
         SectionId: 1,
         present: new Date()}
      );
      res.status(200).json(mathAtt);
      break;
    case "scienceSection":
      const scienceAtt = await db.Attendance.create(
              {StudentId: req.params.id,
               SectionId: 3,
               present: new Date()}
            ); 
       res.status(200).json(scienceAtt);
       break;
    default:
      res.status(500).json({"Error":"No Student"})
  } 
};
