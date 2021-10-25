$(() => {
  $(".projects").hide();
  $(".contact").hide();
  $(".display-github").hide();
  $(".display-projects").hide();
  $(".display-resume").hide();
  $(".display-linkedin").hide();
  $(".display-contact").hide();

  // true === hidden
  // false === showing
  // function needs to hide contacts if showing and projects is clicked
    // function needs to hide projects if showing and contact is clicked

  // projects show/hide
  let projectState = true;

  $(".project-link").click(() => {
    if (projectState) {
      projectState = false;
      $(".display-projects").hide();
      $(".projects").show(1250);
      $(".project-link").css({color: 'gold'});
      $(".contact-link").css({color: 'white'});
    } else {
      projectState = true;
      $(".display-projects").hide();
      $(".projects").hide(1250);
      $(".project-link").css({color: 'white'});
    }

    if (!contactState) {
      contactState = true;
      $(".contact").hide(1250);
    }
  });

  // contact show/hide
  let contactState = true;
  $(".contact-link").click(() => {
    if (contactState) {
      contactState = false;
      $(".display-contact").hide();
      $(".contact").show(1250);
      $(".contact-link").css({color: 'gold'});
      $(".project-link").css({color: 'white'});
    } else {
      contactState = true;
      $(".display-contact").hide();
      $(".contact").hide(1250);
      $(".contact-link").css({color: 'white'});
    }

    if (!projectState) {
      projectState = true;
      $(".projects").hide(1250);
    }
  });

  // display bug fix
  const resetAllDisplay = function() {
    $(".display-contact").hide();
    $(".display-linkedin").hide();
    $(".display-resume").hide();
    $(".display-projects").hide();
    $(".display-github").hide();
  }

  // displays github
  $(".fa-github").hover(() => {
    resetAllDisplay()
    $(".display-github").fadeIn(0);
  }, () => {
    resetAllDisplay();
  });

  // displays projects
  $(".fa-folder").hover(() => {
    if (projectState) {
      resetAllDisplay()
      $(".display-projects").fadeIn(0);
    }
  }, () => {
    resetAllDisplay();
  });

  // displays resume
  $(".fa-file-pdf").hover(() => {
    resetAllDisplay()
    $(".display-resume").fadeIn(0);
  }, () => {
    resetAllDisplay();
  });

  // displays Linkedin
  $(".fa-linkedin-in").hover(() => {
    resetAllDisplay()
    $(".display-linkedin").fadeIn(0);
  }, () => {
    resetAllDisplay();
  });

  // displays contact
  $(".fa-user").hover(() => {
    resetAllDisplay()
    if (contactState) {
      $(".display-contact").fadeIn(0);
    }
  }, () => {
    resetAllDisplay();
  });


})