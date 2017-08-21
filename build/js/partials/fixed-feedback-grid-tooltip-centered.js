$(document).ready(function () {
    var gridTooltipRow = $('.fixed__grid-tooltip__row');
    var $this = $(this);

    if (gridTooltipRow.hasClass('fixed__grid-tooltip-centered')) {

        var gridTooltipCentered = $('.fixed__grid-tooltip-centered'),


        tableShapesCount = gridTooltipCentered.next('.fixed__grid-table').find('.fixed__grid-content__row:first-child').find('.fixed__grid-shape__col').length,

        tableShapesColWidth = gridTooltipCentered.next('.fixed__grid-table').find('.fixed__grid-content__row').find('.fixed__grid-shape__col').outerWidth(),


        centerColWidth = tableShapesColWidth * tableShapesCount;
        $this.find('.fixed__grid-table__last-col').width(tableShapesColWidth);
        $this.find('.fixed__grid-table__middle-col').width(centerColWidth);
    }
});