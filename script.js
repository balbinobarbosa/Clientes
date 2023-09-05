document.addEventListener('DOMContentLoaded', function() {
    const detailsElements = document.querySelectorAll('details');
    
    detailsElements.forEach(function(details) {
        details.addEventListener('click', function() {
            // Fecha todos os elementos details, exceto o atual
            detailsElements.forEach(function(item) {
                if (item !== details) {
                    item.removeAttribute('open');
                }
            });
        });
    });
});
