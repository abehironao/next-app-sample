"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { toast } from "sonner";

export default function Home() {
  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        すべての人間は
      </h1>
      <Button variant="outline" size="sm" disabled>
        Button
      </Button>
      <Button disabled>
        <Link href="/login">Login</Link>
      </Button>

      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>

      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event has been created", {
            position: "top-right",
            duration: Infinity,
            // invert: true,
            description: "Sunday, December 03, 2023 at 9:00 AM",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Show Toast
      </Button>
    </div>
  );
}
