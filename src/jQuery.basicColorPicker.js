/**************************
 * Author : Robert Hoffmann
 * License: MIT
 * Date   : 14/01/12
 * Version: 1.0.1
 **************************
 * Sample Usages
 *
 * jQuery(selector).basicColorPicker();
 * jQuery(selector).basicColorPicker({ size: "20px" });
 * jQuery(selector).basicColorPicker({}, function(color) {
 *      alert(color);
 * });
 *
 **************************
 * Subscribe to EvenHandler
 *
 * Instead of using the callBack as shown above,
 * you can also subscribe to the eventHandler
 *
 * jQuery(selector).bind("picker:selected", function(e){
 *     alert(e.color);
 * });
 *
 * **************************
 */
(function($, undefined){
    $.fn.basicColorPicker = function (options, callBack) {
        options  = options  || { };
        callBack = callBack || function (c) { };

        var that = this;
        var opt  = {
            colors  : ["#000000", "#575757", "#A0A0A0", "#FFFFFF", "#2A4BD7", "#1D6914", "#814A19", "#8126C0", "#9DAFFF", "#81C57A", "#E9DEBB", "#AD2323", "#29D0D0", "#FFEE33", "#FF9233", "#FFCDF3"],
            size    : "30px",
            class   : "item"
        };

        $.extend(opt, options);

        $(opt.colors).each(function (index, value) {
            var item = $("<div class='" + opt.class + "'></div>");

            item.css({
                "background-color": value,
                "height"          : opt.size,
                "width"           : opt.size,

                "cursor" : "pointer",
                "float"  : "left"
            });

            item.click(function (e) {
                var selected = $(this).css("background-color");

                callBack(selected);
                $(that).triggerHandler({ type: "picker:selected", color: selected });
            });

            that.append(item);
        });

        return that;
    };
})(jQuery);