// Employee Table
const emp = []

// Submit Form
function submitForm()
{
    let employename = document.getElementById("empyname").value;
    let profes = document.getElementById("profession").value;
    let age = document.getElementById("personage").value;

    

    if(employename === "" && profes === "" && age === "")
    {
        // for alert msg
        document.getElementById("usermsg").style.color = "red"
        document.getElementById("usermsg").innerHTML = "Error: Please make sure all the fields are filled before adding in an employee!"
    }
    else
    {
        // for succes msg
        document.getElementById("usermsg").style.color = "green";
        document.getElementById("usermsg").innerHTML = "Success: Employee Added!"

        const noemp = document.getElementById("numberemployes")
        noemp.style.display = "none";

        emp.push(
            {
                name: employename,
                profession: profes,
                age: age,
            }
        )

        document.getElementById("form").reset();
    }

    let table = document.getElementById("table")
    table.innerHTML = "";

    

    emp.map((user, i) =>
    {
        table.innerHTML += 
        `
        <tbody>
            <tr>
                <td> ${i + 1}. </td>
                <td> Name: ${user.name} </td>
                <td> Profession: ${user.profession} </td>
                <td> Age: ${user.age} </td>
                <td> <button onclick=del(${i}) type="button" class="delbtn"> Delete </button> </td>
            </tr>
        </tbody>
        `
    })
}

// 
function del(user)
{
    delete emp[user]
    table.innerHTML = ""

    emp.map((user, i) =>
    {
        table.innerHTML += 
        `
        <tbody >
            <tr>
                <td> ${i + 1}. </td>
                <td> Name: ${user.name} </td>
                <td> Profession: ${user.profession} </td>
                <td> Age: ${user.age} </td>
                <td> <button onclick=delete(${i}) type="button" class="delbtn"> Delete </button> </td>
            </tr>
        </tbody>
        `
    })
}

console.log(table);