
const myConfig = {
    type: 'calendar', // Set the chart type to 'calendar'.
    options: {
      rows: 1,
      scale: { // Configure the scale indicator
        direction: 'h', // Set the scale direction: 'h' (horizontal) or 'v' (vertical).
        label: { // Styles the indicator labels.
          backgroundColor: '#f5f5f5',
          fontColor: 'black',
          fontFamily: 'Arial',
          fontSize: 12
        },
        pointer: { // Styles the scale pointer.
          type: 'star3',// Set to any shape type
          size: 4
        }
      },
      values: [],
      firstday: 'm',
    },
    plot: {
      tooltip: {
        text: "Sections Attended:\n %data-info0\n %data-info1\n %data-info2"
      }
    },
    plotarea: {
      marginTop: '35%',
      marginBottom: '45%'
    }
  };

const selectStudent = (id) => {
   $.ajax({
        url: `/api/getAttendanceRecord/${id}`,
        method: "GET",
    }).done((data)=>{
        myConfig.options.values = data;
        zingchart.render({
            id: 'myChart',
            data: myConfig
          })
        console.log(data);
    });
    return;
};
