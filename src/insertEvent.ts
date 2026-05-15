import { showAlert_ } from "./utils/document/showAlert";
import { showDialog_ } from "./utils/common/showDialog";
import { getDateEventItems_ } from "./utils/calendar/getDateEvents";

const showSelectDateDialog_ = () => {
  showDialog_("selectDate", "日付選択");
};

const getDateEventItems = (dateStr: string) => {
  const events = getDateEventItems_(dateStr);
  return events;
};

const insertEvent = (eventId: string) => {
  const calendar = CalendarApp.getDefaultCalendar();
  const event = calendar.getEventById(eventId);
  showAlert_(event.getTitle());
};
