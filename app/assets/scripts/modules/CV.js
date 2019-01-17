import $ from "jquery";

class CV {
  constructor() {
    this.openCvButton = $(".open-cv");
    this.cv = $(".cv");
    this.closeCvButton = $(".cv__close");

    this.events();
  }

  events() {
    // clicking the open cv button
    this.openCvButton.click(this.openCV.bind(this));

    // clicking the close cv button
    this.closeCvButton.click(this.closeCV.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeCV();
    }
  }

  openCV() {
    this.cv.addClass("cv--is-visible");
    return false;
  }

  closeCV() {
    this.cv.removeClass("cv--is-visible");
  }
}

export default CV;
