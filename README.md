Very simple & generic color picker for use with jQuery

* [DEMO](http://itechnology.github.com/basicColorPicker/)

**Signature**

    jQuery(selector).basicColorPicker(object options, function callBack) returns jQuery Object


**Sample Usages**

    jQuery(selector).basicColorPicker();
    jQuery(selector).basicColorPicker({ size: "20px" });
    jQuery(selector).basicColorPicker({}, function(color, ele) {
        // jQuery(ele).hide(0);
        alert(color);
    });


**Subscribe to EvenHandler**
*Instead of using the callBack as shown above, you can also subscribe to the eventHandler*

    jQuery(selector).bind("picker:selected", function(e){
        // jQuery(e.target).hide(0);
        alert(e.color);
    });
