"use client";

import { useSearchParams } from "next/navigation";
import ContactUs from "../components/ContactUs";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const projectName = searchParams.get("project");

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <ContactUs projectName={projectName || undefined} />
    </div>
  );
}
