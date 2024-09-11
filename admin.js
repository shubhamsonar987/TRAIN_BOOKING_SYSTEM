document.addEventListener("DOMContentLoaded", function() {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const ticketList = document.getElementById("ticketList");

    if (tickets.length === 0) {
        ticketList.innerHTML = "<p>No tickets booked yet.</p>";
    } else {
        tickets.forEach(ticket => {
            const ticketItem = document.createElement("p");
            ticketItem.textContent = `Name: ${ticket.name}, Train: ${ticket.train}, Tickets: ${ticket.numTickets}`;
            ticketList.appendChild(ticketItem);
        });
    }

    document.getElementById("logoutBtn").addEventListener("click", function() {
        window.location.href = "login.html";
    });
});
