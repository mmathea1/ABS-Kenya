jQuery(function(){
    jQuery('.showDiv').click(function(){
        jQuery('.targetDiv').hide();
        jQuery('#div'+$(this).attr('target')).show();
    });
});
