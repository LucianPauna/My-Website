import $ from "jquery";

class DetailedPortfolioImage {
  constructor(openButton, itemtoReveal, closeButton) {
    this.openButton = openButton;
    this.itemtoReveal = itemtoReveal;
    this.closeButton = closeButton;

    this.events();
  }

  events() {
    // clicking the open cv button
    this.openButton.click(this.openFunction.bind(this));

    // clicking the close cv button
    this.closeButton.click(this.closeFunction.bind(this));
    $(document).click(this.closeFunction.bind(this));

    // pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeFunction();
    }
  }

  openFunction() {
    this.itemtoReveal.addClass("detailed-portfolio-image--is-visible");
    return false;
  }

  closeFunction() {
    this.itemtoReveal.removeClass("detailed-portfolio-image--is-visible");
  }
}

export default DetailedPortfolioImage;
