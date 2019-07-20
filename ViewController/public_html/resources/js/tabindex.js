function event(previd, nextid) {
  return function valueChange(evt) {
      keyCode = evt.getKeyCode();
      keyModifiers = evt.getKeyModifiers();
      var element = evt.getSource();
      if (keyCode == AdfKeyStroke.TAB_KEY) {
          if (keyModifiers == AdfKeyStroke.SHIFT_MASK) { // For SHIFT+TAB action
              if (previd) {
                  evt.cancel();
                  var focus1 = element.findComponent(previd);
                  focus1.focus();
              } // If previd is empty, then follow the default traverse path
          } else { // For TAB action
              if (nextid) {
                  evt.cancel();
                  var focus2 = element.findComponent(nextid);
                  focus2.focus();
              } // If nextid is empty, then follow the default traverse path
          }
          return false;
      }
  }
}
