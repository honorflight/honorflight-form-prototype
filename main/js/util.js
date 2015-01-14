util = {
    setBreadcrumb: function(selectedLinkId) {
        $('.breadcrumb > a').removeClass('selected-breadcrumb');
        $(selectedLinkId).addClass('selected-breadcrumb');
        console.log(selectedLinkId);
    }
};
