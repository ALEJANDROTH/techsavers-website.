// Search Functionality
document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const results = ['Device Repairs', 'Tech Consultations', 'Software Installation', 'Data Recovery'];
    const filteredResults = results.filter(service => service.toLowerCase().includes(query));
    const resultsList = document.getElementById('searchResults');

    resultsList.innerHTML = filteredResults.map(result => <li>${result}</li>).join('');
});

// Initialize Google Map
function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Example coordinates (New York City)
    const map = new google.maps.Map(document.getElementById('mapContainer'), {
        zoom: 12,
        center: location,
    });

    new google.maps.Marker({
        position: location,
        map: map,
    });
}
