import { Dialog as DialogHeadlessUI, Transition } from "@headlessui/react";
import { Fragment } from "react";

import { DialogWrapperProps } from "./type";

export const DialogWrapper = ({
  show,
  onClose,
  children,
}: DialogWrapperProps) => {
  return (
    <Transition appear show={show} as={Fragment}>
      <DialogHeadlessUI as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogHeadlessUI.Panel className=" w-[360px] px-4 transform overflow-hidden transition-all">
                {children}
              </DialogHeadlessUI.Panel>
            </Transition.Child>
          </div>
        </div>
      </DialogHeadlessUI>
    </Transition>
  );
};
