"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ContactUs from "../components/ContactUs";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("project");

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <ContactUs projectName={projectName || undefined} />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      }
    >
      <ContactPageContent />
    </Suspense>
  );
}
