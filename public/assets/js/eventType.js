let counter = 1;
let proArray = ['property1'];
let typeArray = ['type1'];
let valueArray = ['value1'];

const generateHtml = (counter) => {
    return `
    <div class="row">
        <div class="col-md-3">
            <input id = "property${counter}"type="text" class="form-control mt-15" placeholder="Property">
        </div>
        <div class="col-md-2">
            <select id = "type${counter}" class="form-control custom-select  mt-15">
                <option selected>Select type</option>
                <option value="string">string</option>
                <option value="number">number</option>
                <option value="object">object</option>
                <option value="array">array</option>
                <option value="boolean">boolean</option>
                <option value="null">null</option>
            </select>
        </div>
        <div class="col-md-3">
            <input id = "value${counter}" type="text" class="form-control mt-15" placeholder="Value">
        </div>
    </div>`
}

const addInput =  () => {
    counter++;
    
    const htmlTemp = generateHtml(counter);
    
    const newDiv = $('<div>');
    
    newDiv.html(htmlTemp);
    
    $('#eventDef').append(newDiv);
    if (counter >= 2) {
        for (let i = counter ; i <= counter; i++) {
            proArray.push(`property${i}`);
            typeArray.push(`type${i}`);
            valueArray.push(`value${i}`);
        }
    }
}
//TODO need to create a function that validates the value entered given the type selected. 

//TODO need to create a function that returns the actual value required and not a string. 

//This function creates an object of the event meta data
function eventMetaData() { return {
    eventTypeName: $('#eventType').val(),
    sourceName: $('#sourceName').val(),
    versionNumber : $('#versionNumber').val(),
    organizationId: $('#orgId').val()
}};

//This function builds and object with all the property and corresponding values provided
//the user
function getEventDefinitions() {
    let eventTypeDefinition = {};
    for (let i = 0; i < proArray.length ; i++){
       eventTypeDefinition[$(`#${proArray[i]}`).val()] = $(`#${valueArray[i]}`).val();
    }
    return eventTypeDefinition;
};

//This function combines all the data from event meta data and getEventDefinitions
function getAllEventData() {
    const combinedData = eventMetaData();
    combinedData.eventTypeDefinition = getEventDefinitions();
    return combinedData;
};

const sendDataToPost = () => { 
    
    createEventType(getAllEventData());
    resetToDefault();

    // const Test = {
    //     eventTypeDefinition: {
    //         NameInput: "Juanrasco"
    //     },
    //     eventTypeName: "JuanTest2",
    //     schemaVersion: "draft",
    //     sourceName: "Nova",
    //     versionNumber: "2",
    // }
    // createEventType(Test); 
}

const createEventType = (obj) => {
    return $.ajax({
        url: "/api/eventtype",
        data: obj,
        method: "POST"
    });
};

$('#addBtn').on('click', addInput);
$('#submitBtn').on('click', sendDataToPost);

function resetToDefault () {
    $('#eventDef').empty();
    $('#eventType').val("");
    $('#sourceName').val("");
    $('#versionNumber').val("");
    $('#orgID').val("");
    $('#property1').val("");
    $('#type1').val('Select type');
    $('#value1').val("");
    counter = 1;
    proArray = ['property1'];
    typeArray = ['type1'];
    valueArray = ['value1'];
}



// function submitValidation () {
//     if ( ($('#eventType').val() != '') && 
//     ($('#sourceName').val() != '') &&
//     ($('#versionNumber').val() != '') &&
//     ($('#schemaVersion').val() != '') &&
//     ($('#property1').val() != '') &&
//     ($('#type1').val() != 'Select type') &&
//     ($('#value1').val() != '') )
//     {
//         submitBtn.classList.remove('btn-secondary disabled');
//         submitBtn.classList.add('btn-info');
//     }
//     else {
//         submitBtn.classList.add('btn-secondary disabled');
//         submitBtn.classList.remove('btn-info');
//     }
// }

//Testing code
// submitBtn.addEventListener('click', () => {
//     const test = $('#eventType').val();
//     const test1 = $('#sourceName').val();
//     const test2 = $('#versionNumber').val();
//     const test3 = $('#schemaVersion').val();
//     const test4 = $('#property1').val();
//     const test5 = $('#type1').val();
//     const test6 = $('#value1').val();
//     console.log(test, test1, test2, test3, test4, test5, test6 );
// });ç