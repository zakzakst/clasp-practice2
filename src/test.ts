const test = () => {
  // const calendar = CalendarApp.getCalendarById('e1433104@gmail.com');
  const calendar = CalendarApp.getDefaultCalendar();

  // 今日
  // const today = new Date();
  const today = new Date("2026/05/16");

  // 今日の開始
  const start = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    0,
    0,
    0,
  );

  // 今日の終了
  const end = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
    23,
    59,
    59,
  );

  // イベント取得
  const events = calendar.getEvents(start, end);

  // const event = calendar.getEventById('MzlpZzluajk5b284OGwzZGs1Z3VhYzhka20gZTE0MzMxMDRAbQ');
  Logger.log(events[0].getId());
  Logger.log(events[0].getTitle());
};

function replaceInTab() {
  const document = DocumentApp.getActiveDocument();

  const tab = document.getTab("タブID").asDocumentTab();

  const body = tab.getBody();

  body.replaceText("{{date}}", "2026/05/15");
}
