**What you get**

*A compact and simple color picker

**What you don't get**
*Funky transitions, hover effect, or animations

**Try it**
[DEMO](http://itechnology.github.com/basicColorPicker/)

**Signature**

    jQuery(selector).basicColorPicker(object options, function callBack) returns jQuery Object


**Sample Usages**

    jQuery(selector).basicColorPicker();
    jQuery(selector).basicColorPicker({ size: "20px" });
    jQuery(selector).basicColorPicker({}, function(color) {
        alert(color);
    });


**Subscribe to EvenHandler**
*Instead of using the callBack as shown above, you can also subscribe to the eventHandler*

    jQuery(selector).bind("picker:selected", function(e){
        alert(e.color);
    });
