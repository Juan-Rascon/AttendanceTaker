// Global constants
const chosenSourceName = $('#sourceName')
const chosenEventType = $('#eventTypeName')

// Use GET Ajax call to retrieve and display Event Type Names
const viewEventTypes = () => {
    return $.ajax({
        url: "/api/eventtypes",
        method: "GET"
    });
};

// Generate Source Name, i.e. Nova or Apollo 
const generateSourceName = (data) => {
    // return data with the key and its associated value
    // Filter by chosen Source via _.forEach lodash filter with parameters {key: value}
    _.forEach(data, (value, key) => {
        // Drop-down options
        const sourceName = $(`<option value='${value.source}'>${value.source}</option>`);
        chosenSourceName.append(sourceName);
    });

// Retrieve a Source Name value in order to return only the event of that Source Name (e.g. for Nova)
chosenSourceName.on("change", () => {
    // Filter data within chosen Source Name
    if (chosenSourceName.val() === "Select Source Name") {
    }
    else {
        // _.find filter to get objects with the required key value from the chosen Source Name
        const findSourceName = _.find(data, {"source":`${chosenSourceName.val()}`});
    //Generates Event Names
        generateEventTypeNames(findSourceName);
    }
    });
};

// Generate the list of Event Type Names to populate in the table
    // _.pick() filter to return an object with only the required keys 
const generateEventTypeNames = (data) => {
    // Array to use .forEach function
    const eventTypeNames = [];
    //  _.get filter to return the key value by getting the eventType from the object passed in from the parameter
    const eventType = _.get(data, "eventTypeName");
    eventTypeNames.push(eventType);
}

 // _.find filter to return object with the eventTypeName from the associated Source Name using
 // _.pick filter to return object with only the required keys from the previous object 

//  Create table dynamically from JSON schema 
// NOTE: temporarily hard-coded JSON schema for testing purposes only. next will refactor code to display dynamically based on returned JSON data for event types based on filtered source name
function CreateTableFromJSON() {
    var eventTypesJSON = [
        {
            "Event Type": "Login",
            "Version Number": "1",
            "Source Name": "Nova",
            "Event Definition": "Properties/Values",
            "Date Created": "7/14/2019"
        },
        {
            "Event Type": "Blood Type",
            "Version Number": "1",
            "Source Name": "Nova",
            "Event Definition": "Properties/Values",
            "Date Created": "7/14/2019"
        },
        {
            "Event Type": "Login",
            "Version Number": "1",
            "Source Name": "Nova",
            "Event Definition": "Properties/Values",
            "Date Created": "7/14/2019"
        }
    ]

  $('#eventTypeName').append('<table id="jsonTable"><thead><tr></tr></thead><tbody></tbody></table>');
	
  $.each(Object.keys(eventTypesJSON[0]), function(index, key){
    $('#jsonTable thead tr').append('<th>' + key + '</th>');
  });	
  $.each(eventTypesJSON, function(index, jsonObject){     
    if(Object.keys(jsonObject).length > 0){
      var tableRow = '<tr>';
      $.each(Object.keys(jsonObject), function(i, key){
         tableRow += '<td>' + jsonObject[key] + '</td>';
      });
      tableRow += "</tr>";
      $('#jsonTable tbody').append(tableRow);
    }
	});
}

// Event listener
$('#sourceName').on('change', generateSourceName);
$('#submitBtn').on('click', viewEventTypes);

viewEventTypes().then( data => {
    console.log(data);
    generateSourceName(data);
});