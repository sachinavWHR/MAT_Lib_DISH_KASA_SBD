function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index');
}

function getMaterials() {
  const sheetId = "19MHXK5u2nUhoA77EAKe0Vo9YqsVuQzK-SPqGJVhqOBg"; // Replace with your actual Sheet ID
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const sheet = spreadsheet.getSheetByName("Sheet1"); // Your tab name
  const data = sheet.getDataRange().getValues();
  const headers = data[0].map(h => h.toString().trim()); // trim whitespace
  return data.slice(1).map(row => {
    let entry = {};
    headers.forEach((key, i) => entry[key] = row[i]);
    return entry;
  });
}