(function ($) {
    $(document).ready(function () {
        photopile.scatter($('#jsn-themepile-wrapper-' + 'J0KEf'), {
            thumbOverlap: 50,
            thumbRotation: 45,
            thumbBorderWidth: 2,
            thumbBorderColor: '#ffffff',
            thumbBorderHover: '#ffffff',
            thumbShadow: true,
            thumbShadowColor: '#ffffff',
            thumbWidth: 130,
            thumbHeight: 130,
            fadeDuration: 200,
            pickupDuration: 500,
            clickAction: 'show_original_image',
            openLinkIn: 'current_browser',
            classContainer: 'J0KEf',
            rootURL: '',
        });  // ### initialize the photopile ###
    });
})(jsnThemePilejQuery);