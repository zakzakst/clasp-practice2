const helloDocument = () => {
  DocumentApp.getActiveDocument().getBody().appendParagraph("こんにちは GAS!");
};
