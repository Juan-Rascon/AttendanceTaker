const wrapper = document.getElementById('container');


const markPresent = (e) => {
    $(e).prop("disabled",true);
    const id = $(e).attr("data-id");
    const section = $(e).attr("data-section");
   $.ajax({
        url: `/api/students/${section}/${id}`,
        method: "POST",
        context: e
    }).done(function(data){ //same as .success (depricated as of 1.8)
      $(this).attr('data-dbRecord', data.id);
    });
    return;

};

const undoMarkPresent = (undoBtn, prevBtn) => {
  const id = $(prevBtn).attr("data-dbRecord");
  const section = $(prevBtn).attr("data-section");
  $(prevBtn).removeAttr('data-dbRecord');
  $.ajax({
    url: `/api/students/${section}/${id}`,
    method: "PUT",
    context: prevBtn
    })
return;

};


const AddUndoButton = (e,e2) => {
  $(e).addClass("d-inline-block");
  $(e2).addClass("d-flex flex-row");
  $(e2).append("<Button class=\"btn btn-danger d-inline-block\">Undo</Button>");
}

const removeUndoButton = (e,e2) => {
  $(e).removeClass("d-inline-block");
  $(e2).removeClass("d-flex flex-row");
  $(e2.children[0]).prop("disabled",false);
  $(e).remove();
}

const isUndoButton = (classNames) => {
  if (classNames.includes("btn-danger")){
    return true
  } else {
    return false
  }
}

wrapper.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  
  const isButton = event.target.nodeName === 'BUTTON';
  const classNames = $(event.target).attr("class");
  if (!isButton) {
    return;
  } else if (isUndoButton(classNames)){
    undoMarkPresent(event.target, event.target.offsetParent.children[0]);
    removeUndoButton(event.target, event.target.offsetParent);
    return;
  } else {
    AddUndoButton(event.target, event.target.offsetParent);
    markPresent(event.target);
    return;
  }
})


var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)
  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
    
  })
})