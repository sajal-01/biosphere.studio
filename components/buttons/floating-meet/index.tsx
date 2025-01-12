"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function FloatingMeetButton(): JSX.Element {
  useEffect(() => {
    const initializeCalApi = async () => {
      try {
        const cal = await getCalApi({ namespace: "15min" });

        // Configure the floating button
        cal("floatingButton", {
          calLink: "biosphere.studio/15min",
          config: { layout: "month_view", theme: "dark" },
          buttonColor: "#d81a1a",
          buttonTextColor: "#ffffff",
          hideButtonIcon: false,
          buttonText: "Book my Call",
        });

        // Additional UI configurations
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (error) {
        console.error("Error initializing Cal API:", error);
      }
    };

    initializeCalApi();
  }, []);

  return <></>;
}
