import { Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";

import { SnackbarWrapperProps } from "./type";

export const SnackbarWrapper = ({
  show,
  onClose,
  children,
}: SnackbarWrapperProps) => {
  useEffect(() => {
    if (show) {
      setTimeout(onClose, 1500);
    }
  }, [show]);

  return (
    <Transition appear show={show} as={Fragment}>
      <div className="flex items-center justify-center p-3 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {children}
        </Transition.Child>
      </div>
    </Transition>
  );
};
