const wrapper = document.getElementById('eventTable');

const deleteEvent = (e) => {
    const id = $(e).attr("data-id");
    
    $.ajax({
        url: `/api/events/${id}`,
        method: "DELETE"
    });

    location.reload();
};

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  const isDeleteBtn = $(event.target).attr('class') === "btn btn-danger";
  if (!isButton || !isDeleteBtn ) {
    return;
  }

  deleteEvent(event.target);
})