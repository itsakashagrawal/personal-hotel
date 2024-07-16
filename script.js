document.addEventListener('DOMContentLoaded', function() {
    // Sample data (simulating rooms and their statuses)
    const rooms = [
      { id: 101, status: 'Clean' },
      { id: 102, status: 'Dirty' },
      { id: 103, status: 'Clean' },
      { id: 104, status: 'Dirty' },
      { id: 105, status: 'Clean' }
    ];
  
    const roomList = document.getElementById('roomList');
  
    // Function to display rooms
    function displayRooms() {
      roomList.innerHTML = ''; // Clear previous content
  
      rooms.forEach(room => {
        const roomDiv = document.createElement('div');
        roomDiv.classList.add('room');
  
        const roomHeader = document.createElement('h2');
        roomHeader.textContent = `Room ${room.id} - ${room.status}`;
  
        const cleanButton = document.createElement('button');
        cleanButton.textContent = 'Mark as Clean';
        cleanButton.addEventListener('click', () => {
          room.status = 'Clean';
          displayRooms();
        });
  
        roomDiv.appendChild(roomHeader);
        roomDiv.appendChild(cleanButton);
        roomList.appendChild(roomDiv);
      });
    }
  
    displayRooms();
  });
  