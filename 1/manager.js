Ext.onReady(function() {

    new Ext.Viewport({
        layout   : 'border',
        defaults : {
            frame  : true,
            split : true,


          collapsible : true,
         
          bodyPadding : 10
        },
        items : [



            {
                title       : 'North Panel',
                region      : 'north',
                height      : 100,
                minHeight   : 100,
                maxHeight   : 150,
                html : "<h1>图书管理系统</h1>",
                collapsible : true,
                bodyStyle:"background-image:url('bk1.jpg')",
            },
            {
                title       : 'South Panel',
                region      : 'south',
                height      : 75,
                split       : false,
                margins     : {
                    top : 5
                }
            },
          
            {
                title        : 'West Panel',
                region       : 'west',
                  width       : 100,
                minWidth    : 150,
                maxWidth    : 900,
                collapsible  : true,
                 items : [{
                                  xtype : "panel",
                                  title : "新书入库",
                                  id : "a",
                                  
                                    listeners: {
                                        click: {
                                            element: 'el', //bind to the underlying el property on the panel
                                            fn: function(){ 
                                                      var centerPanel  = Ext.getCmp('centerPanel');
                                                     var centerRegion = Ext.getCmp('centerRegion');

                                                  centerRegion.remove(centerPanel, true);
                                                   addNewBook(centerRegion);
                                                  centerRegion.doLayout();  
                                            }
                                        }
                                    }


                                },{
                                  xtype : "panel",
                                  title : "书籍管理",
                                                        listeners: {
                                                            click: {
                                                                element: 'el', //bind to the underlying el property on the panel
                                                                fn: function(){ 
                                                                          var centerPanel  = Ext.getCmp('fp');
                                                                         var centerRegion = Ext.getCmp('centerRegion');

                                                                      centerRegion.destroy();
                                                                       editBook();
                                                                      centerRegion.doLayout();  
                                                                }
                                                            }
                                                        }
                                },{
                                  xtype : "panel",
                                  title : "旧书删除"
                                },{
                                  xtype : "panel",
                                  title : "读者管理"
                                },{
                                  xtype : "panel",
                                  title : "退出系统"
                       }]
                
            },
            {
                xtype  : 'container',
                region : 'center',
                layout : 'fit',
                id     : 'centerRegion',
                autoEl : {},
                items  : {
                    title : 'Center Region',
                    id    : 'centerPanel',
                    html  : 'I am disposable',
                    frame : true
                }

            }
        ],



    });


});