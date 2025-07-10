import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ],
});

const sheets = google.sheets({ version: "v4", auth });

async function ensureColumnsExist(spreadsheetId: string) {
  try {
    // First, check if the sheet exists and get its properties
    const response = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    const sheet = response.data.sheets?.[0];
    if (!sheet) {
      throw new Error("No sheet found");
    }

    // Get the current headers
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!1:1",
    });

    const currentHeaders = headerResponse.data.values?.[0] || [];
    const requiredHeaders = ["Name", "Email", "Phone", "Project Name"];

    // If no headers exist, create them
    if (currentHeaders.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "Sheet1!A1:D1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [requiredHeaders],
        },
      });
    }
    // If headers exist but are different, append missing ones
    else {
      const missingHeaders = requiredHeaders.filter(
        (header) => !currentHeaders.includes(header)
      );
      if (missingHeaders.length > 0) {
        for (let i = 0; i < missingHeaders.length; i++) {
          const column = String.fromCharCode(65 + currentHeaders.length + i);
          await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: `Sheet1!${column}1`,
            valueInputOption: "USER_ENTERED",
            requestBody: {
              values: [[missingHeaders[i]]],
            },
          });
        }
      }
    }

    return true;
  } catch (error) {
    console.error("Error ensuring columns exist:", error);
    throw error;
  }
}

export async function appendToSheet(data: {
  name: string;
  email: string;
  phone: string;
  projectName?: string;
}) {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    if (!spreadsheetId) {
      throw new Error("Spreadsheet ID not configured");
    }

    // Ensure columns exist before appending
    await ensureColumnsExist(spreadsheetId);

    // Append the data
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:D",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            data.name,
            data.email,
            data.phone,
            data.projectName || "General Enquiry",
          ],
        ],
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error appending to sheet:", error);
    return { success: false, error };
  }
}
