import { message } from "antd";
//it copies text when called!
//onCopy gets called after copying is done,
export function copyToClipboard(text, onCopyText) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      if (onCopyText) message.info(onCopyText);
    })
    .catch((err) => {
      message.error(err);
    });
}
