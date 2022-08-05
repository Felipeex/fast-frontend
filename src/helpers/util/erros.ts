import { toast } from "react-toastify";

export function internalError() {
  toast.error("Opss, ocorreu um erro Internamente em nosso servidor.");
}
