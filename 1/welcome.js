Ext.onReady(function() {
  Ext.BLANK_IMAGE_URL = 'loading.gif';
  Ext.QuickTips.init();




    var fp = new Ext.form.FormPanel({
        titleAlign   : 'center', 
        renderTo     : 'div1',
        extend: 'Ext.form.Panel',
        xtype: 'form-login',
        title: 'Login',
        frame:true,
        method: 'POST',
        width: 320,
        bodyPadding: 3,
        


        defaultType: 'textfield',

        items: [{
          allowBlank: false,
          fieldLabel: 'User ID',
          id:'userid',
          name: 'user',
          emptyText: 'user id'
          }, {
          allowBlank: false,
          id:'userpw',
          fieldLabel: 'Password',
          name: 'pass',
          emptyText: 'password',
          inputType: 'password'
          }, {
          xtype:'checkbox',
          fieldLabel: 'Remember me',
          name: 'remember'
          }],

        buttons: [
          {
              id  : 'register',
            text:'register',
            scale: 'medium',
            scope:this,
            handler : function()
            {
               window.location = "register.html";
            }
          },
          { 
            id  : 'login',
            text:'Login',
            scale: 'medium',
            scope:this,
            handler : function()
            {
              fp.submit();
            }
          },
          { 
            id  : 'reset',
            text:'重置',
            scale: 'medium',
            scope: 'this',
            handler : function()
            {
            fp.form.reset()
            }

          }
        ],




     });

  fp.submit = function()
        {
                                   this.form.doAction('submit', {
                              url: 'http://localhost:8080/jsontest/login',
                              method: 'post',
                              params: '',
                              success: function(form, action){
                                  
                                  
                                      window.location = "manager.html";
                                  
                                      
                              },
                              failure: function(){
                                  Ext.Msg.alert('错误', '密码错了');
                                 // window.location = "register.html";
                              }
                          });
        }



//fp.setPosition(x, y,a)
//var viewPort = new Ext.Viewport();


















}) ;










