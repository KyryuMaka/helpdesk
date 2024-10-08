import React from "react";
import OfficeSetup from "../soft/OfficeSetup.exe";

function Footer() {
  return (
    <>
      <footer className="p-4 bg-gray-200 sm:p-6 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 sm:min-w-screen">
            <div className="sm:justify-self-center">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Liên Kết
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://w.hunghau.org/" target="_blank" rel="noreferrer" className="hover:underline">
                    Base Wework
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://e.hunghau.org/" target="_blank" rel="noreferrer" className="hover:underline">
                    VOfice
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://hunghaugroup-my.sharepoint.com/my" target="_blank" rel="noreferrer" className="hover:underline">
                    OneDrive
                  </a>
                </li>
                <li className="mb-4">
                  <a href="http://datacenter.hunghau.vn/" target="_blank" rel="noreferrer" className="hover:underline">
                    Sharepoint
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:justify-self-center">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Tài Nguyên
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://go.microsoft.com/fwlink/?linkid=2196106&clcid=0x42a&culture=vi-vn&country=vn"
                    target="_blank" rel="noreferrer"
                    className="hover:underline "
                  >
                    Tải Microsoft Teams
                  </a>
                </li>
                <li className="mb-4">
                  <a href={OfficeSetup} className="hover:underline" download="OfficeSetup.exe">
                    Tải Office 365
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    Tải Phần mềm khác
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:justify-self-center">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Vấn đề thường gặp
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/forgot-password" className="hover:underline">
                    Quên mật khẩu
                  </a>
                </li>
                <li className="mb-4">
                  <a href=" " className="hover:underline">
                    Kết nối Wifi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between text-center container mx-auto">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://hunghau.vn/" className="hover:underline">
              HungHau Holdings
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 justify-center items-center sm:mt-0">
            <a
              href="https://www.facebook.com/hunghau.vn"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.linkedin.com/company/hunghau/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class=""
                fill="currentColor"
                viewBox="0 0 16 16"
                width="16" height="16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
