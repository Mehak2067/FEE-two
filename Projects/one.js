document.getElementById("eventForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const customerName = document.getElementById("customerName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const venue = document.getElementById("venue").value;
  const date = document.getElementById("date").value;
  const theme = document.getElementById("theme").value;
  const guests = document.getElementById("guests").value;

  const summaryText = `
      <strong>Customer Information:</strong> <br>
      Name: ${customerName} <br>
      Email: ${email} <br>
      Phone: ${phone} <br><br>

      <strong>Event Details:</strong> <br>
      Venue: ${venue} <br>
      Date: ${new Date(date).toDateString()} <br>
      Theme: ${theme} <br>
      Estimated Guests: ${guests}
  `;

  document.getElementById("summaryText").innerHTML = summaryText;
  document.getElementById("eventSummary").style.display = "block";
});
