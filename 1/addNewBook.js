





function addNewBook() {
  Ext.BLANK_IMAGE_URL = 'loading.gif';
  Ext.QuickTips.init();
  var names = [
	['小说'],
	['社科类'],
	['IT类'],
	['英文类']
  ];

  var mySimpleStore = new Ext.data.ArrayStore({
	data   : names,
	fields : ['name']
  });


              

    var fp = new Ext.form.FormPanel({
        titleAlign   : 'center', 
        renderTo     : 'centerRegion',
        extend: 'Ext.form.Panel',
        xtype: 'form-login',
        title: '新书入库',
        frame:true,
        buttonAlign:'center', 
        method: 'POST',
        width: 1130,
        height:500,
        bodyPadding: 3,
        

        


        defaultType: 'textfield',

        items: [{
          allowBlank: false,
          fieldLabel: '新书书名',
          id:'bookname',
          name: 'bookname',
          emptyText: '新书书名'
          }, {
          allowBlank: false,
          fieldLabel: '新书作者',
          id:'bookisbn',
          name: 'bookisbn',
          emptyText: '新书作者'
          }, {
          allowBlank: false,
          fieldLabel: '新书作者',
          id:'bookisbn',
          name: 'bookisbn',
          emptyText: '新书作者'
          },{
		xtype        : 'combo',
	    fieldLabel   : '请选择类型',
	    store        : mySimpleStore,
	    displayField : 'name',
	    typeAhead    : true,
	    mode         : 'local'								
          },
           {
          allowBlank: false,
          fieldLabel: '价格',
          id:'bookprice',
          name: 'bookprice',
          emptyText: '新书价格'
          },
           {
          allowBlank: false,
          fieldLabel: '出版日期',
          xtype: 'datefield',
          id:'publishtime',
          name: 'publishtime',
          emptyText: '出版日期',
          maxValue: new Date()
          },{
          	xtype : 'htmleditor',
          	fieldLabel : '请输入内容简介',
          	anchor:'100% 50%'
          }],

        buttons: [
         	
          { 
            id  : 'registerbook',

            text:'书籍注册',
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











                 

          
}