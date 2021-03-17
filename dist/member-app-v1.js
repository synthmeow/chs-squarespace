// membership form

$("#radio-yui_3_17_2_1_1579484904244_12386").addClass("formhide"); // type
$("#name-yui_3_17_2_1_1579484904244_19912").addClass("formhide"); // name
$("#email-yui_3_17_2_1_1579484904244_20541").addClass("formhide"); // email
$("#phone-yui_3_17_2_1_1579484904244_21220").addClass("formhide"); // phone
$("#select-yui_3_17_2_1_1579553504342_60432 ").addClass("formhide"); // phone type
$("#number-yui_3_17_2_1_1579484904244_40055").addClass("formhide"); // age
$("#radio-yui_3_17_2_1_1579484904244_63956").addClass("formhide"); // membership type

$("#address-yui_3_17_2_1_1579553504342_120676").addClass("formhide"); // address
$("#textarea-yui_3_17_2_1_1579553504342_18437").addClass("formhide"); // additional family

$("#phone-yui_3_17_2_1_1579553504342_169220").addClass("formhide"); // secondary phone
$("#select-yui_3_17_2_1_1579553504342_170914").addClass("formhide"); // secondary phone type
$("#checkbox-yui_3_17_2_1_1579553504342_191112").addClass("formhide"); // volunteering interests
$("#textarea-yui_3_17_2_1_1579553504342_214998").addClass("formhide"); // fundraising experience
$("#textarea-yui_3_17_2_1_1579553504342_215692").addClass("formhide"); // people experience
$("#textarea-yui_3_17_2_1_1579553504342_239119").addClass("formhide"); // recruiting experience
$("#textarea-yui_3_17_2_1_1579553504342_263803").addClass("formhide"); // additional skills
$("#textarea-yui_3_17_2_1_1579553504342_264549").addClass("formhide"); // special contacts
$("#select-yui_3_17_2_1_1579553504342_293469").addClass("formhide"); // how did you find out
$("#text-yui_3_17_2_1_1579553504342_322850").addClass("formhide"); // find out detail

var member_type;

// USER SELECTS ROLE
$("#radio-yui_3_17_2_1_1579456881573_55074 input").click(function () {
  selection = $(this).val();

  if (
    selection ==
      "Active Member: Voting member that actively volunteers for the Coppell Humane Society. Must be at least 18 years old." ||
    selection ==
      "Associate Member: Non-voting membership with no participation requirements."
  ) {
    // set selection variable
    if (
      selection ==
      "Active Member: Voting member that actively volunteers for the Coppell Humane Society. Must be at least 18 years old."
    ) {
      choice = 1;
    }
    if (
      selection ==
      "Associate Member: Non-voting membership with no participation requirements."
    ) {
      choice = 2;
    }

    // hide submit button and disclaimer if previously shown
    $(".form-button-wrapper").addClass("formhide");
    $("#disclaimer").addClass("formhide");

    // if active or associate member selected, show membership type option
    $("#radio-yui_3_17_2_1_1579484904244_12386").removeClass("formhide");

    // reset any existing radio button selections
    // not having the if statement will throw an error, careful there
    if (
      document.querySelector(
        'input[name="radio-yui_3_17_2_1_1579484904244_12386-field"]:checked'
      )
    ) {
      document.querySelector(
        'input[name="radio-yui_3_17_2_1_1579484904244_12386-field"]:checked'
      ).checked = false;
    }

    // hide all other fields until membership type selected
    $("#name-yui_3_17_2_1_1579484904244_19912").addClass("formhide"); // name
    $("#email-yui_3_17_2_1_1579484904244_20541").addClass("formhide"); // email
    $("#phone-yui_3_17_2_1_1579484904244_21220").addClass("formhide"); // phone
    $("#select-yui_3_17_2_1_1579553504342_60432 ").addClass("formhide"); // phone type
    $("#number-yui_3_17_2_1_1579484904244_40055").addClass("formhide"); // age
    $("#radio-yui_3_17_2_1_1579484904244_63956").addClass("formhide"); // membership type
    $("#textarea-yui_3_17_2_1_1579553504342_18437").addClass("formhide"); // additional family
    $("#address-yui_3_17_2_1_1579553504342_120676").addClass("formhide"); // address
    $("#phone-yui_3_17_2_1_1579553504342_169220").addClass("formhide"); // secondary phone
    $("#select-yui_3_17_2_1_1579553504342_170914").addClass("formhide"); // secondary phone type
    $("#checkbox-yui_3_17_2_1_1579553504342_191112").addClass("formhide"); // volunteering interests
    $("#textarea-yui_3_17_2_1_1579553504342_214998").addClass("formhide"); // fundraising experience
    $("#textarea-yui_3_17_2_1_1579553504342_215692").addClass("formhide"); // people experience
    $("#textarea-yui_3_17_2_1_1579553504342_239119").addClass("formhide"); // recruiting experience
    $("#textarea-yui_3_17_2_1_1579553504342_263803").addClass("formhide"); // additional skills
    $("#textarea-yui_3_17_2_1_1579553504342_264549").addClass("formhide"); // special contacts
    $("#select-yui_3_17_2_1_1579553504342_293469").addClass("formhide"); // how did you find out
    $("#text-yui_3_17_2_1_1579553504342_322850").addClass("formhide"); // find out detail
  } else if (
    selection ==
    "Volunteer: Non-Members that would like to help volunteer for the Coppell Humane Society"
  ) {
    // set choice variable
    choice = 3;

    // show disclaimer
    $("#disclaimer").removeClass("formhide");

    // change redirect to go to thank you page for volunteering interest
    $('form[data-form-id="5e249e51f068c869fe44cbe6"]').attr(
      "data-success-redirect",
      "https://www.coppellhumanesociety.org/thank-you-form-submit"
    );

    // clear the membership radio button fields since it's a volunteer option
    $("input[name=radio-yui_3_17_2_1_1579484904244_12386-field]").attr(
      "checked",
      false
    );
    $("input[name=radio-yui_3_17_2_1_1579484904244_63956-field]").attr(
      "checked",
      false
    );

    // hide the membership type selection since it's volunteer
    $("#radio-yui_3_17_2_1_1579484904244_12386").addClass("formhide");
    $("#radio-yui_3_17_2_1_1579484904244_63956").addClass("formhide");

    // show applicable volunteer fields
    $("#name-yui_3_17_2_1_1579484904244_19912").removeClass("formhide");
    $("#email-yui_3_17_2_1_1579484904244_20541").removeClass("formhide");
    $("#phone-yui_3_17_2_1_1579484904244_21220").removeClass("formhide");
    $("#select-yui_3_17_2_1_1579553504342_60432 ").removeClass("formhide");
    $("#number-yui_3_17_2_1_1579484904244_40055").removeClass("formhide");
    $("#textarea-yui_3_17_2_1_1579553504342_18437").removeClass("formhide");
    $("#address-yui_3_17_2_1_1579553504342_120676").removeClass("formhide");
    $("#phone-yui_3_17_2_1_1579553504342_169220").removeClass("formhide");
    $("#select-yui_3_17_2_1_1579553504342_170914").removeClass("formhide");

    $("#checkbox-yui_3_17_2_1_1579553504342_191112").removeClass("formhide"); // volunteering interests
    $("#textarea-yui_3_17_2_1_1579553504342_214998").removeClass("formhide"); // fundraising experience
    $("#textarea-yui_3_17_2_1_1579553504342_215692").removeClass("formhide"); // people experience
    $("#textarea-yui_3_17_2_1_1579553504342_239119").removeClass("formhide"); // recruiting experience
    $("#textarea-yui_3_17_2_1_1579553504342_263803").removeClass("formhide"); // additional skills
    $("#textarea-yui_3_17_2_1_1579553504342_264549").removeClass("formhide"); // special contacts
    $("#select-yui_3_17_2_1_1579553504342_293469").removeClass("formhide"); // how did you find out
    $("#text-yui_3_17_2_1_1579553504342_322850").removeClass("formhide"); // find out detail

    // hide non-applicable volunteer fields
    $("#textarea-yui_3_17_2_1_1579553504342_18437").addClass("formhide"); // additional family

    // since it's volunteer, we can show the submit button
    // enable submit button
    $('input[type="submit"]').attr("value", "Submit");
    $(".form-button-wrapper").removeClass("formhide");
  } else {
    $("#radio-yui_3_17_2_1_1579484904244_12386").addClass("formhide");
    $("#name-yui_3_17_2_1_1579484904244_19912").addClass("formhide");
    $("#email-yui_3_17_2_1_1579484904244_20541").addClass("formhide");
    $("#phone-yui_3_17_2_1_1579484904244_21220").addClass("formhide");
    $("#select-yui_3_17_2_1_1579553504342_60432 ").addClass("formhide");
    $("#number-yui_3_17_2_1_1579484904244_40055").addClass("formhide");
    $("#radio-yui_3_17_2_1_1579484904244_63956").addClass("formhide");
    $("#textarea-yui_3_17_2_1_1579553504342_18437").addClass("formhide");
    $("#address-yui_3_17_2_1_1579553504342_120676").addClass("formhide");
    $("#phone-yui_3_17_2_1_1579553504342_169220").addClass("formhide");
    $("#select-yui_3_17_2_1_1579553504342_170914").addClass("formhide");
  }
});

// USER SELECTS TYPE OF MEMBERSHIP
$("#radio-yui_3_17_2_1_1579484904244_12386 input").click(function () {
  selection = $(this).val();

  // reset any existing radio button selections
  // not having the if statement will throw an error, careful there
  if (
    document.querySelector(
      'input[name="radio-yui_3_17_2_1_1579484904244_63956-field"]:checked'
    )
  ) {
    document.querySelector(
      'input[name="radio-yui_3_17_2_1_1579484904244_63956-field"]:checked'
    ).checked = false;
  }

  if (selection == "Membership Renewal") {
    member_type = 1;

    $("#radio-yui_3_17_2_1_1579484904244_63956").removeClass("formhide"); // membership plan

    // hide all fields if they are exposed
    $("#name-yui_3_17_2_1_1579484904244_19912").addClass("formhide"); // name
    $("#email-yui_3_17_2_1_1579484904244_20541").addClass("formhide"); // email
    $("#phone-yui_3_17_2_1_1579484904244_21220").addClass("formhide"); // phone
    $("#select-yui_3_17_2_1_1579553504342_60432 ").addClass("formhide"); // phone type
    $("#number-yui_3_17_2_1_1579484904244_40055").addClass("formhide"); // age
    $("#address-yui_3_17_2_1_1579553504342_120676").addClass("formhide"); // address
    $("#phone-yui_3_17_2_1_1579553504342_169220").addClass("formhide"); // secondary phone
    $("#select-yui_3_17_2_1_1579553504342_170914").addClass("formhide"); // secondary phone type
    $("#textarea-yui_3_17_2_1_1579553504342_18437").addClass("formhide"); // family description
    $("#checkbox-yui_3_17_2_1_1579553504342_191112").addClass("formhide"); // volunteering interests
    $("#textarea-yui_3_17_2_1_1579553504342_214998").addClass("formhide"); // fundraising experience
    $("#textarea-yui_3_17_2_1_1579553504342_215692").addClass("formhide"); // people experience
    $("#textarea-yui_3_17_2_1_1579553504342_239119").addClass("formhide"); // recruiting experience
    $("#textarea-yui_3_17_2_1_1579553504342_263803").addClass("formhide"); // additional skills
    $("#textarea-yui_3_17_2_1_1579553504342_264549").addClass("formhide"); // special contacts
    $("#select-yui_3_17_2_1_1579553504342_293469").addClass("formhide"); // how did you find out
    $("#text-yui_3_17_2_1_1579553504342_322850").addClass("formhide"); // find out detail

    // update call to action
    $('input[type="submit"]').attr("value", "Proceed to payment");
  } else if (selection == "New Membership") {
    member_type = 2;

    $("#radio-yui_3_17_2_1_1579484904244_63956").removeClass("formhide"); // membership plan

    // hide all fields if they are exposed
    $("#name-yui_3_17_2_1_1579484904244_19912").addClass("formhide"); // name
    $("#email-yui_3_17_2_1_1579484904244_20541").addClass("formhide"); // email
    $("#phone-yui_3_17_2_1_1579484904244_21220").addClass("formhide"); // phone
    $("#select-yui_3_17_2_1_1579553504342_60432 ").addClass("formhide"); // phone type
    $("#number-yui_3_17_2_1_1579484904244_40055").addClass("formhide"); // age
    $("#address-yui_3_17_2_1_1579553504342_120676").addClass("formhide"); // address
    $("#phone-yui_3_17_2_1_1579553504342_169220").addClass("formhide"); // secondary phone
    $("#select-yui_3_17_2_1_1579553504342_170914").addClass("formhide"); // secondary phone type
    $("#textarea-yui_3_17_2_1_1579553504342_18437").addClass("formhide"); // family description
    $("#checkbox-yui_3_17_2_1_1579553504342_191112").addClass("formhide"); // volunteering interests
    $("#textarea-yui_3_17_2_1_1579553504342_214998").addClass("formhide"); // fundraising experience
    $("#textarea-yui_3_17_2_1_1579553504342_215692").addClass("formhide"); // people experience
    $("#textarea-yui_3_17_2_1_1579553504342_239119").addClass("formhide"); // recruiting experience
    $("#textarea-yui_3_17_2_1_1579553504342_263803").addClass("formhide"); // additional skills
    $("#textarea-yui_3_17_2_1_1579553504342_264549").addClass("formhide"); // special contacts
    $("#select-yui_3_17_2_1_1579553504342_293469").addClass("formhide"); // how did you find out
    $("#text-yui_3_17_2_1_1579553504342_322850").addClass("formhide"); // find out detail

    // update call to action
    $('input[type="submit"]').attr("value", "Proceed to payment");
  } else {
    $("#name-yui_3_17_2_1_1579484904244_19912").addClass("formhide"); // name
    $("#email-yui_3_17_2_1_1579484904244_20541").addClass("formhide"); // email
    $("#phone-yui_3_17_2_1_1579484904244_21220").addClass("formhide"); // phone
    $("#select-yui_3_17_2_1_1579553504342_60432 ").addClass("formhide"); // phone type
    $("#number-yui_3_17_2_1_1579484904244_40055").addClass("formhide"); // age
    $("#radio-yui_3_17_2_1_1579484904244_63956").addClass("formhide"); // membership type
    $("#address-yui_3_17_2_1_1579553504342_120676").addClass("formhide"); // address
    $("#phone-yui_3_17_2_1_1579553504342_169220").addClass("formhide"); // secondary phone
    $("#select-yui_3_17_2_1_1579553504342_170914").addClass("formhide"); // secondary phone type
    $("#textarea-yui_3_17_2_1_1579553504342_18437").addClass("formhide"); // family description
    $("#checkbox-yui_3_17_2_1_1579553504342_191112").addClass("formhide"); // volunteering interests
    $("#textarea-yui_3_17_2_1_1579553504342_214998").addClass("formhide"); // fundraising experience
    $("#textarea-yui_3_17_2_1_1579553504342_215692").addClass("formhide"); // people experience
    $("#textarea-yui_3_17_2_1_1579553504342_239119").addClass("formhide"); // recruiting experience
    $("#textarea-yui_3_17_2_1_1579553504342_263803").addClass("formhide"); // additional skills
    $("#textarea-yui_3_17_2_1_1579553504342_264549").addClass("formhide"); // special contacts
    $("#select-yui_3_17_2_1_1579553504342_293469").addClass("formhide"); // how did you find out
    $("#text-yui_3_17_2_1_1579553504342_322850").addClass("formhide"); // find out detail
  }
});

// USER SELECTS MEMBERSHIP TYPE
$("#radio-yui_3_17_2_1_1579484904244_63956 input").click(function () {
  selection = $(this).val();

  if (selection == "Individual Membership $25") {
    // change redirect to go to donorbox page for individual
    $('form[data-form-id="5e249e51f068c869fe44cbe6"]').attr(
      "data-success-redirect",
      "https://www.coppellhumanesociety.org/individual-membership"
    );
    // enable proceed to payment button
    $('input[type="submit"]').attr("value", "Proceed to payment");
    $(".form-button-wrapper").removeClass("formhide");
    // hide family description field
    $("#textarea-yui_3_17_2_1_1579553504342_18437").addClass("formhide");
    // enable disclaimer
    $("#disclaimer").removeClass("formhide");

    // show proper fields

    // renewal
    if (member_type == 1) {
      // show applicable membership renewal fields
      $("#name-yui_3_17_2_1_1579484904244_19912").removeClass("formhide"); // name
      $("#email-yui_3_17_2_1_1579484904244_20541").removeClass("formhide"); // email
      $("#phone-yui_3_17_2_1_1579484904244_21220").removeClass("formhide"); // phone
      $("#select-yui_3_17_2_1_1579553504342_60432 ").removeClass("formhide"); // phone type
      $("#number-yui_3_17_2_1_1579484904244_40055").removeClass("formhide"); // age

      $("#address-yui_3_17_2_1_1579553504342_120676").removeClass("formhide"); // address

      // hide non-applicable membership renewal fields
      $("#phone-yui_3_17_2_1_1579553504342_169220").addClass("formhide"); // secondary phone
      $("#select-yui_3_17_2_1_1579553504342_170914").addClass("formhide"); // secondary phone type
      $("#checkbox-yui_3_17_2_1_1579553504342_191112").addClass("formhide"); // volunteering interests
      $("#textarea-yui_3_17_2_1_1579553504342_214998").addClass("formhide"); // fundraising experience
      $("#textarea-yui_3_17_2_1_1579553504342_215692").addClass("formhide"); // people experience
      $("#textarea-yui_3_17_2_1_1579553504342_239119").addClass("formhide"); // recruiting experience
      $("#textarea-yui_3_17_2_1_1579553504342_263803").addClass("formhide"); // additional skills
      $("#textarea-yui_3_17_2_1_1579553504342_264549").addClass("formhide"); // special contacts
      $("#select-yui_3_17_2_1_1579553504342_293469").addClass("formhide"); // how did you find out
      $("#text-yui_3_17_2_1_1579553504342_322850").addClass("formhide"); // find out detail
    }

    // new member
    else if (member_type == 2) {
      // show applicable fields for new membership
      $("#name-yui_3_17_2_1_1579484904244_19912").removeClass("formhide");
      $("#email-yui_3_17_2_1_1579484904244_20541").removeClass("formhide");
      $("#phone-yui_3_17_2_1_1579484904244_21220").removeClass("formhide");
      $("#select-yui_3_17_2_1_1579553504342_60432 ").removeClass("formhide");
      $("#number-yui_3_17_2_1_1579484904244_40055").removeClass("formhide");
      $("#radio-yui_3_17_2_1_1579484904244_63956").removeClass("formhide");
      // additional fields for New Membership
      $("#address-yui_3_17_2_1_1579553504342_120676").removeClass("formhide");
      $("#phone-yui_3_17_2_1_1579553504342_169220").removeClass("formhide");
      $("#select-yui_3_17_2_1_1579553504342_170914").removeClass("formhide");

      // if choice is active member, add additional applicable fields
      if (choice == 1) {
        $("#checkbox-yui_3_17_2_1_1579553504342_191112").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_214998").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_215692").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_239119").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_263803").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_264549").removeClass(
          "formhide"
        );
        $("#select-yui_3_17_2_1_1579553504342_293469").removeClass("formhide");
        $("#text-yui_3_17_2_1_1579553504342_322850").removeClass("formhide");
      }
    }
  } else if (selection == "Family Membership $40") {
    // change redirect to go to donorbox page for individual
    $('form[data-form-id="5e249e51f068c869fe44cbe6"]').attr(
      "data-success-redirect",
      "https://www.coppellhumanesociety.org/family-membership"
    );
    // enable proceed to payment button
    $('input[type="submit"]').attr("value", "Proceed to payment");
    $(".form-button-wrapper").removeClass("formhide");
    // enable family description
    $("#textarea-yui_3_17_2_1_1579553504342_18437").removeClass("formhide"); // family description
    // enable disclaimer
    $("#disclaimer").removeClass("formhide");

    // renewal
    if (member_type == 1) {
      // show applicable membership renewal fields
      $("#name-yui_3_17_2_1_1579484904244_19912").removeClass("formhide"); // name
      $("#email-yui_3_17_2_1_1579484904244_20541").removeClass("formhide"); // email
      $("#phone-yui_3_17_2_1_1579484904244_21220").removeClass("formhide"); // phone
      $("#select-yui_3_17_2_1_1579553504342_60432 ").removeClass("formhide"); // phone type
      $("#number-yui_3_17_2_1_1579484904244_40055").removeClass("formhide"); // age

      $("#address-yui_3_17_2_1_1579553504342_120676").removeClass("formhide"); // address

      // hide non-applicable membership renewal fields
      $("#phone-yui_3_17_2_1_1579553504342_169220").addClass("formhide"); // secondary phone
      $("#select-yui_3_17_2_1_1579553504342_170914").addClass("formhide"); // secondary phone type
      $("#checkbox-yui_3_17_2_1_1579553504342_191112").addClass("formhide"); // volunteering interests
      $("#textarea-yui_3_17_2_1_1579553504342_214998").addClass("formhide"); // fundraising experience
      $("#textarea-yui_3_17_2_1_1579553504342_215692").addClass("formhide"); // people experience
      $("#textarea-yui_3_17_2_1_1579553504342_239119").addClass("formhide"); // recruiting experience
      $("#textarea-yui_3_17_2_1_1579553504342_263803").addClass("formhide"); // additional skills
      $("#textarea-yui_3_17_2_1_1579553504342_264549").addClass("formhide"); // special contacts
      $("#select-yui_3_17_2_1_1579553504342_293469").addClass("formhide"); // how did you find out
      $("#text-yui_3_17_2_1_1579553504342_322850").addClass("formhide"); // find out detail
    }

    // new member
    else if (member_type == 2) {
      // show applicable fields for new membership
      $("#name-yui_3_17_2_1_1579484904244_19912").removeClass("formhide");
      $("#email-yui_3_17_2_1_1579484904244_20541").removeClass("formhide");
      $("#phone-yui_3_17_2_1_1579484904244_21220").removeClass("formhide");
      $("#select-yui_3_17_2_1_1579553504342_60432 ").removeClass("formhide");
      $("#number-yui_3_17_2_1_1579484904244_40055").removeClass("formhide");
      $("#radio-yui_3_17_2_1_1579484904244_63956").removeClass("formhide");
      // additional fields for New Membership
      $("#address-yui_3_17_2_1_1579553504342_120676").removeClass("formhide");
      $("#phone-yui_3_17_2_1_1579553504342_169220").removeClass("formhide");
      $("#select-yui_3_17_2_1_1579553504342_170914").removeClass("formhide");

      // if choice is active member, add additional applicable fields
      if (choice == 1) {
        $("#checkbox-yui_3_17_2_1_1579553504342_191112").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_214998").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_215692").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_239119").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_263803").removeClass(
          "formhide"
        );
        $("#textarea-yui_3_17_2_1_1579553504342_264549").removeClass(
          "formhide"
        );
        $("#select-yui_3_17_2_1_1579553504342_293469").removeClass("formhide");
        $("#text-yui_3_17_2_1_1579553504342_322850").removeClass("formhide");
      }
    }
  } else {
  }
});

// check for DONORBOX.donation or similar indicator that donation occurred to show SUBMIT button
// perhaps pull information about donation from that event into the form
// $('#number-yui_3_17_2_1_1579484904244_40055-field').val()

// force age field to be a number
$('input[id="number-yui_3_17_2_1_1579484904244_40055-field"]').attr(
  "type",
  "number"
);

// if age field is less than 18, throw a disclaimer and direct to volunteer form
$("#number-yui_3_17_2_1_1579484904244_40055-field").focusout(
  "input",
  function () {
    if (
      ($("#number-yui_3_17_2_1_1579484904244_40055-field").val() < 18) &
      ($("#number-yui_3_17_2_1_1579484904244_40055-field").val() > 0)
    ) {
      $(".form-button-wrapper").addClass("formhide");
      // show notification for volunteer form
      $("#notifyblock").removeClass("formhide");
      $("#disclaimer").addClass("formhide");
    } else {
      $(".form-button-wrapper").removeClass("formhide");
      $("#notifyblock").addClass("formhide");
      $("#disclaimer").removeClass("formhide");
    }
  }
);

try {
  // insert custom div to direct to volunteer form
  notifyblock = document.createElement("div");
  notifyblock.setAttribute("id", "notifyblock");
  $("#notifyblock").addClass("formhide");
  notifyblock.innerHTML =
    '<p><i><br><font color="red">Youth volunteers should not fill out this form. Instead, please click <a href="https://www.coppellhumanesociety.org/volunteer#block-yui_3_17_2_8_1459966349478_6617"><b>here</b></a> to fill out the volunteer interest form & select “Youth Volunteer".</i></p><br></font>';
  container_block = document.getElementById(
    "number-yui_3_17_2_1_1579484904244_40055"
  );
  container_block.appendChild(notifyblock);
  $("#notifyblock").addClass("formhide");

  // insert custom div for disclaimer
  disclaimer = document.createElement("div");
  disclaimer.setAttribute("id", "disclaimer");
  $("#notifyblock").addClass("formhide");
  disclaimer.innerHTML =
    '<br><font size="2">By submitting this form, you agree to receive phone & email communication from the Coppell Humane Society about volunteer opportunities, and fund raising, including requests from SignUpGenius.com. You can unsubscribe from contact, by emailing volunteer@coppellhumanesociety.org. Coppell Humane Society memberships follow the calendar year, and will expire on December 31st of the current year.  Prorated membership dues are not available.</font>';
  container_block_2 = document.getElementById(
    "block-yui_3_17_2_1_1579458121909_3742"
  );
  container_block_2.appendChild(disclaimer);
  $("#disclaimer").addClass("formhide");
} catch (error) {}

// if current page is membership form , then hide submit button by default
if (
  document.URL == "https://www.coppellhumanesociety.org/membership-form" ||
  document.URL ==
    "https://coppellhumanesociety.squarespace.com/config/settings/advanced/code-injection"
) {
  $(".form-button-wrapper").addClass("formhide");
}

// manual form validation

var alert_cnt;

$(":submit").click(function () {
  // need to figure out how to fine tune the above to focus on the submit button only

  // set alert cnt to 0, if greater than 0, an alert needs to be shown
  alert_cnt = 0;
  var alert_msg = "";
  var newLine = "\r\n";

  // these fields are on all paths and are required no matter what
  // first name
  if ($("input[name='fname']").val().length == 0) {
    alert_msg += "First Name is required.";
    alert_msg += newLine;
    alert_cnt += 1;
  }
  // last name
  if ($("input[name='lname']").val().length == 0) {
    alert_msg += "Last Name is required.";
    alert_msg += newLine;
    alert_cnt += 1;
  }

  if (document.URL == "https://www.coppellhumanesociety.org/membership-form") {
    // email
    if ($("#email-yui_3_17_2_1_1579484904244_20541 input").val().length == 0) {
      alert_msg += "Email address is required.";
      alert_msg += newLine;
      alert_cnt += 1;
    }
    // age
    if ($("#number-yui_3_17_2_1_1579484904244_40055 input").val().length == 0) {
      alert_msg += "Age is required.";
      alert_msg += newLine;
      alert_cnt += 1;
    }
    // phone
    if (
      $("input[data-title='Areacode']").val().length +
        $("input[data-title='Prefix']").val().length +
        $("input[data-title='Line']").val().length !=
      10
    ) {
      alert_msg += "Phone # is required.";
      alert_msg += newLine;
      alert_cnt += 1;
    }
    // phone type
    if (
      $("#select-yui_3_17_2_1_1579553504342_60432 option:selected").text()
        .length == 0
    ) {
      alert_msg += "Phone Type is required.";
      alert_msg += newLine;
      alert_cnt += 1;
    }

    // required fields for new membership
    if (member_type == 2) {
      // address line 1
      if ($("input[name='address']").val().length == 0) {
        alert_msg += "Address 1 is required.";
        alert_msg += newLine;
        alert_cnt += 1;
      }
      // city
      if ($("input[name='city']").val().length == 0) {
        alert_msg += "City is required.";
        alert_msg += newLine;
        alert_cnt += 1;
      }
      // zip
      if ($("input[name='zipcode']").val().length == 0) {
        alert_msg += "ZIP Code is required.";
        alert_msg += newLine;
        alert_cnt += 1;
      }
      // state
      if ($("input[name='state']").val().length == 0) {
        alert_msg += "State is required.";
        alert_msg += newLine;
        alert_cnt += 1;
      }
    }
  }

  /*
//what's going on with this??

if($('#text-yui_3_17_2_1_1606077467812_479442-field').val().length == 0) {
alert_msg += 'Primary Phone is required.';
alert_msg += newLine;
alert_cnt += 1;
}  
*/

  if (
    document.URL ==
    "https://www.coppellhumanesociety.org/adoption-foster-application"
  ) {
    // MANUAL VALIDATION FOR ADOPTION FOSTER APPLICATION
    // email
    if ($("#email-yui_3_17_2_1_1597591121700_26558 input").val().length == 0) {
      alert_msg += "Primary Email is required.";
      alert_msg += newLine;
      alert_cnt += 1;
    }
// address line 1
if ($("input[name='address']").val().length == 0) {
alert_msg += "Address 1 is required.";
alert_msg += newLine;
alert_cnt += 1;
}
    // city
    if ($("input[name='city']").val().length == 0) {
      alert_msg += "City is required.";
      alert_msg += newLine;
      alert_cnt += 1;
    }
    // zip
    if ($("input[name='zipcode']").val().length == 0) {
      alert_msg += "ZIP Code is required.";
      alert_msg += newLine;
      alert_cnt += 1;
    }
    // state
    if ($("input[name='state']").val().length == 0) {
      alert_msg += "State is required.";
      alert_msg += newLine;
      alert_cnt += 1;
    }

    // INSERT ADDITIONAL CUSTOM VALIDATION FOR ADOPTION-FOSTER APPLICATION
    // INSERT EMAIL ADDRESS VALIDATION

    // valid primary email
    // alternate regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        $("#email-yui_3_17_2_1_1597591121700_26558 input").val()
      )
    ) {
      alert_msg += "Please enter a valid Primary Email address.";
      alert_msg += newLine;
      alert_cnt += 1;
    }
  }

  // show applicable alert messages for required fields
  if (alert_cnt > 0) {
    alert(alert_msg);
    return false;
  }
});

// remove PayPal
if (document.URL.includes("membership")) {
  $("#paypal_href").remove();
}
