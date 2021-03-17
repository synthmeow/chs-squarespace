// salesforce class creation for adoption foster application
// for new salesforce class, need to make sure it's uniquely named
Y.namespace("Template").Salesforce = Class.create({
  initialize: function (config) {
    this.config = config;
  },

  formatPhone: function (formData) {
    var phoneArr = new Array(
      formData["phone-area-code"],
      formData["phone-local-prefix"],
      formData["phone-local-suffix"]
    );
    return phoneArr.join("-");
  },

  // rename to reuse for different forms, eg. submitNormalLead
  submitTestApplication: function () {
    var formData = this.getFormData();
    var phoneNumber = this.formatPhone(formData);

    // add data from form values pulled below in getFormData().
    // replace the keys for title, company, and address with those
    // that are generated for your form
    // NOTE: If info begins with 'block-yui', 'select-yui', 'text-yui',
    // etc it will stay the same and is a useable id for both CSS AND Script

    var params = {
      // mapping form data to Salesforce lead variables
      // Salesforce variable on left, Squarespace variable on right
      // lead_source: 'Adoption Application'

      lead_source: function () {
        var application_reason = document.getElementById(
          "select-yui_3_17_2_1_1604182615886_21220-field"
        ).value;
        if (application_reason == "Adopt an animal") {
          return "Adoption Application";
        }
        if (application_reason == "Become a foster") {
          return "Foster Application";
        }
      },

      first_name: formData["fname"],
      last_name: formData["lname"],

      street: formData["address"] + "\r\n" + formData["address2"],
      city: formData["city"],
      state: formData["state"],
      zip: formData["zipcode"],
      country: formData["country"],

      Animal_Name_Test__c:
        formData["text-yui_3_17_2_1_1597531446841_78001-field"],
      email: document.getElementById(
        "email-yui_3_17_2_1_1597591121700_26558-field"
      ).value,

      phone: formData["text-yui_3_17_2_1_1606077467812_479442-field"],
      Primary_Phone_Type__c: function () {
        var radios = document.getElementsByName(
          "radio-yui_3_17_2_1_1604254721301_214758-field"
        );
        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            return radios[i].value;
            break;
          }
        }
      },
      Secondary_Phone__c:
        formData["text-yui_3_17_2_1_1606077467812_480137-field"],
      Secondary_Phone_Type__c: function () {
        var radios = document.getElementsByName(
          "radio-yui_3_17_2_1_1604254721301_216978-field"
        );
        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            return radios[i].value;
            break;
          }
        }
      },

      Apartment_Phone__c:
        formData["text-yui_3_17_2_1_1606077467812_478726-field"],
      Apartment_Name__c:
        formData["text-yui_3_17_2_1_1604254721301_171430-field"],

      Planning_to_Move__c: function () {
        var radios = document.getElementsByName(
          "radio-yui_3_17_2_1_1604254721301_189985-field"
        );
        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            return radios[i].value;
            break;
          }
        }
      },

      Home_Status__c: function () {
        var radios = document.getElementsByName(
          "radio-yui_3_17_2_1_1597591121700_60928-field"
        );
        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            return radios[i].value;
            break;
          }
        }
      },

      Home_Type__c: function () {
        var radios = document.getElementsByName(
          "radio-yui_3_17_2_1_1604254721301_248740-field"
        );
        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            return radios[i].value;
            break;
          }
        }
      },

      Primary_Email_Owner__c:
        formData["text-yui_3_17_2_1_1604254721301_215647-field"],
      Secondary_Email__c: document.getElementById(
        "email-yui_3_17_2_1_1604254721301_217733-field"
      ).value,
      Secondary_Email_Owner__c:
        formData["text-yui_3_17_2_1_1604254721301_218383-field"],

      Cat_Foster_Willing_Preferences__c:
        formData["checkbox-yui_3_17_2_1_1605478609860_46244-field"] == undefined
          ? "Not applicable"
          : formData["checkbox-yui_3_17_2_1_1605478609860_46244-field"].replace(
              /, /g,
              ";"
            ),

      Dog_Foster_Willing_Preferences__c:
        formData["checkbox-yui_3_17_2_1_1605478609860_47468-field"] == undefined
          ? "Not applicable"
          : formData["checkbox-yui_3_17_2_1_1605478609860_47468-field"].replace(
              /, /g,
              ";"
            ),

      /*,Cat_Foster_Preferred_Preferences__c: (formData['checkbox-yui_3_17_2_1_1605487344069_92723-field'] == undefined ? 'Not applicable' : formData['checkbox-yui_3_17_2_1_1605487344069_92723-field'].replace(/, /g,";"))

,Dog_Foster_Preferred_Preferences__c: (formData['checkbox-yui_3_17_2_1_1605487344069_93383-field'] == undefined ? 'Not applicable' : formData['checkbox-yui_3_17_2_1_1605487344069_93383-field'].replace(/, /g,";"))
*/

      Names_Household__c:
        formData["textarea-yui_3_17_2_1_1605501008796_185522-field"],

      Family_Cat_Allergies__c:
        formData["select-yui_3_17_2_1_1604254721301_522806-field"],
      Family_Dog_Allergies__c:
        formData["select-yui_3_17_2_1_1604254721301_523589-field"],

      Animal_Adoption_Type__c:
        formData["select-yui_3_17_2_1_1604254721301_484719-field"],

      In_DFW_Area__c:
        formData["select-yui_3_17_2_1_1605501008796_325732-field"],

      Number_of_Cats__c:
        formData["number-yui_3_17_2_1_1605501008796_419956-field"],
      Number_of_Dogs__c:
        formData["number-yui_3_17_2_1_1605501008796_420664-field"],

      Ages_of_Children__c:
        formData["textarea-yui_3_17_2_1_1604254721301_312657-field"],

      Is_First_Experience_With_Cat__c:
        formData["select-yui_3_17_2_1_1606077467812_57854-field"],
      Is_First_Experience_With_Dog__c:
        formData["select-yui_3_17_2_1_1606077467812_58546-field"],
      Is_First_Experience_With_Pet__c:
        formData["select-yui_3_17_2_1_1606077467812_59224-field"],

      Fenced_Yard__c:
        formData["select-yui_3_17_2_1_1606077467812_164912-field"],
      Fence_Height__c: formData["text-yui_3_17_2_1_1606077467812_219205-field"],
      Slat_Spacing__c: formData["text-yui_3_17_2_1_1606077467812_219917-field"],
      Recently_Surrendered_Animal__c:
        formData["select-yui_3_17_2_1_1606077467812_220672-field"],
      Surrender_Details__c:
        formData["textarea-yui_3_17_2_1_1606077467812_222920-field"],

      Current_Vet_Name__c:
        formData["text-yui_3_17_2_1_1606077467812_283325-field"],
      Current_Vet_Phone__c:
        formData["text-yui_3_17_2_1_1606077467812_413296-field"],
      Additional_Vet_Info__c:
        formData["textarea-yui_3_17_2_1_1606077467812_284878-field"],

      Animal_Foster_Type__c:
        formData["select-yui_3_17_2_1_1606275061560_125634-field"],

      Current_Pet_Info__c:
        formData["textarea-yui_3_17_2_1_1615135663161_80183-field"],

      oid: this.config.oid
    };
    $.ajax({
      url: this.config.baseUrl,
      data: params,
      type: "GET",
      dataType: "jsonp",
      jsonp: false,
      complete: function (data) {
        console.log("Salesforce Lead Sent");
      }
    });
  },

  getFormData: function (formSubmit) {
    var data = {};

    // Not tested for more than one form on a page...
    Y.all("input,textarea,select,button").each(function (item) {
      var key = null;

      var $element = $(this);

      // this builds an array of input name -> value entered
      // in the sqsp forms, fields outside of name and email
      // don't have names and instead use random YUI ids.
      // jquery is included to pull in some extra data for the
      // phone number fields.  you need to find the ids for your
      // extra form fields and add them to params above.

      if (item.get("name")) {
        key = item.get("name");
      } else if ($element.attr("x-autocompletetype")) {
        key = $element.attr("x-autocompletetype");
      } else {
        key = item.get("id");
      }

      if (item.get("type") == "checkbox") {
        if (item.get("checked")) {
          if (data[key]) {
            data[key] = data[key] + ", " + item.get("value");
          } else {
            data[key] = item.get("value");
          }
        }
      } else {
        data[key] = item.get("value");
      }
    });

    console.log(data);
    return data;
  }
});



Y.on('domready', function() {
Y.use('event', 'node', function(Y) {
var submitbuttons = Y.all('input[type=submit]');
// need to modify for mobile devices
submitbuttons.on("click", function() {

if ($('#block-yui_3_17_2_1_1597531847481_3702').length && alert_cnt == 0) {
var salesforce = new Y.Template.Salesforce({
baseUrl: "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
oid: "00D4T000000DtBu",});
salesforce.submitTestApplication();
}

});
});
});
