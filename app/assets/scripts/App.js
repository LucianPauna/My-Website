import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import CV from "./modules/CV";
import SiblingsLowOpacity from "./modules/SiblingsLowOpacity";
import CopyEmailOnClick from "./modules/CopyEmailOnClick";
import ContactFormSubmit from "./modules/ContactFormSubmit";
import DetailedPortfolioImage from "./modules/DetailedPortfolioImage";
import $ from "jquery";

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll();
var stickyHeader = new StickyHeader();
var cv = new CV();
var siblingsLowOpacity = new SiblingsLowOpacity();
var copyEmailOnClick = new CopyEmailOnClick();
var contactFormSubmit = new ContactFormSubmit();
new DetailedPortfolioImage($(".detailed-portfolio-image__open--my-website"), $(".detailed-portfolio-image--my-website"), $(".detailed-portfolio-image__close"));
new DetailedPortfolioImage($(".detailed-portfolio-image__open--romania-travel"), $(".detailed-portfolio-image--romania-travel"), $(".detailed-portfolio-image__close"));
