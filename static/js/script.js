function selectRegion() {
    const regions = document.querySelectorAll('#regionSelect');

    regions.forEach(region => {
        region.addEventListener('click', () => {
            regions.forEach(regionElement => {
                regionElement.classList.remove('active')
            });

            region.classList.add('active');
            localStorage.setItem('region', region.innerText);
        });
    });
}

window.addEventListener('DOMContentLoaded', event => {
    selectRegion();

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});