$(function(){
    $(".tooltip-trigger").click(function () {
        var $this = $(this),
            $toolTip = $this.parent().find("div");

        if($toolTip.hasClass('show')) {
            $toolTip.fadeOut(100);
        } else {
            $toolTip.removeClass('hidden');
            if($toolTip.hasClass('north-west')) {
                $toolTip.addClass('north').removeClass('north-west');
            } else if($toolTip.hasClass('north')) {
                $toolTip.addClass('north-east').removeClass('north');
            } else if($toolTip.hasClass('north-east')) {
                $toolTip.addClass('east').removeClass('north-east');
            } else if($toolTip.hasClass('east')) {
                $toolTip.addClass('south-east').removeClass('east');
            } else if($toolTip.hasClass('south-east')) {
                $toolTip.addClass('south').removeClass('south-east');
            } else if($toolTip.hasClass('south')) {
                $toolTip.addClass('south-west').removeClass('south');
            } else if($toolTip.hasClass('south-west')) {
                $toolTip.addClass('west').removeClass('south-west');
            } else if($toolTip.hasClass('west')) {
                $toolTip.addClass('north-west').removeClass('west');
            }
            $toolTip.fadeIn(100);
        }
        $toolTip.toggleClass('show');
    });

}());

