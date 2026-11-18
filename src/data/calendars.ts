/**
 * Calendars shown on the website.
 *
 * To add an organization:
 *   1. The organization creates a Google Calendar and makes it public
 *      (Calendar settings > Access permissions > "Make available to public").
 *   2. Copy its Calendar ID (Calendar settings > Integrate calendar).
 *   3. Add one line below. Leave out entries with an empty id; they are ignored.
 *
 * After that, events are added in Google Calendar only. No code changes needed.
 */
export interface CalendarSource {
  name: string;
  id: string;
  color: string; // hex color for this organization's events and filter button
}

export const calendars: CalendarSource[] = [
  {
    name: 'Livable Maunalua Hui',
    id: 'c_5ee9856eb1b1ab6e2cd2ccd98adeae20034afad942a00ed52cbeca0b31a89d2e@group.calendar.google.com',
    color: '#0E6B73',
  },
  // { name: 'Partner Organization', id: 'PASTE_CALENDAR_ID_HERE', color: '#7A4FA3' },
];

export const timeZone = 'Pacific/Honolulu';
