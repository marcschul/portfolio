$(() => {
  $(".projects").hide();
  $(".contact").hide();
  // projects show/hide
  // true === hidden
  // false === showing
  // function needs to hide contacts if showing and projects is clicked
    // function needs to hide projects if showing and contact is clicked

  let projectState = true;

  $(".project-link").click(() => {
    if (projectState) {
      projectState = false;
      $(".projects").show(1250);
    } else {
      projectState = true;
      $(".projects").hide(1250);
    }

    if (!contactState) {
      contactState = true;
      $(".contact").hide(1250);
    }
  })

  // contact show/hide
  let contactState = true;
  $(".contact-link").click(() => {
    if (contactState) {
      contactState = false;
      $(".contact").show(1250);
    } else {
      contactState = true;
      $(".contact").hide(1250);
    }

    if (!projectState) {
      projectState = true;
      $(".projects").hide(1250);
    }
  })
  

})