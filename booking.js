document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const train = document.getElementById("train").value;
    const numTickets = document.getElementById("numTickets").value;

    const trainPrices = {
        "Express": 500,
        "Superfast": 800,
        "Rajdhani": 1200
    };

    const pricePerTicket = trainPrices[train];
    const totalCost = pricePerTicket * numTickets;

    const ticket = {
        name: name,
        train: train,
        numTickets: numTickets
    };

    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    tickets.push(ticket);
    localStorage.setItem("tickets", JSON.stringify(tickets));

    document.getElementById("summaryText").innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Train:</strong> ${train}<br>
        <strong>Number of Tickets:</strong> ${numTickets}<br>
        <strong>Total Cost:</strong> ₹${totalCost}
    `;
});
