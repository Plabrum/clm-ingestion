import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50">
      <Card className="max-w-xl w-full shadow-xl border rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            📄 Contract Scanner for Outlook
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-gray-700">
            This Outlook Add-in automatically scans email content and classifies
            whether it&apos;s contract-related using an AI backend.
          </p>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">🔧 Installation</h2>
            <p className="text-sm text-gray-600">
              Download and sideload the manifest file into Outlook:
            </p>
            <Link href="/manifest.xml" target="_blank">
              <Button variant="outline" className="mt-1">
                Download manifest.xml
              </Button>
            </Link>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">💻 GitHub</h2>
            <Link
              href="https://github.com/Plabrum/clm-ingestion"
              target="_blank"
            >
              <Button variant="default">View on GitHub</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
