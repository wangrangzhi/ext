





function editBook() {
  Ext.BLANK_IMAGE_URL = 'loading.gif';
  Ext.QuickTips.init();
  alert('edit sd');


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
          }]

    



     });








                 

          
}