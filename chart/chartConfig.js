exports.myConfig = {
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
      values: [
      ['2021-01-25',1,'Sciene', 'Math', 'English'],
      ['2021-01-26',2, 'Sciene', 'English'],
      ['2021-01-27',3, 'Math']
      ],
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