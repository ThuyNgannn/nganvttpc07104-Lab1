//1.2
let name = "Vo Thi Thuy Ngan";
let birthday = "01/01/2004";

//arrow function
let sayHello = () => {
    console.log(`I'm ${name}, ${birthday}`);
};

sayHello();

let today = 2023;
let birthDay = 2004;
let age = today - birthDay;

let sayHello2 = () => {
    console.log(`${age}`);
};

sayHello2();

//1.3
const API_URL = "https://www.boredapi.com/api/activity";
//
fetch("https://www.boredapi.com/api/activity")
    .then(function (response) {
        response.json().then(function (data) {
            let app = document.getElementById("PC07104");

            let html = `<ul>
                <li>Accessibility: ${data.accessibility}</li>
                <li>Activity: ${data.activity}</li>
                <li>Key: ${data.key}</li>
                <li>Link: ${data.link}</li>
                <li>Participants: ${data.participants}</li>
                <li>Price: ${data.price}</li>
                <li>Type: ${data.type}</li>
            
            </ul>`;

            app.innerHTML = html;
            console.log(data);
        });
    })

    .catch(function (error) {
        console.error("Error fetching data:", error);
    });

//1.4
const API_URL_1 =
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

fetch(API_URL_1)
    .then(function (response1) {
        response1.json().then(function (data1) {
            let app1 = document.getElementById("bai1.4");
            let populationDataArray = data1.data;

            let html1 = "<table class='table table-striped'>";
            html1 += `
            <table class="table">
            <thead>
              <tr>
                <th scope="col">ID Nation</th>
                <th scope="col">Nation</th>
                <th scope="col">ID Year</th>
                <th scope="col">Year</th>
                <th scope="col">Population</th>
              </tr>
            </thead>
            <tbody>
              
           
            `;

            populationDataArray.forEach((populationData) => {
                html1 += `
                    <tr>
                        <th scope="row">${populationData["ID Nation"]}</th>
                        <td>${populationData.Nation}</td>
                        <td>${populationData["ID Year"]}</td>
                        <td>${populationData.Year}</td>
                        <td>${populationData.Population}</td>
                    </tr>
                `;
            });

            html1 += `
                </tbody>
            </table>
            `;

            app1.innerHTML = html1;

            console.log(populationDataArray);
        });
    })
    .catch(function (error1) {
        console.error(error1);
    });

const API_URL_2 = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students";

fetch(API_URL_2)
    .then(function (response2) {
        response2.json().then(function (data2) {
            let app2 = document.getElementById("bai1.5");
            let studentsData = data2;

            let html2 = "<table>";

            studentsData.forEach((student) => {
                html2 += `
                <table class="table">
                    <thead>
                        <tr> 
                            <th scope="col">#</th>
                            <th scope="col">Hình Ảnh</th>
                            <th scope="col">Họ Và Tên</th>
                            <th scope="col">Ngày tạo</th>
     
                        </tr>
                    </thead>
            <tbody>
            <tr>
                <th scope="row">${student.id}</th>
                <td><img src="${student.avatar}" alt=""></td>
                <td>${student.name}</td>
                <td>${student.createdAt}</td>
            </tr>
            </tbody>
        </table>            
                `;
            });

            html2 += "</table>";

            app2.innerHTML = html2;

            console.log(studentsData);
        });
    })
    .catch(function (error2) {
        console.error(error2);
    });