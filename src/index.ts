import { menuInit_ } from "./utils/document/menuInit";
import { showAlert_ } from "./utils/document/showAlert";
import { showDialog_ } from "./utils/common/showDialog";
import { copyTabContent_ } from "./utils/document/copyTabContent";

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

// TODO: utilsに移動
const showInsertTemplateDialog_ = () => {
  showDialog_("dialog", "テンプレート選択");
};

const insertTemplate = (id: string) => {
  copyTabContent_(id);
};

const onOpen = () => {
  menuInit_([
    {
      label: "テンプレート挿入",
      name: "showInsertTemplateDialog_",
    },
  ]);
};
