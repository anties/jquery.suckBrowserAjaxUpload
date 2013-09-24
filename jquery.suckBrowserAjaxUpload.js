;(function($){
    $.fn.suckBrowserAjaxUpload = function(settings){
        var $form = $(this);
        var _defaultSettings = {
            autoUpload:  true,
            fileInput: $form.find('input[type=file]'),
            beforeSend: function(){},
            complete: function(){}
        };
        var _settings = $.extend(_defaultSettings, settings);

        var listen = function($iframe){
            var inter = setInterval(function(){
                var iframe_text = $($iframe[0].contentWindow.document.body).text();
                if (iframe_text.length > 0) {
                    window.clearInterval(inter);
                    try {
                        var data = $.parseJSON(iframe_text);
                    } catch(e) {
                        var data = iframe_text;
                    }
                    $iframe.remove();
                    _settings.complete(data);
                }
            }, 100);
        };

        $form.on('submit', function(e){
            var $iframe = $(document.createElement("iframe"));
            $iframe.css({"width": "0px", "height": "0px", "border": "0"});
            $iframe.prop("id", 'upload_frame').prop("name", 'upload_frame');
            $('body').append($iframe);
            $form.prop("target", 'upload_frame');
            _settings.beforeSend();
            listen($iframe);
        });

        if (_settings.autoUpload) {
            _settings.fileInput.on('change', function(e){
                $form.submit();
            });
        }
    };
})(jQuery);
