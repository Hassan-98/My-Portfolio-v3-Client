import { useState, useEffect } from 'react';

export default function useLoading(selector: string) {
  let [button, setButton] = useState<HTMLButtonElement | null>(null);
  let [buttonContent, setButtonContent] = useState<string>('');

  useEffect(() => {
    let btn = document.querySelector<HTMLButtonElement>(selector)!;
    if (btn) {
      setButton(btn);
      setButtonContent(btn.innerHTML);
    }
  }, [selector]);


  function startLoading() {
    if (button) {
      button.innerHTML = `<i class="fa-duotone fa-spinner-third loading-spinner"></i>`;
      button.setAttribute('disabled', 'disabled');
    }
  }

  function endLoading() {
    if (button) {
      button.innerHTML = buttonContent;
      button.removeAttribute('disabled');
    }
  }

  return {
    startLoading,
    endLoading
  }
}