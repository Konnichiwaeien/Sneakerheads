const placeholders = (fieldSelector, captSelector, captCssSelector) => {
  const fields = document.querySelectorAll(fieldSelector);
  const capts = document.querySelectorAll(captSelector);

  const focusFieldHandler = (field, capt) => {
    field.addEventListener('focus', () => capt.classList.add(captCssSelector));
  }

  const blurFieldHandler = (field, capt) => {
    field.addEventListener('blur', () => {
      if (!field.value) {
        capt.classList.remove(captCssSelector)
      }
    });
  }

  const createHandlers = (fields) => {
    fields.forEach((field, idx) => {
      focusFieldHandler(field, capts[idx]);
      blurFieldHandler(field, capts[idx]);
    })
  }

  createHandlers(fields);
};



export default placeholders;