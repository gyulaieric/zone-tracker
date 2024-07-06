function selectRegion() {
    const regions = document.querySelectorAll('#regionSelect');

    if (sessionStorage.getItem('region') == null) {
        alert('Please select a region');
    }

    let regionList = []

    regions.forEach(region => {
        regionText = region.innerText.replace(/\s/g, '');

        regionList.push(regionText);
        if (regionText == sessionStorage.getItem('region')) {
            region.classList.add('active')
        }
        region.addEventListener('click', () => {
            regions.forEach(regionElement => {
                regionElement.classList.remove('active')
            });

            region.classList.add('active');
            sessionStorage.setItem('region', regionText);
        });
    });

    document.getElementById('characters').setAttribute('href', `/${sessionStorage.getItem('region')}/characters`);
}

window.addEventListener('DOMContentLoaded', event => {
    selectRegion();

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