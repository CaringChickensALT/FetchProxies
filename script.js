document.getElementById('fetchProxies').addEventListener('click', function() {
    fetchProxies();
});

async function fetchProxies() {
    try {
        // Example proxy API (you can replace it with a real one)
        const response = await fetch('https://www.proxy-list.download/api/v1/get?type=socks5');
        
        if (!response.ok) {
            throw new Error('Failed to fetch proxies');
        }
        
        const proxies = await response.json();
        displayProxies(proxies);
    } catch (error) {
        console.error('Error fetching proxies:', error);
        alert('Could not fetch proxies. Please try again later.');
    }
}

function displayProxies(proxies) {
    const proxyListContainer = document.getElementById('proxyList');
    proxyListContainer.innerHTML = ''; // Clear any previous data

    if (proxies.length === 0) {
        proxyListContainer.innerHTML = '<p>No proxies available.</p>';
    } else {
        proxies.forEach(proxy => {
            const proxyItem = document.createElement('div');
            proxyItem.classList.add('proxy-item');
            proxyItem.innerHTML = `
                <span>${proxy.ip}:${proxy.port}</span>
                <span>${proxy.country}</span>
            `;
            proxyListContainer.appendChild(proxyItem);
        });
    }
}
