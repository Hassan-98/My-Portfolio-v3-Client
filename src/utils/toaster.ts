import { toast } from "sonner";

class Toaster {
  constructor() { }

  success(message: ToastMessage) {
    if (!message) return;
    typeof message === 'string' ? toast.success(message) : toast.success(message.title, { description: message.description });
  }

  error(message: ToastMessage) {
    if (!message) return;
    typeof message === 'string' ? toast.error(message) : toast.error(message.title, { description: message.description });
  }

  info(message: ToastMessage) {
    if (!message) return;
    typeof message === 'string' ? toast.info(message) : toast.info(message.title, { description: message.description });
  }

  startLoading(message: ToastMessage, timer?: number, callback?: () => void) {
    if (!message) return () => { };
    const loadingId = (typeof message === 'string' ? toast.loading(message) : toast.loading(message.title, { description: message.description }));

    if (timer && typeof timer === 'number') {
      setTimeout(() => {
        toast.dismiss(loadingId);
        if (callback) callback();
      }, timer);
    }

    return () => toast.dismiss(loadingId);
  }

  stopLoading(id: string | number) {
    if (!id) return;
    toast.dismiss(id);
  }
}

export const toaster = new Toaster();

type ToastMessage = string | {
  title: string;
  description: string;
}