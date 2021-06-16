module.exports = ({ system_Departement }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <meta charset="UTF-8" />
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="" />
    <style>
      html,
      body {
        font-family: "Verdana", sans-serif;
      }
      h1,
      h2,
      h3, 
      h4,
      h5,
      h6 {
        font-family: "Segoe UI", sans-serif;
      }
    </style>
    <script src=""></script>
    <body>
      <div>
        <div style="position: relative">
          <table
            style="width: 100%; border: 1pt solid #000; border-spacing: 0"
            class="table1"
          >
            <thead>
              <tr>
                <th
                  style="
                    width: 30%;
                    border: 1pt solid #000;
                    border-collapse: collapse;
                  "
                >
                  <img style="width: 80%;padding: 10px" src=/images/login/logo.png
                  />
                </th>
                <th
                  style="
                    width: 30%;
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 15px;
                    text-align: center;
                    font-weight: bold;
                    border: 1pt solid #000;
                    border-collapse: collapse;
                  "
                >
                  ASSESSMENT REPORT
                </th>
                <th
                  style="
                    width: 40%;
                    border-collapse: collapse;
                    padding: 0;
                    vertical-align: text-bottom;
                    border-spacing: 0;
                    text-align: left;
                  "
                >
                  <table style="width: 100%; border: 0; border-spacing: 0">
                    <tr>
                      <td
                        style="
                          border: 1pt solid #000;
                          border-collapse: collapse;
                          height: 30.5px;
                          border-spacing: 0;
                          font-family: Arial, Helvetica, sans-serif;
                          font-size: 13px;
                          font-weight: 500;
                          padding-left: 8px;
                        "
                      >
                        <label style="margin-right: 5px">
                          Org. / Client:{ }
                        </label>
                        <span>ABC pvt Lmt</span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="
                          border: 1pt solid #000;
                          border-collapse: collapse;
                          height: 30.5px;
                          border-spacing: 0;
                          font-family: Arial, Helvetica, sans-serif;
                          font-size: 13px;
                          font-weight: 500;
                          padding-left: 8px;
                        "
                      >
                        <label style="margin-right: 5px"> Report No:{ } </label>
                        <span>R00001</span>
                      </td>
                    </tr>
                  </table>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
          <div>
            <h4
              style="
                font-family: Arial, Helvetica, sans-serif;
                font-size: 16px;
                font-weight: bold;
                margin: 1.33em 0;
              "
            >
              SYSTEM DETAILS:
            </h4>
          </div>
          <div
            style="
              font-family: Arial, Helvetica, sans-serif;
              font-size: 15px;
              font-weight: 500;
              margin-left: 10px;
              margin-bottom: 15px;
            "
          >
            <label style="color: #000; margin-right: 8px; font-weight: bold">
              System Name
            </label>
            <span></span>
          </div>
          <div
            style="
              font-family: Arial, Helvetica, sans-serif;
              font-size: 15px;
              font-weight: 500;
              margin-left: 10px;
              margin-bottom: 15px;
            "
          >
            <label style="color: #000; margin-right: 8px; font-weight: bold">
              System ID
            </label>
            <span></span>
          </div>
          <div
            style="
              font-family: Arial, Helvetica, sans-serif;
              font-size: 15px;
              font-weight: 500;
              margin-left: 10px;
              margin-bottom: 15px;
            "
          >
            <label style="color: #000; margin-right: 8px; font-weight: bold">
              Department{ }
            </label>
            <span>${system_Departement}</span>
          </div>
  
          <div class="">
            <h4
              style="
                font-family: Arial, Helvetica, sans-serif;
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 5px;
              "
            >
              System Details:
            </h4>
          </div>
          <div class="">
            <table
              style="
                border: 1pt solid #000;
                border-collapse: collapse;
                border-spacing: 0;
                width: 100%;
                text-align: center;
              "
            >
              <thead
                style="
                  background: #bfbfbf;
                  border: 1pt solid #000;
                  border-collapse: collapse;
                  border-spacing: 0;
                "
              >
                <tr>
                  <th
                    style="
                      width: 50%;
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 30px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                    "
                  >
                    Attribute Name
                  </th>
                  <th
                    style="
                      width: 50%;
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 30px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                    "
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="">
            <h4
              style="
                font-family: Arial, Helvetica, sans-serif;
                font-size: 16px;
                font-weight: bold;
                margin-bottom: 5px;
              "
            >
              ASSESSMENT OBSERVATIONS:
            </h4>
          </div>
          <div class="">
            <table
              style="
                border: 1pt solid #000;
                border-collapse: collapse;
                border-spacing: 0;
                width: 100%;
                text-align: center;
              "
            >
              <thead
                style="
                  background: #bfbfbf;
                  border: 1pt solid #000;
                  border-collapse: collapse;
                  border-spacing: 0;
                "
              >
                <tr>
                  <th
                    style="
                      width: 6%;
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 30px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                    "
                  >
                    S No.
                  </th>
                  <th
                    style="
                      width: 31%;
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 30px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                    "
                  >
                    Questions
                  </th>
                  <th
                    style="
                      width: 31%;
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 30px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                    "
                  >
                    Observation
                  </th>
                  <th
                    style="
                      width: 31%;
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 30px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                    "
                  >
                    Proposed Mitigation Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
                <tr>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                  <td
                    style="
                      border: 1pt solid #000;
                      border-collapse: collapse;
                      border-spacing: 0;
                      height: 22px;
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 14px;
                      text-align: center;
                    "
                  ></td>
                </tr>
              </tbody>
            </table>
          </div>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <div style="margin-top:20px;">
            <h4
              style="
                font-family: Arial, Helvetica, sans-serif;
                font-size: 16px;
                font-weight: bold;
                margin-top: 50px;
                margin-bottom: 2px;
              "
            >
              SUMMARY AND CONCLUSION:
            </h4>
          </div>
  
          <div
            style="
              font-family: Arial, Helvetica, sans-serif;
              font-size: 15px;
              font-weight: 500;
              margin-left: 0;
              margin-bottom: 30px;
              border: 1pt solid #000;
              min-height: 100px;
              padding: 5px;
              margin-bottom: 50px;
            "
          ></div>
        </div>
      </div>
    </body>
  </html>
  
    `;
};
