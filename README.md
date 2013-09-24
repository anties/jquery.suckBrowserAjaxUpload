jquery.suckBrowserAjaxUpload
============================

suckBrowserAjaxUpload: a very simple (fake) ajax upload plugin by using iframe

usage: $('YOUR_FORM_SELECTOR').suckBrowserAjaxUpload();

settings:
    autoUpload - submit when file input changes or not
    fileInput - you know
    beforeSend - put some actions you'd like to do before submit
    complete - put some actions you'd like to do after request has been completed, the first parameter is the returned content from your server, it will be parse to JSON format automatically or remain html when $.parseJSON failed.

