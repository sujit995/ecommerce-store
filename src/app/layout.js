"use client";
import { Provider } from "react-redux";
import "./globals.css";
import store from "../../store";
import Authprovider from "./components/authprovider/Authprovider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Authprovider>
        <Provider store={store}>
          <body>{children}</body>
        </Provider>
      </Authprovider>
    </html>
  );
}
