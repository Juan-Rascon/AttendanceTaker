
let myConfig = {
    type: 'calendar', // Set the chart type to 'calendar'.
    options: {
      palette: ['none', 'purple'],
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
    labels: [
      { //Lefthand Label (container portion)
        borderColor: 'gray',
        borderWidth: 1,
        align: 'center',
        x: '8%',
        y: '60%',
        width: '40%',
        height: '30%'
      },
      { //Lefthand Label (top portion)
        text: 'Daily Attendance',
        fontColor: '#212121',
        textAlign: 'center',
        x: '10%',
        y:'65%',
        width: '36%'
      },
      { //Lefthand Label (middle portion)
        text: '%plot-value',
        fontColor: '#2196F3',
        fontFamily: 'Georgia',
        fontSize: 35,
        textAlign: 'center',
        x: '10%',
        y: '68%',
        width: '36%'
      },

          // Note: the bottom portion of the Bottom-Left Label is the fixed tooltip, below.
      
    ],
    plot: {
      tooltip: {
        text: "Sections Attended:\n %data-info0\n %data-info1\n %data-info2\n\n %data-day",
        textAlign: 'center',
      }
    },
    plotarea: {
      marginTop: '35%',
      marginBottom: '45%'
    },


  };

const selectStudent = (id) => {
   $.ajax({
        url: `/api/getAttendanceRecord/${id}`,
        method: "GET",
    }).done((data)=>{
        myConfig.options.values = data;
        zingchart.render({
            id: 'myChart',
            data: myConfig,
            height: '100%',
            width: '100%'
          })
        console.log(data);
    });
    return;
};
