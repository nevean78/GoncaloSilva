var index = {
  baseSelector: "#indexHolder ",
  timer: 0,

  init: function (e) {
    index.resize();
  },

  openModal: function (e) {
    var id = $(e.delegateTarget).data("id");

    $("." + id).modal({
      fadeDuration: 500,
      fadeDelay: 0.5,
    });
  },

  noProjectModal: function (e) {
    if (index.timer != 1) {
      new Notify({
        title: "Coming Soon",
        text: "The selected project is still under development. Come back later!",
        autoclose: true,
        autotimeout: 2000,
        status: "error",
        position: "right top",
        type: 1,
      });

      index.timer = 1;

      setTimeout(function () {
        index.timer = 0;
      }, 2500);
    }
  },

  resize: function (e) {
    //debugger;
    var width = $(window).width();

    if (width <= 991) {
      $(".projectImgRight")
        .removeClass("projectImgDemoRight")
        .addClass("projectImgDemoCenter");
      $(".projectImgLeft")
        .removeClass("projectImgDemoLeft")
        .addClass("projectImgDemoCenter");
    } else if (width >= 992) {
      $(".projectImgRight")
        .removeClass("projectImgDemoCenter")
        .addClass("projectImgDemoRight");
      $(".projectImgLeft")
        .removeClass("projectImgDemoCenter")
        .addClass("projectImgDemoLeft");
    }
  },
};

$(document).ready(function (e) {
  index.init();

  $(".openModal").click(function (e) {
    index.openModal(e);
  });

  $(".noProject").click(function (e) {
    index.noProjectModal(e);
  });

  $(window).resize(function () {
    index.resize();
  });

  $(".navbar-toggler").click(function (e) {
    e.preventDefault();
    $("#navbarNav").slideToggle();
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      e.delegateTarget.ariaExpanded = true;
    } else {
      e.delegateTarget.ariaExpanded = false;
    }
  });
});
