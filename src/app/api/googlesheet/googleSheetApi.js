import { google } from "googleapis";

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
};

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

function handleSpreadSheetApiResponse(googleSheetRows) {
  if (googleSheetRows) {
    return googleSheetRows.slice(1).reduce((obj, item) => {
      return Object.assign(obj, { [item[0]]: item[1] });
    }, {});
  }
  return;
}

export async function writeToGoogleSheet(spreadsheetId, data) {
  var d = new Date();
  const datefrm =
    ("0" + d.getDate()).slice(-2) +
    "-" +
    ("0" + (d.getMonth() + 1)).slice(-2) +
    "-" +
    d.getFullYear() +
    " " +
    ("0" + d.getHours()).slice(-2) +
    ":" +
    ("0" + d.getMinutes()).slice(-2) +
    ":" +
    ("0" + d.getSeconds()).slice(-2) +
    ":" +
    ("0" + d.getMilliseconds()).slice(-2);

  var values = [
    [
      data.id,
      data.step,
      data.status,
      datefrm,
      data.email,
      data.lat,
      data.lng,
      data.address,
      data.phone,
      data.ipAddress,
      data.browserType,
      data.confirm,
      data.completeProcess,
    ],
  ];

  const result = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "A1:M1", // Replace with your Google Sheets document Sheet name
  });

  const rows = result.data.values;

  const rowIndexToUpdate = rows.findIndex((row) => {
    // console.log(row);
    return row[2] === data.email;
  });

  if (rowIndexToUpdate !== -1) {
    // Delete the existing row
    sheets.spreadsheets.values.clear(
      {
        spreadsheetId,
        range: `Sheet1!A${rowIndexToUpdate + 1}`,
      },
      (err) => {
        if (err) {
          console.error(err);
          throw new Error("Failed to delete row in Google Sheet.");
        }

        // Add the new row with the provided data
        sheets.spreadsheets.values.append(
          {
            spreadsheetId,
            range: "A1:L1",
            valueInputOption: "USER_ENTERED",
            resource: {
              values,
            },
          },
          (err) => {
            if (err) {
              console.error(err);
              throw new Error("Failed to write data to Google Sheet.");
            }
          }
        );
      }
    );
  } else {
    // If the row doesn't exist, add the new row with the provided data
    sheets.spreadsheets.values.append(
      {
        spreadsheetId,
        range: "A1:L1",
        valueInputOption: "USER_ENTERED",
        resource: {
          values,
        },
      },
      (err) => {
        if (err) {
          console.error(err);
          throw new Error("Failed to write data to Google Sheet.");
        }
      }
    );
  }

  //  email address	lat	lng		phone	address	city	country	zip-code	ipAddress	browerType confim-building
  //A1:K1
  //   try {
  //     const response = await sheets.spreadsheets.values.append({
  //       spreadsheetId,
  //       range: "A1:L1", // Change to your sheet name and range
  //       valueInputOption: "USER_ENTERED",
  //       requestBody: {
  //         values,
  //       },
  //     });

  //     console.log(response.data);
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw new Error("Failed to write data to Google Sheet.");
  //   }
}
