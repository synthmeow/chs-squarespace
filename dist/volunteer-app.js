
Y.namespace('Template').SalesforceV = Class.create({
    initialize: function (config) {
        this.config = config;
    },

    formatPhone: function(formData) {
        var phoneArr = new Array(formData['phone-area-code'], formData['phone-local-prefix'], formData['phone-local-suffix']);
      	return phoneArr.join('-')
    },

    submitVolunteerInterest: function () {
        
        console.log(formData['checkbox-yui_3_17_2_1_1569540000235_14154-field']);
        console.log(formData['checkbox-yui_3_17_2_1_1569540000235_14154']);
 
        var formData = this.getFormData();

        var phoneNumber = this.formatPhone(formData)

var params = {

first_name: formData['fname'],
last_name: formData['lname'],
email: formData['email'],
phone:
formData['phone-area-code'] +
formData['phone-local-prefix'] +
formData['phone-local-suffix'],

Volunteer_Interest__c: (formData['checkbox-yui_3_17_2_1_1569540000235_14154-field'] == undefined ? 'Not applicable' : formData['checkbox-yui_3_17_2_1_1569540000235_14154-field'].replace(/, /g,";")),

lead_source: 'Volunteer Interest',
oid: this.config.oid
};

        $.ajax({
            url: this.config.baseUrl,
            data: params,
            type: 'GET',
            dataType: 'jsonp',
            jsonp: false,
            complete: function(data) {
                console.log('Salesforce Lead Sent');
                console.log(params);

            }
        });
    },

    getFormData: function (formSubmit) {
        var data = {};

        // Not tested for more than one form on a page...
        Y.all('input,textarea,select,button').each(function(item) {
            var key = null;
            var $element = $(this);
            if (item.get('name')) {
                key = item.get('name');
            } else if ($element.attr('x-autocompletetype')) {
                key = $element.attr('x-autocompletetype');

            } else {
                key = item.get('id');
            }

            if (item.get('type') == 'checkbox') {
            	  if (item.get('checked')) {
                	  if (data[key]) {
                    	  data[key] = data[key] + ', ' + item.get('value')
                    } else {
                    	  data[key] = item.get('value')
                    }
                }
            } else {
      			    data[key] = item.get('value');
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

window.dataLayer.push({
        'event': 'volunteer_interest_submission'
});

if ($('#block-yui_3_17_2_1_1569540134907_6351').length) {
var salesforce = new Y.Template.SalesforceV({
baseUrl: "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
oid: "00D4T000000DtBu",});
salesforce.submitVolunteerInterest();
}

});
});
});
