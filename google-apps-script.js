// ============================================================
// GOOGLE APPS SCRIPT — Multi-Project Lead Capture
// METHOD: doGet (GET request with URL params — no CORS issues)
// ============================================================
// INSTRUCTIONS:
// 1. Go to https://script.google.com
// 2. Click "New Project" → name it "All Projects Leads"
// 3. Delete existing code and PASTE this entire file
// 4. Click "Save" (Ctrl+S)
// 5. Click "Deploy" → "New Deployment"
// 6. Type: "Web App"
// 7. Execute as: "Me"
// 8. Who has access: "Anyone"
// 9. Click "Deploy" and COPY the Web App URL
// 10. Paste that URL in index.html
// ============================================================

const SHEET_NAME = "All Leads";

function doGet(e) {
  try {
    const data = e.parameter; // URL parameters se data milega

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create sheet with headers if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "Project Name",
        "Name",
        "Phone",
        "Email",
        "Configuration",
        "Source"
      ]);

      // Style the header row — dark green
      const headerRange = sheet.getRange(1, 1, 1, 7);
      headerRange.setBackground("#0a4d2e");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      headerRange.setFontSize(11);
      sheet.setFrozenRows(1);

      // Set column widths
      sheet.setColumnWidth(1, 180);
      sheet.setColumnWidth(2, 200);
      sheet.setColumnWidth(3, 160);
      sheet.setColumnWidth(4, 130);
      sheet.setColumnWidth(5, 200);
      sheet.setColumnWidth(6, 130);
      sheet.setColumnWidth(7, 200);
    }

    // Append new lead row
    sheet.appendRow([
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.project_name || "Unknown Project",
      data.name         || "",
      data.phone        || "",
      data.email        || "",
      data.config       || "Not specified",
      data.source       || "Website"
    ]);

    // Alternating row color
    const lastRow = sheet.getLastRow();
    if (lastRow % 2 === 0) {
      sheet.getRange(lastRow, 1, 1, 7).setBackground("#f0f7f4");
    }

    // Return success — CORS friendly
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Lead saved!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function
function testSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log("Spreadsheet: " + ss.getName());
  Logger.log("URL: " + ss.getUrl());
}
