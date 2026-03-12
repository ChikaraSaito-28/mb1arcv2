import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { MillSheetList } from "./pages/MillSheetList";
import { MB1EndorsementList } from "./pages/MB1EndorsementList";
import { MB1ShipmentList } from "./pages/MB1ShipmentList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: MillSheetList },
      { path: "mb1-endorsement", Component: MB1EndorsementList },
      { path: "mb1-shipment", Component: MB1ShipmentList },
    ],
  },
]);