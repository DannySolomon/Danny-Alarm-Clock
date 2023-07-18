# Danny-Alarm-Clock

This is aalarm clock application implemented using vanilla JavaScript. It allows users to set alarms and receive alerts when the alarm time matches the current time.

## Features

- Display the current time with seconds, minutes, and hours that update in real-time.
- Set an alarm by specifying the hour, minute, second, and AM/PM.
- Add the set alarm to the alarms list below.
- Delete alarms from the list.
- Alert the user when an alarm goes off.

## Technologies Used

- HTML
- CSS
- Vanilla JavaScript

## Usage

1. Clone the repository or download the source code.
2. Open the `index.html` file in a web browser.

## Instructions

1. The clock section displays the current time.
2. In the set alarm section:
   - Enter the hour in the range of 1-12.
   - Enter the minute in the range of 0-59.
   - Enter the second in the range of 0-59.
   - Select AM or PM from the dropdown menu.
   - Click the "Set Alarm" button to set the alarm.
3. The alarms list section displays all the alarms set by the user.
   - Each alarm entry shows the set alarm time and a "Delete" button.
   - Click the "Delete" button to remove an alarm from the list.
   - Deleting an alarm will not trigger an alert.
4. When an alarm time matches the current time, an alert will be shown in the browser.
