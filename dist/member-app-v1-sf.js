// salesforce class creation for adoption foster application
// for new salesforce class, need to make sure it's uniquely named
Y.namespace("Template").SalesforceMA = Class.create({
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
submitMembershipApplication: function () {
var formData = this.getFormData();
var phoneNumber = this.formatPhone(formData);

// add data from form values pulled below in getFormData().
// replace the keys for title, company, and address with those
// that are generated for your form
// NOTE: If info begins with 'block-yui', 'select-yui', 'text-yui',
// etc it will stay the same and is a useable id for both CSS AND Script

var params = {

lead_source: "Membership Application",

street: formData["address"] + "\r\n" + formData["address2"],
city: formData["city"],
state: formData["state"],
zip: formData["zipcode"],
country: formData["country"],

Desired_Role__c: function () {
var radios = document.getElementsByName("radio-yui_3_17_2_1_1579456881573_55074-field");
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
      break;
    }
  }
},

first_name: formData["fname"],
last_name: formData["lname"],
email: document.getElementById("email-yui_3_17_2_1_1579484904244_20541-field").value,
phone: formData['phone-area-code'] + formData['phone-local-prefix'] + formData['phone-local-suffix'],

Primary_Phone_Type__c: formData["select-yui_3_17_2_1_1579553504342_60432-field"],
Secondary_Phone__c: formData["text-yui_3_17_2_1_1606077467812_480137-field"],
Secondary_Phone_Type__c: formData["select-yui_3_17_2_1_1579553504342_170914-field"],
Age__c: formData["number-yui_3_17_2_1_1579484904244_40055-field"],

Volunteer_Interests_Detailed__c:
formData["checkbox-yui_3_17_2_1_1579553504342_191112-field"] == undefined
  ? ""
  : formData["checkbox-yui_3_17_2_1_1579553504342_191112-field"].replace(/, /g, ";"),

Experience_in_Fundraising__c: formData["textarea-yui_3_17_2_1_1579553504342_214998-field"],
Experience_in_People_Management__c: formData["textarea-yui_3_17_2_1_1579553504342_215692-field"],
Experience_in_Recruiting__c: formData["textarea-yui_3_17_2_1_1579553504342_239119-field"],
Additional_Skills__c: formData["textarea-yui_3_17_2_1_1579553504342_263803-field"],
Special__c: formData["textarea-yui_3_17_2_1_1579553504342_264549-field"],
Referral_Source__c: formData["select-yui_3_17_2_1_1579553504342_293469-field"],
Referral_Source_Other_Description__c: formData["text-yui_3_17_2_1_1579553504342_322850-field"],

oid: this.config.oid
};
    

$.ajax({
url: this.config.baseUrl,
data: params,
type: "GET",
dataType: "jsonp",
jsonp: false,
complete: function (data) {
console.log("Membership Application data sent.");
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

Y.on("domready", function () {
  Y.use("event", "node", function (Y) {
    var submitbuttons = Y.all("input[type=submit]");
    // need to modify for mobile devices
    submitbuttons.on("click", function () {
      if (
        $("#email-yui_3_17_2_1_1579484904244_20541-field").length &&
        alert_cnt == 0
      ) {
        var salesforce = new Y.Template.Salesforce({
          baseUrl:
            "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
          oid: "00D4T000000DtBu"
        });
        salesforce.submitMembershipApplication();
      }
    });
  });
});
