// Determines layout of HTML Page
function template(managerArr, employeeArr) {
    // Accepts variables representing HTML to be distributed later
    let engineerList = [];
    let internList = [];

    // Iterates through an array of employees
    for (i = 0; i < employeeArr.length; i++) {

        // Checks for type of employee then pushes to the corresponding array
        if (employeeArr[i].getRole() === 'Engineer') {
            
            const engineerHTML = `
            <div class="col-2">
                <div class="card">
                    <div class="card-body">
                        Name: ${employeeArr[i].getName()}<br>
                        Employee ID: ${employeeArr[i].getID()}<br>
                        Email: ${employeeArr[i].getEmail()}<br>
                        GitHub: ${employeeArr[i].getGitHub()}
                    </div>
                </div>
            </div>`

            engineerList.push(engineerHTML);
        
        } else if (employeeArr[i].getRole() === 'Intern') {

            const internHTML = `
            <div class="col-2">
                <div class="card">
                    <div class="card-body">
                        Name: ${employeeArr[i].getName()}<br>
                        Employee ID: ${employeeArr[i].getID()}<br>
                        Email: ${employeeArr[i].getEmail()}<br>
                        School: ${employeeArr[i].getSchool()}
                    </div>
                </div>
            </div>`

            internList.push(internHTML);
        };
    }

    // function myFunction() {
    //     for (i = 0; i < engineerList.length; i++) {
    //         return engineerList[i];
    //     }
    // }
    
    // Returns entire HTML page including the two arrays from above and are distributed below
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/style.css">
        <title>Document</title>
    </head>
    <body>
        <header><h1>My Team</h1></header>
        <main>
            <div class="managers">
                <h3>Manager</h3>
                <div class="manager">
                    Name: ${managerArr[0].getName()}<br>
                    ID: ${managerArr[0].getID()}<br>
                    Email: ${managerArr[0].getEmail()}<br>
                    Office: ${managerArr[0].getOffice()}
                </div>
            </div>
            <div class="container">
            <h3>Engineers</h3>
                <div class="row">
                    <div class="engineers">
                        ${engineerList}
                    </div>
                </div>
                <div class="interns">
                    <h3>Intern</h3>
                    ${internList.pop()}
                    
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
}

module.exports = template;