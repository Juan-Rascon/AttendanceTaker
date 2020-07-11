//Variables
const dateSelect = $('#date');
const companySelect = $('#companyName');
const eventTitle = $('#event-title');
const eventSection = $('#event-section');
const eventName = $('#event-name');
const eventP = $('#event-p');
const companyChoice = $('#company-choice');
const companies = $('#companies');

//Ajax call to get Event Types
function getEvents() {
    return $.ajax({
        url: "/api/events?eventtype-name=dashboardViewed&source-name=Nova&version-number=1&start-date=2017-01-01T10%3A10%3A10&end-date=2021-01-01T10%3A10%3A10",
        method: "GET",
    });
};

function generateInfo(data) {
    const group = _.groupBy(data, {"organizationName": "Avrobio"});
    const order = _.orderBy(data, 'occurredAt', 'desc');
    console.log(order);
    console.log(group);
    console.log(group.true.length);
    console.log(group.false.length);

    eventName.html(`${data[0].typeName} Events`);
}

//Generates Dates to select
function generateDate(data) {
    console.log(data.length);
    const order = _.sortBy(data, 'occurredAt');
    //Filters by source to populate Date Drop Down
    _.forEach(order, (value, key) => {
        // console.log(key + JSON.stringify(value));
        const source = $(`<option value='${value.occurredAt}'>${value.occurredAt}</option>`);
        dateSelect.append(source);
    });
};

//Generates Company Names to select
function generateCompany(data) {
    const sort = _.sortBy(data, "organizationName");
    //Generates Company Name for drop down menu
     _.forEach(sort, (value, key) => {
       const event = $(`<option value='${value.organizationName}'>${value.organizationName}</option>`);
       companySelect.append(event);
    });

    // Click Event to filter event name from Date Drop Down
    companySelect.on('change', () => {
        //Put in a clear function to erase info in number of events field
        //Filters through Objects with Source Name that was chosen
        const group = _.groupBy(data, {"organizationName": `${companySelect.val()}`});
        console.log(group);

        eventTitle.html(`Number of Events: ${data.length}`);
        let newUL = $('<ul></ul>');
        let newLI = $(`<li>Number of Events by ${companySelect.val()}: ${group.true.length}</li>`);
        let anotherLI = $(`<li>Number of Events by ${group.false[0].organizationName}: ${group.false.length}</li>`);
        newUL.append(newLI, anotherLI)
        eventSection.append(newUL);

        _.forEach(group, (value, key) => {
            const plotPoints = [];
            const date = value.forEach(object => {
                return object.occurredAt;
            }); 
            const points = {
                date: date,
                event: value.length
            };
            plotPoints.push(points);
            console.log(date);
            console.log(plotPoints);

            "use strict"; 

            if($('#m_chart_2').length > 1)
                Morris.Line({
                element: 'm_chart_2',
                data: plotPoints,
                xkey: 'date',
                ykeys: ['event'],
                labels: ['OSF'],
                pointSize: 3,
                fillOpacity: 0,
                lineWidth:2,
                pointFillColors:['#fff'],
                pointStrokeColors:['#00acf0'],
                behaveLikeLine: true,
                hideHover: 'auto',
                gridLineColor: '#eaecec',
                lineColors: ['#00acf0'],
                resize: true,
                smooth:false,
                gridTextColor:'#5e7d8a',
                gridTextFamily:"Inherit"
                
            });
         });
        
    });

    //Returns object that has the organizationName from the source name
    const find = _.find(data, {"organizationName": `${companySelect.val()}`});
    console.log(find);

    //Creates an oject with only the properties needed/wanted to show data
    console.log(_.pick(data, ['eventData', 'occurredAt', 'organizationName']));
};

//Filter API Object and Populate Selector
getEvents().then( data => {
    generateInfo(data);
    generateDate(data);
    generateCompany(data);
});