function selectRegion() {
    const regions = document.querySelectorAll('#regionSelect');

    regions.forEach(region => {
        region.addEventListener('click', () => {
            regions.forEach(regionElement => {
                regionElement.classList.remove('active')
            });
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'region': region.innerText.replace(/\s/g, '')
                })
            }).then(
                region.classList.add('active')
            );
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