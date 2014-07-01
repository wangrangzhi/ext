Ext.onReady(function() {
    var myBtnHandler = function(btn) {                // 1
        Ext.MessageBox.alert('You Clicked', btn.text);
    };

    var fileBtn =  new Ext.Button({                   // 2
        text    : 'File',
        handler : myBtnHandler
    });
    var editBtn = new Ext.Button({                    // 3
        text    : 'Edit',
        handler : myBtnHandler
    });

    var tbFill = new Ext.Toolbar.Fill();             // 4

    var myTopToolbar = new Ext.Toolbar({             // 5
        items : [
            fileBtn,
            tbFill,
            editBtn
        ]
    });

    var myBottomToolbar = [                          // 6
        {
            text    : 'Save',
            handler : myBtnHandler
        },
        '-',
        {
            text    : 'Cancel',
            handler : myBtnHandler
        },
        '->',
        '<b>Items open: 1</b>'
    ];


    var myPanel = new Ext.Panel({
        width       : 200,
        height      : 150,
        title       : 'Ext Panels rock!',
        collapsible : true,
        renderTo    : Ext.getBody(),
        tbar        : myTopToolbar,
        bbar        : myBottomToolbar,
        html        : 'My first Toolbar Panel!'
    });

});
