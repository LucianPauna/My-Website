import $ from "jquery";

class SiblingsLowOpacity {
  constructor() {
    this.portfolioProject = $(".project-holder div");

    this.lowOpacity();
  }

  lowOpacity() {
    this.portfolioProject.mouseover(function() {
      $(this).siblings().css({opacity: ".4", transition: ".3s ease-out"});
    });

    this.portfolioProject.mouseout(function() {
      $(this).siblings().css({opacity: "1", transition: ".3s ease-out"});
    });
  }
}

export default SiblingsLowOpacity;
