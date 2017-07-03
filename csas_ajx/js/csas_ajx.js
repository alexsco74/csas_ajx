(function ($) {
    function csasAjxIni(prn) {
        if(typeof prn == 'undefined'){
            prn = $(document);
        }
        $('a[data-ajx-sel]').once('data-ajx-sel', function () {
            var tE = $(this);
            tE.on('click', function () {
                var tH = tE.attr('href');
                var tS = tE.attr('data-ajx-sel');
                $(tS).addClass('csas-ajx-lad-prs').load(tH + ' ' + tS + ' > *', function () {
                    $(document).trigger('documentChange');
                    $(tS).removeClass('csas-ajx-lad-prs');
                });
                return false;
            });
        });
    }

    Drupal.behaviors.csasAjx = {
        attach: function (context, settings) {
            csasAjxIni(context);
            $(document).on('documentChange', function () {
                csasAjxIni();
            });
        }
    };

})(jQuery);