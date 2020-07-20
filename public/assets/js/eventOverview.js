const wrapper = document.getElementById('wrapper');

const incrementEvent = (e) => {
    const id = $(e).attr("data-id");

    return $.ajax({
        url: `/api/events/${id}`,
        method: "PUT"
    });
};
wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  incrementEvent(event.target);
})