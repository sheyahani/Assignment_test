function bold() {
    document.execCommand('bold', true, null)
}

function underline() {
    document.execCommand('underline', true, null)
}

function italic() {
    document.execCommand('italic', true, null)
}

function textColor() {
    var fontColor = prompt('Enter color code (e.g., red):');
    if (fontColor) {
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('foreColor', false, fontColor);
    }
  }