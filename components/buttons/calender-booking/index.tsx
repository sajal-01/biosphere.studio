"use client";
import { getCalApi } from "@calcom/embed-react";
import { useEffect, ReactNode } from "react";

interface CalButtonProps {
  namespace: string;
  link: string;
  layout_view: string;
  children: ReactNode;
}

export default function CalenderBookingButton({
  namespace,
  link,
  layout_view = "month_view",
  children,
}: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [namespace, layout_view]);

  return (
    <div
      data-cal-namespace={namespace}
      data-cal-link={link}
      data-cal-config={`{"layout":"${layout_view}"}`}
    >
      {children}
    </div>
  );
}
