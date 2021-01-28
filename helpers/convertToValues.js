module.exports = function CreateArr (AttArr, SectionArr){

    if (AttArr.length === 0){
        return [];
    }
      let newArr = [];
      AttArr.forEach(obj => {
        let arrItem = [];
        arrItem.push(obj.present, obj.count);
        SectionArr.forEach(obj2 => {
            if (obj2.present === obj.present){
                arrItem.push(ReturnSection(obj2.sectionId));
            }
        })
        newArr.push(arrItem);
      })
     return newArr;
  };

  function ReturnSection (key){
    switch (key) {
        case 1:
            return "Math"
        case 2:
            return "English"
        case 3:
            return "Science/Social Studies"
        default:
            break;
  }
  return
};