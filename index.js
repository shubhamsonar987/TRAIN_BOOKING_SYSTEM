document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value;
    const train = document.getElementById("train").value;
    const numTickets = document.getElementById("numTickets").value;

    // Ticket prices
    const trainPrices = {
        "Express": 500,
        "Superfast": 800,
        "Rajdhani": 1200
    };

    const pricePerTicket = trainPrices[train];
    const totalCost = pricePerTicket * numTickets;

    // Show summary
    document.getElementById("summaryText").innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Train:</strong> ${train}<br>
        <strong>Number of Tickets:</strong> ${numTickets}<br>
        <strong>Total Cost:</strong> ₹${totalCost}
    `;
});
