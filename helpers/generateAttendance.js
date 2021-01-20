const moment = require('moment');
const db = require ('../models');

const todayIs = moment().format('YYYY-MM-DD');


const getAll =  db.Sections.findAll({
    attributes: ['id', 'SectionName'],
    include: [{
        model: db.Students,
        attributes: ['id','firstName','lastName'],
        through: {attributes: []},
        include:{
            model: db.Attendance,
            attributes: ['present', 'id', 'SectionId'],
            where: {[db.Sequelize.Op.and]:[
              {"present":todayIs},
            ]},
            separate: true,
            required: false
        }
        }] 
 })


// include:{
//     model: db.Attendance,
//     attributes: ['present'],
//     where: {"present": todayIs},
//     required: false
// }
// const getCurAttendance =  db.Students.findAll({
//     attributes: ['id', 'firstName', 'lastName'],
//     raw: true,
//     include: [{
//         model: db.Attendance,
//         where:{'present': todayIs}
//         }] 
//  })

//  function updateAttendance (AllObj, PresentObj) {
//     if (PresentObj.length === 0){
//         return AllObj;
//     } else {
//         PresentObj.forEach(element => {
//             console.log(element);
//         });
//     }

//  }
//  getAll.then(resp => {
//     console.log(JSON.parse(JSON.stringify(resp)))
//     console.log(resp.length)});

getAll.then(resp => {
        console.dir(JSON.parse(JSON.stringify(resp)),{depth: null})
        console.log(resp.length)});
    
//     resp.forEach(function (arrayItem,ind,resp) {
//     if (arrayItem["Attendances.Section.id"] === null){
//          let array1 = {...arrayItem, "Attendances.Section.id":1};
//          let array2 = {...arrayItem, "Attendances.Section.id":2};
//          let array3 = {...arrayItem, "Attendances.Section.id":3};
//          resp.splice(ind,1);
//          resp.push(array1, array2, array3)
//       }
//     });
//     // console.log(resp);
//     console.log(resp.length);
// })

// const students =  db.Students.findAll({
//     attributes: ['id', 'firstName', 'lastName'],
//     raw: true,
//     include: [{
//          model: db.Attendance,
//          include:[{
//              model:db.Sections,
//              attributes: ['SectionName'],
//              order:['id','DESC'],
//              required: false
//          }],
//          where: {present:todayIs},
//          required: false,
//          attributes: ['present']
//     }]
//      })
 
//   students.then(resp => {
//      console.log(JSON.stringify(resp,null,2))});

// const students = await db.Students.findAll({
//     order: [['firstName', 'ASC']],
//     attributes: ['id', 'firstName', 'lastName'],
//     raw: true,
//     include: [{
//          model: db.Attendance,
//          include:[{
//              model:db.Sections,
//              attributes: ['SectionName']
//          }],
//          where: {present:todayIs},
//          required: false,
//          attributes: ['present']
//     }]
//      })