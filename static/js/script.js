function selectRegion() {
    const regions = document.querySelectorAll('#regionSelect');

    if (sessionStorage.getItem('region') == null) {
        alert('Please select a region');
    }

    regions.forEach(region => {
        if (region.innerText.replace(/\s/g, '') == sessionStorage.getItem('region')) {
            region.classList.add('active')
        }
        region.addEventListener('click', () => {
            regions.forEach(regionElement => {
                regionElement.classList.remove('active')
            });

            region.classList.add('active');
            sessionStorage.setItem('region', region.innerText.replace(/\s/g, ''));
        });
    });
}

window.addEventListener('DOMContentLoaded', event => {
    selectRegion();

    document.getElementById('characters').setAttribute('href', `/${sessionStorage.getItem('region')}/characters`);

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (sessionStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            sessionStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
});