function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("mat_data - Sheet1.csv"); // <--- IMPORTANT: Change to your actual sheet name!
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var materials = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var material = {};
    for (var j = 0; j < headers.length; j++) {
      material[headers[j]] = row[j];
    }
    materials.push(material);
  }

  var output = ContentService.createTextOutput(JSON.stringify(materials));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;

}
