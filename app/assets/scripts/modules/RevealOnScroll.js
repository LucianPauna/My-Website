import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor() {
    this.progressBar = $(".progress__bar");
    this.icon = $(".icon");
    this.portfolioProject = $(".portfolio__project");

    this.animationPausedInitially();
    this.hideInitially();

    this.createWaypoints();
  }

  hideInitially() {
    this.portfolioProject.addClass("reveal-portfolio");
    this.icon.addClass("reveal-icon");
  }

  animationPausedInitially() {
    this.progressBar.addClass("animation-paused");
  }

  createWaypoints() {
    this.portfolioProject.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-portfolio--is-visible");
        },
        offset: "85%"
      });
    });

    this.icon.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("reveal-icon--is-visible");
        },
        offset: "85%"
      });
    });

    this.progressBar.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function() {
          $(currentItem).addClass("animation-paused--false");
        },
        offset: "75%"
      });
    });
  }
}

export default RevealOnScroll;
