// contact us salesforce lead code

Y.namespace('Template').Salesforce = Class.create({

    initialize: function (config) {
        this.config = config;
    },
  
    formatPhone: function(formData) {
        var phoneArr = new Array(formData['phone-area-code'], formData['phone-local-prefix'], formData['phone-local-suffix']);
      	return phoneArr.join('-')
    },
    
    submitContactUs: function () {
        var formData = this.getFormData();

        var phoneNumber = this.formatPhone(formData)

var params = {
first_name: formData['fname'],
last_name: formData['lname'],
email: formData['email'],   
  
Contact_Us_Subject__c: formData['text-yui_3_17_2_1_1567872623266_18362-field'],         
  
Contact_Us_Message__c: formData['textarea-yui_3_17_2_1_1567872623266_18363-field'], 
    
lead_source: 'Contact Us Form',
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
            }
        });
    },

    getFormData: function (formSubmit) {
        var data = {};
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