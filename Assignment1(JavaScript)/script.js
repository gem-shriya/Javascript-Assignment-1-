const divData = document.querySelector("div.mydata");

let tableHeaders = [
    "Name",
    "Age",
    "DOB",
    "Email",
    "Company"
];

let tableData = [
    ["Shriya Singh", "19", "19-july-2002", "shriya.singh@gmail.com", "Gemini Solutions"],
    ["Janvi Pandey", "20", "13-june-2001", "janvi.pandey@gmail.com", "Gemini Solutions"],
    ["Aditya Singh", "22", "1-aug-2000", "aditya.singh@gmail.com", "Gemini Solutions"],
    ["Javeria Afzal", "18", "4-july-2002", "javeria.afzal@gmail.com", "Gemini Solutions"],
    ["Carol Denvers", "23", "25-april-1999", "carol.denvers@gmail.us", "Gemini Solutions"],

];
//Self Invoking Function
(function() {
    let myHeading = document.createElement('h1');
    let headingText = document.createTextNode("Employee Details");
    myHeading.appendChild(headingText);
    myHeading.className = 'myHeading';
    divData.append(myHeading);

    let myTable = document.createElement('table');
    myTable.className = 'myTable';

    let myTableHead = document.createElement('thead');
    myTableHead.className = 'myTableHead';

    let myTableHeaderRow = document.createElement('tr');
    myTableHeaderRow.className = 'myTableHeaderRow';

    tableHeaders.forEach(header => {
        let myHeader = document.createElement('th');
        myHeader.innerText = header;
        myTableHeaderRow.append(myHeader);
    });

    myTableHead.append(myTableHeaderRow);
    myTable.append(myTableHead);



    let myTableBody = document.createElement('tbody');
    myTableBody.className = 'myTable-Body';

    for (var i = 0; i < 5; i++) {
        let myTableBodyRow = document.createElement('tr');
        myTableBodyRow.className = 'myTableBodyRow';
        let td1 = document.createElement('td');
        let myName = document.createTextNode(tableData[i][0]);
        td1.appendChild(myName);
        let td2 = document.createElement('td');
        let myAge = document.createTextNode(tableData[i][1]);
        td2.appendChild(myAge);
        let td3 = document.createElement('td');
        let myDob = document.createTextNode(tableData[i][2]);
        td3.appendChild(myDob);
        let td4 = document.createElement('td');
        let myEmail = document.createTextNode(tableData[i][3]);
        td4.appendChild(myEmail);
        let td5 = document.createElement('td');
        let myCompany = document.createTextNode(tableData[i][4]);
        td5.appendChild(myCompany);
        myTableBodyRow.append(td1, td2, td2, td3, td4, td5);
        myTableBody.append(myTableBodyRow);

    }

    myTable.append(myTableBody);
    divData.append(myTable);


})();