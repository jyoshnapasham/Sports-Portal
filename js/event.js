// document.addEventListener("DOMContentLoaded", function() {
//   // Fetch events from the server when the page loads
//   fetch('/eventcalendar')
//     .then(response => response.json())
//     .then(events => {
//       events.forEach(event => {
//         const cardHtml = createCardHtml(event);
//         document.getElementById('events-list').innerHTML += cardHtml;
//       });
//     })
//     .catch(error => console.error('Error fetching events:', error));

//   function createCardHtml(event) {
//     return `
//       <div class="card">
//         <div class="card-details">
//           <p class="text-title">${event.eventName}</p>
//           <p class="text-body">Date: ${event.eventDate}</p>
//           <p class="text-body">Time: ${event.startTime} - ${event.endTime}</p>
//           <p class="text-body event-description" style="display: none;">Description: ${event.eventDescription}</p>
//         </div>
//         <button class="card-button" onclick="toggleDescription(this)">More info</button>
//       </div>
//     `;
//   }

//   function toggleDescription(button) {
//     const card = button.parentNode;
//     const description = card.querySelector('.event-description');
//     description.style.display = description.style.display === 'none' ? 'block' : 'none';
//   }
// });
