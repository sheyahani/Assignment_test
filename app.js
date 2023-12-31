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

  function leftAlign() {
    document.execCommand('justifyLeft', false, null);
  }

  function ceneter() {
    document.execCommand('justifyCenter', false, null);
  }

  function rightAlign() {
    document.execCommand('justifyRight', false, null);
  }

  function justify() {
    document.execCommand('justifyFull', false, null);
  }

  function undo() {
    document.execCommand('undo', false, null);
  }

  function redo() {
    document.execCommand('redo', false, null);
  }