function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Web App Form')
    .setWidth(1000)
    .setHeight(1000);
}

function saveData(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Data');
  sheet.appendRow(["'" + data.id, data.name, data.age, data.gender, data.email, "'" + data.phone, data.location]);
  return 'Data saved successfully!';
}
