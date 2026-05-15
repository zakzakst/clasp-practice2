import { menuInit_ } from "./utils/document/menuInit";
import { showAlert_ } from "./utils/document/showAlert";

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

// const insertTemplate_ = (id: string) => {
//   showAlert_(JSON.stringify(id || "ID指定なし"));
// };

const showInsertTemplateDialog_ = () => {
  const html = HtmlService.createHtmlOutputFromFile("dialog")
    .setWidth(400)
    .setHeight(300);

  DocumentApp.getUi().showModalDialog(html, "テンプレート選択");
};

const insertTemplate = (id: string) => {
  showAlert_(JSON.stringify(id || "ID指定なし"));
};

const onOpen = () => {
  // メニューの関数に直接引数を渡すことはできない
  // const templateItems = getTemplateTabItems_();

  // if (!templateItems) {
  //   return;
  // }

  // const menuItems: MenuItem[] = templateItems.map((item) => {
  //   return {
  //     label: `${item.title}挿入`,
  //     name: `insertTemplate_(${item.id})`,
  //   };
  // });

  // menuInit_(menuItems);

  menuInit_([
    {
      label: "テンプレート挿入",
      name: "showInsertTemplateDialog_",
    },
  ]);
};
