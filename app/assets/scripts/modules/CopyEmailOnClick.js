import $ from "jquery";

class CopyEmailOnClick {
  constructor() {
    this.emailToCopy = $("#email-to-copy");
    this.tooltip = $(".tooltip");

    this.copyEmail();
  }

  copyEmail() {
    var that = this;
    function createNode(text) {
    var node = document.createElement('pre');
    node.style.width = '1px';
    node.style.height = '1px';
    node.style.position = 'fixed';
    node.style.top = '5px';
    node.textContent = text;
    return node;
  }

  function copyNode(node) {
    var selection = getSelection();
    selection.removeAllRanges();

    var range = document.createRange();
    range.selectNodeContents(node);
    selection.addRange(range);

    document.execCommand('copy');
    selection.removeAllRanges();
    }

    function copyText(text) {
    var node = createNode(text);
    document.body.appendChild(node);
    copyNode(node);
    document.body.removeChild(node);
    }

    this.emailToCopy.on("click", function() {
      var text;
      if (text = this.getAttribute('data-clipboard-text')) {
        copyText(text);
      }
      that.tooltip.attr("tooltip", "Email address successfully copied.");
    });

    this.emailToCopy.on("mouseover", function() {
        that.tooltip.css({opacity: "1", transition: "opacity .3s ease-out"});
      });

    this.emailToCopy.on("mouseout", function() {
        that.tooltip.attr("tooltip", "Click to copy my email address.");
        that.tooltip.css({opacity: "0", transition: "opacity .3s ease-out"});
      });
  }
}

export default CopyEmailOnClick;
