document.addEventListener("DOMContentLoaded", function() {
  const tableContainer = document.querySelector('.main-content .table');

  function fetchData() {
    fetch('api/emergancy.json')
      .then(response => response.json())
      .then(data => {
        if (!data || data.length === 0) return;

        tableContainer.innerHTML = ''; // Clear existing table content

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        // Table header
        const headerRow = document.createElement('tr');
        const headers = ['', ...Object.keys(data[0]), '', ''];
        headers.forEach(headerText => {
          const th = document.createElement('th');
          th.textContent = headerText;
          headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Table body
        data.forEach((item, index) => {
          const row = document.createElement('tr');
          if (index < 2) {
              row.classList.add('highlight');
          }

          // 1. Warning icon
          const warningCell = document.createElement('td');
          if (item.Name === 'house' || item.Name === 'home' || item.Name === 'officeB') {
              const warningIcon = document.createElement('img');
              warningIcon.src = 'images/ic_connceted_error_og.svg';
              warningIcon.alt = 'Warning';
              warningCell.appendChild(warningIcon);
          }
          row.appendChild(warningCell);

          // 2. Data cells
          Object.entries(item).forEach(([key, value]) => {
              const cell = document.createElement('td');
              if (key === 'Status') {
                  const statusDiv = document.createElement('div');
                  statusDiv.classList.add('status-cell');
                  const statusDot = document.createElement('span');
                  statusDot.classList.add('status-dot', value.toLowerCase());
                  statusDiv.appendChild(statusDot);
                  statusDiv.append(value);
                  cell.appendChild(statusDiv);
              } else {
                  cell.textContent = value;
              }
              row.appendChild(cell);
          });

          // 3. Action icons
          const actionCell1 = document.createElement('td');
          actionCell1.classList.add('action-icon');
          actionCell1.innerHTML = '&#x1F5D1;'; // Trash can
          row.appendChild(actionCell1);

          const actionCell2 = document.createElement('td');
          actionCell2.classList.add('action-icon');
          actionCell2.innerHTML = '&#x1F4CB;'; // Clipboard
          row.appendChild(actionCell2);

          tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        tableContainer.appendChild(table);
        console.log('Table updated successfully');
      })
      .catch(error => console.error('Error fetching data:', error));
  }

  fetchData();
  setInterval(fetchData, 3000);
});