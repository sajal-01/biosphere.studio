import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    console.log("Form data received:", formData);

    const externalResponse = await fetch(
      "https://script.google.com/macros/s/AKfycbxTd1xFXUnrXOGIomNqP8_epTzXBhEt1smyqhqtxjVH5il6DfmbQAnS73RZV6Zl4Nhy/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!externalResponse.ok) {
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
