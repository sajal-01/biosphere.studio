import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    console.log("Form data received:", formData);

    const externalResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbyVfyxJtRhEUQxY8W58tNCR8bpkLNtzdS36-U7S48_NKyUbwew0U7ShXFx1PfAvi2ql/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!externalResponse.ok) {
      console.log(externalResponse.status);
      const errorText = await externalResponse.text();
      return NextResponse.json(
        { message: "Failed to submit form", error: errorText },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in API handler:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
