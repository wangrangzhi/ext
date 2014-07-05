





function addNewBook(centerRegion) {
  Ext.BLANK_IMAGE_URL = 'loading.gif';
  Ext.QuickTips.init();
  var remoteJsonStore = new Ext.data.JsonStore({
	root          : 'records',
	totalProperty : 'totalCount',
	baseParams    : {
		column : 'fullName'
	},
	fields     : [
	
		{
            name    : 'name',
            mapping : 'fullName'
		}
		,
		{
            name    : 'id',
            mapping : 'id'
		}	
		
	],
	proxy : new Ext.data.ScriptTagProxy({
		url : 'http://localhost:8080/jsontest/type'
	})
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
        id :'addNewBook',
        

        


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
          id:'bookauthor',
          name: 'bookauthor',
          emptyText: '新书作者'
          },{
				xtype          : 'combo',
				fieldLabel     : 'Search by name',
				forceSelection : true,
				displayField   : 'name',
				valueField : 'id',
				//tpl		   : tpl,
				loadingText	   : 'Querying....',
				//pageSize	   : 20,
				minChars	   : 1,
				triggerAction  : 'name',
				//itemSelector	: 'div.search-item',
				store		: remoteJsonStore							
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
          	xtype          : 'htmleditor',
			fieldLabel     : "Enter in any text",
			anchor         : '100% 100%',
			allowBlank     : false,
			id			   :'bookdescription',
			name			   :'bookdescription'
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
                              url: 'http://localhost:8080/jsontest/addNewBook',
                              method: 'post',
                              params: '',
                              success: function(form, action){
                                  
                                  Ext.Msg.alert('success', '新书');
                                    //  window.location = "manager.html";
                                  
                                      
                              },
                              failure: function(){
                                  Ext.Msg.alert('错误', '新书输入失败');
                                 // window.location = "register.html";
                              }
                          });
        }



//fp.setPosition(x, y,a)
//var viewPort = new Ext.Viewport();











                 

          
}