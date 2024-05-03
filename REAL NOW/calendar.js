const calendarBody = document.getElementById('calendar-body');
const monthYearDisplay = document.getElementById('month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    // Display the current month and year
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];

    monthYearDisplay.textContent = `${monthNames[month].substring(0, 3)} ${year}`;

    // Get the first day of the month and the number of days in the month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    // Clear existing calendar content
    calendarBody.innerHTML = '';

    let dayCount = 1;
    let prevMonthDayCount = daysInPrevMonth - firstDay + 1;

    for (let row = 0; row < 6; row++) {
        const tr = document.createElement('tr');

        for (let col = 0; col < 7; col++) {
            const td = document.createElement('td');

            if (row === 0 && col < firstDay) {
                td.textContent = prevMonthDayCount++;
                td.classList.add('other-month');
            } else if (dayCount <= daysInMonth) {
                td.textContent = dayCount;

                const today = new Date();
                if (year === today.getFullYear() && month === today.getMonth() && dayCount === today.getDate()) {
                    td.classList.add('current-day');
                }

                dayCount++;
            } else {
                td.textContent = dayCount - daysInMonth;
                td.classList.add('other-month');
                dayCount++;
            }

            tr.appendChild(td);
        }

        calendarBody.appendChild(tr);
    }
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate); // Initial render
