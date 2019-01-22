import $ from "jquery";

class ContactFormSubmit {
  constructor() {
    // Get the form using the form id
    this.form = $("#ajax-form");

    // Get the messages div
    this.formMessages = $("#form-messages");

    this.events();
  }

  events() {
    this.form.submit(this.stopFromSubmitting.bind(this));
  }

  stopFromSubmitting(e) {
    var that = this;
    e.preventDefault();

    // Serialize the form data
    var formData = that.form.serialize();

    $.ajax({
      type: 'POST',
      url: that.form.attr('action'),
      data: formData
    })
    .done(function(response) {
      // Make sure that the formMessages div has the "success" class.
      that.formMessages.removeClass("error");
      that.formMessages.addClass("success");

      // Set the message text.
      that.formMessages.text(response);

      // Clear the form.
      $("#contactName").val("");
      $("#contactEmail").val("");
      $("#subject").prop('selectedIndex',0);
      $("#message").val("");
    })
    .fail(function(data) {
      // Make sure that the formMessages div has the "error" class.
      that.formMessages.removeClass("success");
      that.formMessages.addClass("error");

      // Set the message text.
      if (data.responseText !== "") {
        that.formMessages.text(data.responseText);
      } else {
        that.formMessages.text("Oops! An error occured and your message could not be sent.");
      }
    });
  }
}

export default ContactFormSubmit;
