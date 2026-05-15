import { menuInit_ } from "./utils/document/menuInit";

const helloDocument = () => {
  DocumentApp.getActiveDocument().getBody().appendParagraph("こんにちは GAS!");
};

const createStyledDocument = () => {
  const body = DocumentApp.getActiveDocument().getBody();

  // タイトル
  const title = body.appendParagraph("GASハンズオン");

  title.setHeading(DocumentApp.ParagraphHeading.TITLE);

  // 見出し
  const heading = body.appendParagraph("■ 今日の学習内容");

  heading.setHeading(DocumentApp.ParagraphHeading.HEADING1);

  // 本文
  body.appendParagraph("GoogleドキュメントをGASで操作する");

  // 強調テキスト
  const important = body.appendParagraph("重要ポイント");

  // NOTE: typescriptエラー出るが挙動には問題ない。一旦そのまま（@types/google-apps-scriptの関係？）
  important.setBold(true).setForegroundColor("#ff0000");
};

const updateTodayTab = () => {
  const document = DocumentApp.getActiveDocument();

  // タブIDを入力
  // const tabId = "ここにタブID";

  // タブ取得
  // const tab = document.getTab(tabId);
  const tab = document.getActiveTab();

  // DocumentTabへ変換
  const documentTab = tab.asDocumentTab();

  // 今日の日付
  const today = new Date();

  // タブ名用
  const tabTitle = Utilities.formatDate(
    today,
    Session.getScriptTimeZone(),
    "yyyyMMdd",
  );

  // 表示タイトル用
  const displayTitle = Utilities.formatDate(
    today,
    Session.getScriptTimeZone(),
    "yyyy/MM/dd",
  );

  // タブ名変更
  // tab.setTitle(tabTitle);

  // 本文取得
  const body = documentTab.getBody();

  // タイトル追加
  const title = body.appendParagraph(displayTitle);

  title.setHeading(DocumentApp.ParagraphHeading.TITLE);
};

const onOpen = () => {
  menuInit_([
    {
      label: "テンプレート挿入",
      name: "updateTodayTab",
    },
  ]);
};

const test = () => {
  const tabs = DocumentApp.getActiveDocument().getTabs();
  tabs.forEach((tab) => {
    Logger.log(tab.getId());
    Logger.log(tab.getTitle());
    Logger.log(tab.getChildTabs());
  });
};
