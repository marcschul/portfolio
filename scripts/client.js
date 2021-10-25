$(() => {
  $(".projects").hide();
  $(".contact").hide();
  // projects show/hide
  let projectState = true;
  $(".project-link").click(() => {
    if (projectState) {
      projectState = false;
      $(".projects").show(1250);
    } else {
      projectState = true;
      $(".projects").hide(1250);
    }
  })

  // contact show/hide
  let projectContact = true;
  $(".contact-link").click(() => {
    if (projectContact) {
      projectContact = false;
      $(".contact").show(1250);
    } else {
      projectContact = true;
      $(".contact").hide(1250);
    }
  })
  

})



// $(document).ready(function() {
//   let state = true;
//   $('nav div.column').on("click", function() {
//     if (state) {
//       $('form.tweet-form').hide(1000);
//       state = false;
//     } else {
//       $('form.tweet-form').show(1000);
//       $('#tweet-text').focus();
//       state = true;
//     }
//   });
// });