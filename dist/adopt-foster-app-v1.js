// adoption foster application
try {
  document.getElementById(
    "textarea-yui_3_17_2_1_1615135663161_80183-field"
  ).value = "DATA";
} catch (error) {}

var loc_check;
// logic for adoption / foster application form
// hide all dependent fields to start

// hide SUBMIT button by default
// don't do these here, use the if statement
// $('.form-button-wrapper').addClass('formhide');

// load field information
// var name_01 = $('#name-yui_3_17_2_1_1597531847481_3707').detach();

// if current page is adoption or foster application, then hide submit button by default
if (
  document.URL ==
  "https://www.coppellhumanesociety.org/adoption-foster-application"
) {
  $(".form-button-wrapper").addClass("formhide");
}

// if current page is membership form, then hide submit button by default
if (document.URL == "https://www.coppellhumanesociety.org/membership-form") {
  $(".form-button-wrapper").addClass("formhide");
}

try {
  document.getElementsByClassName("field country")[0].style.display = "none";
} catch (error) {}

$(function () {
  $("input[name='country']").val("USA");
});

// general fields
$("#name-yui_3_17_2_1_1597531847481_3707").addClass("formhide");
$("#address-yui_3_17_2_1_1604254721301_154510").addClass("formhide"); // address
$("#text-yui_3_17_2_1_1604254721301_171430").addClass("formhide"); // apartment info 1
$("#text-yui_3_17_2_1_1606077467812_478726").addClass("formhide"); // apartment info 2
$("#radio-yui_3_17_2_1_1604254721301_248740").addClass("formhide"); // this address is a
$("#textarea-yui_3_17_2_1_1605501008796_185522").addClass("formhide"); // list adult names
$("#radio-yui_3_17_2_1_1597591121700_60928").addClass("formhide"); // own or rent
$("#radio-yui_3_17_2_1_1604254721301_189985").addClass("formhide"); // plan to move
$("#text-yui_3_17_2_1_1606077467812_479442").addClass("formhide"); // primary phone
$("#radio-yui_3_17_2_1_1604254721301_214758").addClass("formhide"); // primary phone type
$("#email-yui_3_17_2_1_1597591121700_26558").addClass("formhide"); // primary email
$("#text-yui_3_17_2_1_1604254721301_215647").addClass("formhide"); // primary email owner
$("#text-yui_3_17_2_1_1606077467812_480137").addClass("formhide"); // secondary phone
$("#radio-yui_3_17_2_1_1604254721301_216978").addClass("formhide"); // secondary phone type
$("#email-yui_3_17_2_1_1604254721301_217733").addClass("formhide"); // secondary email
$("#text-yui_3_17_2_1_1604254721301_218383").addClass("formhide"); // secondary email owner
$("#textarea-yui_3_17_2_1_1604254721301_312657").addClass("formhide"); // ages of children
$("#number-yui_3_17_2_1_1605501008796_419956").addClass("formhide"); // number of cats
$("#number-yui_3_17_2_1_1605501008796_420664").addClass("formhide"); // number of dogs

$("#textarea-yui_3_17_2_1_1615135663161_80183").addClass("formhide"); // current pet info

$("#select-yui_3_17_2_1_1606077467812_59224").addClass("formhide"); // first experience with pet
$("#select-yui_3_17_2_1_1606077467812_220672").addClass("formhide"); // surrendered
$("#textarea-yui_3_17_2_1_1606077467812_222920").addClass("formhide"); // surrendered details
$("#text-yui_3_17_2_1_1606077467812_283325").addClass("formhide"); // current vet
$("#text-yui_3_17_2_1_1606077467812_413296").addClass("formhide"); // current vet number
$("#textarea-yui_3_17_2_1_1606077467812_284878").addClass("formhide"); // additional vet info

// both, cat specific
$("#select-yui_3_17_2_1_1606077467812_57854").addClass("formhide"); // first experience with cat
$("#select-yui_3_17_2_1_1604254721301_522806").addClass("formhide"); // cat allergies

// both, dog specific
$("#select-yui_3_17_2_1_1606077467812_58546").addClass("formhide"); // first experience with dog
$("#select-yui_3_17_2_1_1606077467812_164912").addClass("formhide"); // fenced yard
$("#text-yui_3_17_2_1_1606077467812_219205").addClass("formhide"); // fence height
$("#text-yui_3_17_2_1_1606077467812_219917").addClass("formhide"); // slate spacing
$("#select-yui_3_17_2_1_1604254721301_523589").addClass("formhide"); // dog allergies

// adoption app specific fields
$("#select-yui_3_17_2_1_1604254721301_484719").addClass("formhide"); // adoption animal type
$("#text-yui_3_17_2_1_1597531446841_78001").addClass("formhide"); // animal name

// foster app specific fields
$("#select-yui_3_17_2_1_1606275061560_125634").addClass("formhide"); // foster animal type
$("#checkbox-yui_3_17_2_1_1605478609860_46244").addClass("formhide"); // foster willing cat
$("#checkbox-yui_3_17_2_1_1605487344069_92723").addClass("formhide"); // foster prefer cat
$("#checkbox-yui_3_17_2_1_1605478609860_47468").addClass("formhide"); // foster willing dog
$("#checkbox-yui_3_17_2_1_1605487344069_93383").addClass("formhide"); // foster prefer dog

var application_type = 0;
var age_check = 0;
var loc_check = 2;

var selection;

//$(document.body).wrap( "<div onclick=\"void(0);\"></div>" );

//$('#select-yui_3_17_2_1_1604182615886_21220-field').on("change",function(){
$(document).on(
  "change",
  "#select-yui_3_17_2_1_1604182615886_21220-field",
  function () {
    selection = $(this).val();
    if (selection == "Become a foster") {
      application_type = 2;
    }
    if (selection == "Adopt an animal") {
      application_type = 1;
    }
    if (selection == "") {
      application_type = 0;
    }
  }
);

//$('#radio-yui_3_17_2_1_1604254721301_126780 input').on("change",function(){
$(document).on(
  "change",
  "#radio-yui_3_17_2_1_1604254721301_126780 input",
  function () {
    selection = $(this).val();
    if (selection == "Yes") {
      age_check = 1;
      $("#age-ineligible").remove();
    }
    if (selection == "No") {
      age_check = 0;
      $("#radio-yui_3_17_2_1_1604254721301_126780").append(
        '<div id="age-ineligible" style="padding-top:7px;color:red;">We apologize, but we are unable to accept applicants under the age of 18.</div>'
      );
      $(".form-button-wrapper").addClass("formhide");
    }
  }
);

//$('#select-yui_3_17_2_1_1605501008796_325732-field').on("change",function(){
$(document).on(
  "change",
  "#select-yui_3_17_2_1_1605501008796_325732-field",
  function () {
    selection = $(this).val();
    if (selection == "Yes") {
      loc_check = 1;
    }
    if (selection == "No") {
      loc_check = 0;
    }
    if (selection == "") {
      loc_check = 2;
    }
    //alert(application_type + age_check + loc_check);
  }
);

// fosters outside dfw ineligible
// adopters outside dfw warning
window.addEventListener("change", function () {
  if (
    loc_check == 0 &&
    application_type == 2 &&
    $("#loc-ineligible").length == 0
  ) {
    $("#select-yui_3_17_2_1_1605501008796_325732").append(
      '<div id="loc-ineligible" style="padding-top:7px;color:red;">We apologize, but we are unable to accept fosters into the program at this time who are not within the DFW area.</div>'
    );
    $("#loc-warning").remove();
    $(".form-button-wrapper").addClass("formhide");
  }
  if (
    loc_check == 0 &&
    application_type == 1 &&
    $("#loc-warning").length == 0
  ) {
    $("#select-yui_3_17_2_1_1605501008796_325732").append(
      '<div id="loc-warning" style="padding-top:7px;color:blue;">Application will require board of directors review & approval.</div>'
    );
    $("#loc-ineligible").remove();
  }
  if (loc_check == 1 || loc_check == 2) {
    $("#loc-ineligible").remove();
    $("#loc-warning").remove();
  }
});

window.addEventListener("change", function () {
  $(function () {
    $("input[name='country']").val("USA");
  });

  //document.getElementById("textarea-yui_3_17_2_1_1615135663161_80183-field").value = 'DATA'

  var cat_num = isNaN(
    parseInt($("#number-yui_3_17_2_1_1605501008796_419956-field").val())
  )
    ? 0
    : parseInt($("#number-yui_3_17_2_1_1605501008796_419956-field").val());
  var dog_num = isNaN(
    parseInt($("#number-yui_3_17_2_1_1605501008796_420664-field").val())
  )
    ? 0
    : parseInt($("#number-yui_3_17_2_1_1605501008796_420664-field").val());
  var pet_num = cat_num + dog_num;

  // if BECOME A FOSTER and OVER 18 and DFW YES
  // then show reg fields, foster fields, hide adopt fields, show submit button
  if (application_type == 2 && age_check == 1 && loc_check == 1) {
    if (pet_num <= 9) {
      $(".form-button-wrapper").removeClass("formhide");
    }

    // show foster fields
    $("#select-yui_3_17_2_1_1606275061560_125634").removeClass("formhide"); // foster animal type
    // if cat or dog selected, show foster specific fields for cat or dog
    if (
      $("#select-yui_3_17_2_1_1606275061560_125634 option:selected").text() ==
      "Cat"
    ) {
      $("#select-yui_3_17_2_1_1604254721301_522806").removeClass("formhide"); // cat allergies
      $("#select-yui_3_17_2_1_1604254721301_523589").addClass("formhide"); // dog allergies
      $("#checkbox-yui_3_17_2_1_1605478609860_46244").removeClass("formhide"); // foster willing cat
      $("#checkbox-yui_3_17_2_1_1605487344069_92723").addClass("formhide"); // foster prefer cat
      $("#select-yui_3_17_2_1_1606077467812_57854").removeClass("formhide"); // first experience with cat
      $("#checkbox-yui_3_17_2_1_1605478609860_47468").addClass("formhide"); // foster willing dog
      $("#checkbox-yui_3_17_2_1_1605487344069_93383").addClass("formhide"); // foster prefer dog
      $("#select-yui_3_17_2_1_1606077467812_58546").addClass("formhide"); // first experience with dog
      $("#select-yui_3_17_2_1_1606077467812_164912").addClass("formhide"); // fenced yard
      $("#text-yui_3_17_2_1_1606077467812_219205").addClass("formhide"); // fence height
      $("#text-yui_3_17_2_1_1606077467812_219917").addClass("formhide"); // slate spacing
    }
    if (
      $("#select-yui_3_17_2_1_1606275061560_125634 option:selected").text() ==
      "Dog"
    ) {
      $("#select-yui_3_17_2_1_1604254721301_522806").addClass("formhide"); // cat allergies
      $("#select-yui_3_17_2_1_1604254721301_523589").removeClass("formhide"); // dog allergies
      $("#checkbox-yui_3_17_2_1_1605478609860_47468").removeClass("formhide"); // foster willing dog
      $("#checkbox-yui_3_17_2_1_1605487344069_93383").addClass("formhide"); // foster prefer dog
      $("#checkbox-yui_3_17_2_1_1605478609860_46244").addClass("formhide"); // foster willing cat
      $("#checkbox-yui_3_17_2_1_1605487344069_92723").addClass("formhide"); // foster prefer cat
      $("#select-yui_3_17_2_1_1606077467812_57854").addClass("formhide"); // first experience with cat
      $("#select-yui_3_17_2_1_1606077467812_58546").removeClass("formhide"); // first experience with dog
      $("#select-yui_3_17_2_1_1606077467812_164912").removeClass("formhide"); // fenced yard
      $("#text-yui_3_17_2_1_1606077467812_219205").addClass("formhide"); // fence height
      $("#text-yui_3_17_2_1_1606077467812_219917").addClass("formhide"); // slate spacing
    }

    // new code

    if (
      $("#select-yui_3_17_2_1_1606077467812_164912 option:selected").text() ==
      "Yes"
    ) {
      $("#text-yui_3_17_2_1_1606077467812_219205").removeClass("formhide"); // fence height
      $("#text-yui_3_17_2_1_1606077467812_219917").removeClass("formhide"); // slate spacing
    }

    if (
      $("#select-yui_3_17_2_1_1606077467812_164912 option:selected").text() ==
        "No" ||
      $("#select-yui_3_17_2_1_1606275061560_125634 option:selected").text() ==
        "Cat"
    ) {
      $("#text-yui_3_17_2_1_1606077467812_219205").addClass("formhide"); // fence height
      $("#text-yui_3_17_2_1_1606077467812_219917").addClass("formhide"); // slate spacing
    }

    // end new code

    if (
      $("#select-yui_3_17_2_1_1606275061560_125634 option:selected").text() ==
      ""
    ) {
      $("#select-yui_3_17_2_1_1604254721301_522806").addClass("formhide"); // cat allergies
      $("#select-yui_3_17_2_1_1604254721301_523589").addClass("formhide"); // dog allergies
      $("#checkbox-yui_3_17_2_1_1605478609860_47468").addClass("formhide"); // foster willing dog
      $("#checkbox-yui_3_17_2_1_1605487344069_93383").addClass("formhide"); // foster prefer dog
      $("#checkbox-yui_3_17_2_1_1605478609860_46244").addClass("formhide"); // foster willing cat
      $("#checkbox-yui_3_17_2_1_1605487344069_92723").addClass("formhide"); // foster prefer cat
      $("#select-yui_3_17_2_1_1606077467812_57854").addClass("formhide"); // first experience with cat
      $("#select-yui_3_17_2_1_1606077467812_58546").addClass("formhide"); // first experience with dog
      $("#select-yui_3_17_2_1_1606077467812_164912").addClass("formhide"); // fenced yard
      $("#text-yui_3_17_2_1_1606077467812_219205").addClass("formhide"); // fence height
      $("#text-yui_3_17_2_1_1606077467812_219917").addClass("formhide"); // slate spacing
    }

    // show regular fields
    $("#name-yui_3_17_2_1_1597531847481_3707").removeClass("formhide");
    $("#address-yui_3_17_2_1_1604254721301_154510").removeClass("formhide"); // address
    $("#radio-yui_3_17_2_1_1604254721301_248740").removeClass("formhide"); // this address is a
    $("#textarea-yui_3_17_2_1_1605501008796_185522").removeClass("formhide"); // list adult names
    $("#radio-yui_3_17_2_1_1597591121700_60928").removeClass("formhide"); // own or rent
    $("#radio-yui_3_17_2_1_1604254721301_189985").removeClass("formhide"); // plan to move
    $("#text-yui_3_17_2_1_1606077467812_479442").removeClass("formhide"); // primary phone
    $("#radio-yui_3_17_2_1_1604254721301_214758").removeClass("formhide"); // primary phone type
    $("#email-yui_3_17_2_1_1597591121700_26558").removeClass("formhide"); // primary email
    $("#text-yui_3_17_2_1_1604254721301_215647").removeClass("formhide"); // primary email owner
    $("#text-yui_3_17_2_1_1606077467812_480137").removeClass("formhide"); // secondary phone
    $("#radio-yui_3_17_2_1_1604254721301_216978").removeClass("formhide"); // secondary phone type
    $("#email-yui_3_17_2_1_1604254721301_217733").removeClass("formhide"); // secondary email
    $("#text-yui_3_17_2_1_1604254721301_218383").removeClass("formhide"); // secondary email owner
    $("#textarea-yui_3_17_2_1_1604254721301_312657").removeClass("formhide"); // ages of children
    $("#number-yui_3_17_2_1_1605501008796_419956").removeClass("formhide"); // number of cats
    $("#number-yui_3_17_2_1_1605501008796_420664").removeClass("formhide"); // number of dogs

    // place here maybe

    $("#select-yui_3_17_2_1_1606077467812_59224").removeClass("formhide"); // first experience with pet
    $("#select-yui_3_17_2_1_1606077467812_220672").addClass("formhide"); // surrendered
    $("#textarea-yui_3_17_2_1_1606077467812_222920").addClass("formhide"); // surrendered details
    $("#text-yui_3_17_2_1_1606077467812_283325").removeClass("formhide"); // current vet
    $("#text-yui_3_17_2_1_1606077467812_413296").removeClass("formhide"); // current vet number
    $("#textarea-yui_3_17_2_1_1606077467812_284878").removeClass("formhide"); // additional vet info

    // hide adopt fields
    $("#select-yui_3_17_2_1_1604254721301_484719").addClass("formhide"); // adoption animal type
    $("#text-yui_3_17_2_1_1597531446841_78001").addClass("formhide"); // animal name
  }

  // if ADOPT AN ANIMAL AND OVER 18 and DFW YES OR NO
  // then show reg fields, adoption fields, hide foster fields, submit button
  if (
    application_type == 1 &&
    age_check == 1 &&
    (loc_check == 1 || loc_check == 0)
  ) {
    if (pet_num <= 9) {
      $(".form-button-wrapper").removeClass("formhide");
    }

    // show regular fields
    $("#name-yui_3_17_2_1_1597531847481_3707").removeClass("formhide");
    $("#address-yui_3_17_2_1_1604254721301_154510").removeClass("formhide"); // address
    $("#radio-yui_3_17_2_1_1604254721301_248740").removeClass("formhide"); // this address is a
    $("#textarea-yui_3_17_2_1_1605501008796_185522").removeClass("formhide"); // list adult names
    $("#radio-yui_3_17_2_1_1597591121700_60928").removeClass("formhide"); // own or rent
    $("#radio-yui_3_17_2_1_1604254721301_189985").removeClass("formhide"); // plan to move
    $("#text-yui_3_17_2_1_1606077467812_479442").removeClass("formhide"); // primary phone
    $("#radio-yui_3_17_2_1_1604254721301_214758").removeClass("formhide"); // primary phone type
    $("#email-yui_3_17_2_1_1597591121700_26558").removeClass("formhide"); // primary email
    $("#text-yui_3_17_2_1_1604254721301_215647").removeClass("formhide"); // primary email owner
    $("#text-yui_3_17_2_1_1606077467812_480137").removeClass("formhide"); // secondary phone
    $("#radio-yui_3_17_2_1_1604254721301_216978").removeClass("formhide"); // secondary phone type
    $("#email-yui_3_17_2_1_1604254721301_217733").removeClass("formhide"); // secondary email
    $("#text-yui_3_17_2_1_1604254721301_218383").removeClass("formhide"); // secondary email owner
    $("#textarea-yui_3_17_2_1_1604254721301_312657").removeClass("formhide"); // ages of children
    $("#number-yui_3_17_2_1_1605501008796_419956").removeClass("formhide"); // number of cats
    $("#number-yui_3_17_2_1_1605501008796_420664").removeClass("formhide"); // number of dogs
    $("#select-yui_3_17_2_1_1606077467812_59224").removeClass("formhide"); // first experience with pet
    $("#select-yui_3_17_2_1_1606077467812_220672").removeClass("formhide"); // surrendered
    $("#textarea-yui_3_17_2_1_1606077467812_222920").removeClass("formhide"); // surrendered details
    $("#text-yui_3_17_2_1_1606077467812_283325").removeClass("formhide"); // current vet
    $("#text-yui_3_17_2_1_1606077467812_413296").removeClass("formhide"); // current vet number
    $("#textarea-yui_3_17_2_1_1606077467812_284878").removeClass("formhide"); // additional vet info

    // if cat or dog selected, show adoption specific fields for cat or dog
    if (
      $("#select-yui_3_17_2_1_1604254721301_484719 option:selected").text() ==
      "Cat"
    ) {
      $("#select-yui_3_17_2_1_1604254721301_522806").removeClass("formhide"); // cat allergies
      $("#select-yui_3_17_2_1_1604254721301_523589").addClass("formhide"); // dog allergies
      $("#select-yui_3_17_2_1_1606077467812_57854").removeClass("formhide"); // first experience with cat
      $("#select-yui_3_17_2_1_1606077467812_58546").addClass("formhide"); // first experience with dog
      $("#select-yui_3_17_2_1_1606077467812_164912").addClass("formhide"); // fenced yard
      $("#text-yui_3_17_2_1_1606077467812_219205").addClass("formhide"); // fence height
      $("#text-yui_3_17_2_1_1606077467812_219917").addClass("formhide"); // slate spacing
    }
    if (
      $("#select-yui_3_17_2_1_1604254721301_484719 option:selected").text() ==
      "Dog"
    ) {
      $("#select-yui_3_17_2_1_1604254721301_522806").addClass("formhide"); // cat allergies
      $("#select-yui_3_17_2_1_1604254721301_523589").removeClass("formhide"); // dog allergies
      $("#select-yui_3_17_2_1_1606077467812_57854").addClass("formhide"); // first experience with cat
      $("#select-yui_3_17_2_1_1606077467812_58546").removeClass("formhide"); // first experience with dog
      $("#select-yui_3_17_2_1_1606077467812_164912").removeClass("formhide"); // fenced yard
      $("#text-yui_3_17_2_1_1606077467812_219205").removeClass("formhide"); // fence height
      $("#text-yui_3_17_2_1_1606077467812_219917").removeClass("formhide"); // slate spacing
    }
    if (
      $("#select-yui_3_17_2_1_1604254721301_484719 option:selected").text() ==
      ""
    ) {
      $("#select-yui_3_17_2_1_1604254721301_522806").addClass("formhide"); // cat allergies
      $("#select-yui_3_17_2_1_1604254721301_523589").addClass("formhide"); // dog allergies
      $("#select-yui_3_17_2_1_1606077467812_57854").addClass("formhide"); // first experience with cat
      $("#select-yui_3_17_2_1_1606077467812_58546").addClass("formhide"); // first experience with dog
      $("#select-yui_3_17_2_1_1606077467812_164912").addClass("formhide"); // fenced yard
      $("#text-yui_3_17_2_1_1606077467812_219205").addClass("formhide"); // fence height
      $("#text-yui_3_17_2_1_1606077467812_219917").addClass("formhide"); // slate spacing
    }

    // show adoption fields
    $("#select-yui_3_17_2_1_1604254721301_484719").removeClass("formhide"); // adoption animal type
    $("#text-yui_3_17_2_1_1597531446841_78001").removeClass("formhide"); // animal name

    // hide foster fields
    $("#select-yui_3_17_2_1_1606275061560_125634").addClass("formhide"); // foster animal type
    $("#checkbox-yui_3_17_2_1_1605478609860_46244").addClass("formhide"); // foster willing cat
    $("#checkbox-yui_3_17_2_1_1605487344069_92723").addClass("formhide"); // foster prefer cat
    $("#checkbox-yui_3_17_2_1_1605478609860_47468").addClass("formhide"); // foster willing dog
    $("#checkbox-yui_3_17_2_1_1605487344069_93383").addClass("formhide"); // foster prefer dog
  }
});

// if rent selected, show apartment fields
$("#radio-yui_3_17_2_1_1597591121700_60928 input").click(function () {
  selection = $(this).val();
  if (selection == "Rent / Lease") {
    $("#text-yui_3_17_2_1_1604254721301_171430").removeClass("formhide");
    $("#text-yui_3_17_2_1_1606077467812_478726").removeClass("formhide");
  }
  if (selection == "Own") {
    $("#text-yui_3_17_2_1_1604254721301_171430").addClass("formhide");
    $("#text-yui_3_17_2_1_1606077467812_478726").addClass("formhide");
  }
});

$(document).on(
  "change",
  "#number-yui_3_17_2_1_1605501008796_419956",
  function () {
    var total_animals =
      (parseInt($("#number-yui_3_17_2_1_1605501008796_419956-field").val()) ||
        0) +
      (parseInt($("#number-yui_3_17_2_1_1605501008796_420664-field").val()) ||
        0);

    if (total_animals >= 9) {
      $("#textarea-yui_3_17_2_1_1615135663161_80183").addClass("formhide");
      $(".form-button-wrapper").addClass("formhide");
      $("#pet-ineligible").remove();
      $("#number-yui_3_17_2_1_1605501008796_420664").append(
        '<div id="pet-ineligible" style="padding-top:7px;color:red;">We apologize, but we are unable to accept applicants with more than 8 pets.</div>'
      );
    } else if (total_animals > 0) {
      $("#pet-ineligible").remove();
      $(".form-button-wrapper").removeClass("formhide");
      $("#textarea-yui_3_17_2_1_1615135663161_80183").removeClass("formhide"); // current pet info
    } else {
      $("#pet-ineligible").remove();
      $(".form-button-wrapper").removeClass("formhide");
      $("#textarea-yui_3_17_2_1_1615135663161_80183").addClass("formhide"); // current pet info
    }
  }
);

$(document).on(
  "change",
  "#number-yui_3_17_2_1_1605501008796_420664",
  function () {
    var total_animals =
      (parseInt($("#number-yui_3_17_2_1_1605501008796_419956-field").val()) ||
        0) +
      (parseInt($("#number-yui_3_17_2_1_1605501008796_420664-field").val()) ||
        0);

    if (total_animals >= 9) {
      $("#textarea-yui_3_17_2_1_1615135663161_80183").addClass("formhide");
      $(".form-button-wrapper").addClass("formhide");
      $("#pet-ineligible").remove();
      $("#number-yui_3_17_2_1_1605501008796_420664").append(
        '<div id="pet-ineligible" style="padding-top:7px;color:red;">We apologize, but we are unable to accept applicants with more than 8 pets.</div>'
      );
    } else if (
      (parseInt($("#number-yui_3_17_2_1_1605501008796_420664-field").val()) ||
        0) > 4 &&
      application_type == 2
    ) {
      $("#textarea-yui_3_17_2_1_1615135663161_80183").addClass("formhide");
      $(".form-button-wrapper").addClass("formhide"); // hide the submit button
      $("#pet-ineligible").remove();
      $("#number-yui_3_17_2_1_1605501008796_420664").append(
        '<div id="pet-ineligible" style="padding-top:7px;color:red;">We apologize, but we are unable to accept dog foster applicants with 5 or more dogs.</div>'
      );
    } else if (total_animals > 0) {
      $("#pet-ineligible").remove();
      $(".form-button-wrapper").removeClass("formhide");
      $("#textarea-yui_3_17_2_1_1615135663161_80183").removeClass("formhide"); // current pet info
    } else {
      $("#pet-ineligible").remove();
      $(".form-button-wrapper").removeClass("formhide");
      $("#textarea-yui_3_17_2_1_1615135663161_80183").addClass("formhide"); // current pet info
    }
  }
);

// formatting of phone fields
try {
// apartment phone
$(function() {
document.getElementById("text-yui_3_17_2_1_1606077467812_478726-field").maxLength = "12";
$('#text-yui_3_17_2_1_1606077467812_478726-field').keydown(function(e) {
var key = e.charCode || e.keyCode || 0;
$text = $(this);
if (key !== 8 && key !== 9) {
if ($text.val().length === 3) {$text.val($text.val() + '-');}
if ($text.val().length === 7) {$text.val($text.val() + '-');}}
return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
})
});
// primary phone
$(function() {
document.getElementById("text-yui_3_17_2_1_1606077467812_479442-field").maxLength = "12";
$('#text-yui_3_17_2_1_1606077467812_479442-field').keydown(function(e) {
var key = e.charCode || e.keyCode || 0;
$text = $(this);
if (key !== 8 && key !== 9) {
if ($text.val().length === 3) {$text.val($text.val() + '-');}
if ($text.val().length === 7) {$text.val($text.val() + '-');}}
return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
})
});
// proper formatting for phone fields
// secondary phone
$(function() {
document.getElementById("text-yui_3_17_2_1_1606077467812_480137-field").maxLength = "12";
$('#text-yui_3_17_2_1_1606077467812_480137-field').keydown(function(e) {
var key = e.charCode || e.keyCode || 0;
$text = $(this);
if (key !== 8 && key !== 9) {
if ($text.val().length === 3) {$text.val($text.val() + '-');}
if ($text.val().length === 7) {$text.val($text.val() + '-');}}
return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
})
});
// proper formatting for phone fields
// vet phone
$(function() {
document.getElementById("text-yui_3_17_2_1_1606077467812_413296-field").maxLength = "12";
$('#text-yui_3_17_2_1_1606077467812_413296-field').keydown(function(e) {
var key = e.charCode || e.keyCode || 0;
$text = $(this);
if (key !== 8 && key !== 9) {
if ($text.val().length === 3) {$text.val($text.val() + '-');}
if ($text.val().length === 7) {$text.val($text.val() + '-');}}
return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
})
});
  
}
catch (error) {
}