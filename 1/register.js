Ext.onReady(function() {
  Ext.BLANK_IMAGE_URL = 'loading.gif';
  Ext.QuickTips.init();




    var reg = new Ext.form.FormPanel({
            extend: 'Ext.form.Panel',
            xtype: 'form-register',
            renderTo     : 'div1',
            titleAlign   : 'center', 
            frame: true,
            title: 'Regiest',
            method: 'POST',
            bodyPadding: 10,
            autoScroll:true,
            width: 355,
            bodyPadding: 3,
            defaultType: 'textfield',

            fieldDefaults: {
                labelAlign: 'left',
                labelWidth: 115,
                msgTarget: 'side'
                           },
             items: [
                        {
                              xtype: 'fieldset',
                              title: 'User Info',
                              defaultType: 'textfield',
                              defaults: {
                                  anchor: '100%'
                                        },
                              
                              items: [
                                          { allowBlank:false, fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
                                          { allowBlank:false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' }
                                         
                                      ]
                        }
                                              , {
                                                    xtype: 'fieldset',
                                                    title: 'Contact Information',
                                                    
                                                    defaultType: 'textfield',
                                                    defaults: {
                                                        anchor: '100%'
                                                    },
                                                    
                                                    items: [{
                                                        fieldLabel: 'First Name',
                                                        emptyText: 'First Name',
                                                        name: 'first'
                                                    }, {
                                                        fieldLabel: 'Last Name',
                                                        emptyText: 'Last Name',
                                                        name: 'last'
                                                    }, {
                                                        fieldLabel: 'Company',
                                                        name: 'company'
                                                    }, {
                                                        fieldLabel: 'Email',
                                                        name: 'email',
                                                        vtype: 'email'
                                                    },
                                                      {
                                                          xtype: 'datefield',
                                                          fieldLabel: 'Date of Birth',
                                                          name: 'dob',
                                                          allowBlank: false,
                                                          maxValue: new Date()
                                                      }]
                  }],

                      buttons: [{
                                text: 'Register',
                                  scale: 'medium',
                                            scope:this,
                                            handler : function()


                                            {

                                             
                                              reg.register();
                                            }


                            }]



});



  reg.register = function()
        {
                                   this.form.doAction('submit', {
                              url: 'http://localhost:8080/jsontest/register',
                              method: 'post',
                              params: '',
                              success: function(form, action){
                                  
                                  
                                      
                                      alert('注册成功！');
                                      window.location = "welcome.html";
                                  
                                      
                              },
                              failure: function(){
                                  Ext.Msg.alert('错误', '没有注册成功');
                                 // window.location = "register.html";
                              }
                          });
        }



}) ;










