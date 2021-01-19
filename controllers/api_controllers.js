var db = require("../models");
const moment = require('moment');

const todayIs = moment().format('YYYY-MM-DD');

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

// exports.getStudents = async function(req, res) {
//   const event = await db.Students.findAll({
//    attributes: ['id', 'SectionName'],
//    include: [{
//        model: db.Students,
//        attributes: ['id','firstName','lastName'],
//        through: {attributes: []},
//        include:{
//            model: db.Attendance,
//            attributes: ['present'],
//            where: {"present": todayIs},
//            required: false
//        }
//        }] 
// })
//   res.status(200).json(event);
// };

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
