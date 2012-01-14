/**
 * Created by JetBrains WebStorm.
 * User: Robert
 * Date: 14/01/12
 * Time: 14:59
 * To change this template use File | Settings | File Templates.
 */
jQuery.fn.basicColorPicker = function (options, callBack) {
    options  = options  || { };
    callBack = callBack || function (e) { };

    var that = this;
    var guid = jQuery.guid;
    var opt  = {
        colors  : ["#000000", "#575757", "#A0A0A0", "#FFFFFF", "#2A4BD7", "#1D6914", "#814A19", "#8126C0", "#9DAFFF", "#81C57A", "#E9DEBB", "#AD2323", "#29D0D0", "#FFEE33", "#FF9233", "#FFCDF3"],
        size    : "30px",
        hide    : true
    };

    jQuery.extend(opt, options);

    that.append("<div class='picker-" + guid + "'></div>");
    jQuery(opt.colors).each(function (index, value) {
        var item = jQuery("<div></div>");

        item.css({
            "background-color": value,
            "height"          : opt.size,
            "width"           : opt.size,

            "cursor" : "pointer",
            "float"  : "left"
        });

        item.click(function (e) {
            if (opt.hide) {
                that.hide(0);
            }

            var selected = jQuery(this).css("background-color");

            callBack(selected);
            jQuery(that).triggerHandler({ type: "picker:selected", color: selected });
        });

        that.find(".picker-" + guid).append(item);
    });

    return that;
};