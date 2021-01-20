const Handlebars = require("handlebars");

module.exports = function (items, section, options){
    let test;
    let data;

    if (options.data) {
        data = Handlebars.createFrame(options.data);
      }
    
    if (!Array.isArray(items)|| !items.length){
        test = false;
    } else {
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (element.SectionId === section){
                test =true;
                if (data) {
                    data.dbRecord = element.id;
                  }
                break;
            } else {
                test = false;
            }
        }
    }
    if (test) {
        return options.fn(this,{data:data});
    }else{
        return options.inverse(this);
    }
};