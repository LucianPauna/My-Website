import $ from "jquery";

class MobileMenu {
  constructor() {
    this.header = $(".header");
    this.menuIcon = $(".header__menu-icon");
    this.mainNav = $(".main-nav");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.mainNav.toggleClass("main-nav--is-visible");
    this.header.toggleClass("header--is-expanded");
    this.menuIcon.toggleClass("header__menu-icon--close-x");
  }
}

export default MobileMenu;
