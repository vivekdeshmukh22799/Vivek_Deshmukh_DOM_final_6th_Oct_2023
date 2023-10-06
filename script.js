const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

// Function to fetch data from the API using .then method
function fetchDataUsingThen() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error:', error));
}

// Function to display data in the table
function displayData(data) {
    const tableBody = document.querySelector('tbody');

    data.forEach(coin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${coin.image}" alt="${coin.name}" width="20">&nbsp; ${coin.name}</td>
            <td>${coin.id}</td>
            <td>${coin.symbol}</td>
            <td>$${coin.current_price.toFixed(2)}</td>
            <td>$${coin.total_volume.toFixed(2)}</td>
            <td>$${coin.high_24h.toFixed(2)}</td>
            <td>$${coin.price_change_24h.toFixed(2)}</td>
            `;

        tableBody.appendChild(row);
    });
}

// Fetch data using .then method when the page loads
fetchDataUsingThen();
