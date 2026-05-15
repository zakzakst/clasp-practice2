import { menuInit_ } from "./utils/document/menuInit";
import { showAlert_ } from "./utils/document/showAlert";
import { showDialog_ } from "./utils/common/showDialog";
import { copyTabContent_ } from "./utils/document/copyTabContent";
import { getDateEventItems_ } from "./utils/calendar/getDateEvents";

type TabItem = {
  id: string;
  title: string;
};

const getTemplateTabItems = (): TabItem[] | undefined => {
  const tabs = DocumentApp.getActiveDocument().getTabs();
  const templateTab = tabs.find((tab) => tab.getTitle() === "テンプレート");

  if (!templateTab) {
    showAlert_("「テンプレート」タブが見つかりませんでした");
    return;
  }

  const childTabItems: TabItem[] = templateTab
    .getChildTabs()
    .map((childTab) => {
      return {
        id: childTab.getId(),
        title: childTab.getTitle(),
      };
    });

  return childTabItems;
};

const showInsertTemplateDialog_ = () => {
  showDialog_("dialog", "テンプレート選択");
};

const insertTemplate = (id: string) => {
  copyTabContent_(id);
};

// TODO: IDからカレンダー情報を取得する
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

const onOpen = () => {
  menuInit_([
    {
      label: "テンプレート挿入",
      name: "showInsertTemplateDialog_",
    },
    {
      label: "カレンダー情報取得",
      name: "showSelectDateDialog_",
    },
  ]);
};
