const data = {
    "Wilhelma Zoologisch‑Botanischer Garten": [
        { name: "Hundehotel Hundepension Stuttgart Kornwestheim", url: "https://www.koenigreich.info/hundehotel/" },
        { name: "Tina Erath Hundepension", url: "https://www.tinaerath.de/" },
        { name: "Dog Holiday Pension", url: "https://www.dogonholiday.de/" }
    ],
    "Marienplatz": [
        { name: "Hundepension Satke", url: "https://www.hundehotel-satke.de/" },
        { name: "Hundepension am Birkensee", url: "https://www.hundepension-birkensee.de/" },
        { name: "We Are Dogs Hundepension", url: "https://wearedogs.de/" }
    ],
    "Brandenburger Tor": [
        { name: "belloberlini Hundebetreuung", url: "https://www.belloberlini.com/" },
        { name: "4BeinerUni Hundepension", url: "https://4beineruni.de/" },
        { name: "Tierhotel MamaMo", url: "https://tierhotelmamamo.de/" }
    ],
    // hier alle weiteren Sehenswürdigkeiten hinzufügen...
};

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    resultsDiv.innerHTML = "";

    for (let sight in data) {
        if (sight.toLowerCase().includes(query)) {
            const pensions = data[sight];
            const sightDiv = document.createElement("div");
            sightDiv.innerHTML = `<h2>${sight}</h2>`;
            
            pensions.forEach(p => {
                const pDiv = document.createElement("div");
                pDiv.className = "pension";
                pDiv.innerHTML = `<a href="${p.url}" target="_blank">${p.name}</a>`;
                sightDiv.appendChild(pDiv);
            });

            resultsDiv.appendChild(sightDiv);
        }
    }
});
