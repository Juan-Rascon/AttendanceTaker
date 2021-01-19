'use strict';

const fs = require('fs');
const db = require('../models');

const newArr = [];
const sections = [1,2,3];
const studentList = db.Students.findAll({
  attributes: ['id'],
  raw: true})



studentList.then(resp => {resp.forEach(element => {
  sections.forEach(section =>{ 
    const record = {StudentId: element.id,SectionId: section }
    newArr.push(record);}
    )}
    )
    // let data = JSON.stringify(newArr);
    fs.writeFileSync('helpers/enrollment.json', JSON.stringify(newArr));});




 
