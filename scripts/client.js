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

  // displays github
  $(".fa-github").hover(() => {
    $(".display-github").fadeIn(250);
  }, () => {
    $(".display-github").hide();
  });

  // displays projects
  $(".fa-folder").hover(() => {
    if (projectState) {
      $(".display-projects").fadeIn(250);
    }
  }, () => {
    $(".display-projects").hide();
  });

  // displays resume
  $(".fa-file-pdf").hover(() => {
    $(".display-resume").fadeIn(250);
  }, () => {
    $(".display-resume").hide();
  });

  // displays Linkedin
  $(".fa-linkedin-in").hover(() => {
    $(".display-linkedin").fadeIn(250);
  }, () => {
    $(".display-linkedin").hide();
  });

  // displays contact
  $(".fa-user").hover(() => {
    if (contactState) {
      $(".display-contact").fadeIn(250);
    }
  }, () => {
    $(".display-contact").hide();
  });


})