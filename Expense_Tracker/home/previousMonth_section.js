let expense_Chart1;
let expense_summary1 = document.getElementById("expense_summary1")
let expense_chart1 = document.getElementById("expense_chart1")
let expenses_items1 = document.getElementById("expenses_table1").querySelector("tbody")

function previousMonth() {
    update_expenses_items1()
    update_expenses_summary1("expense_chart1")
    let form_copy = document.getElementById("form-copy")
    form_copy.textContent = ""
    const clonedForm = expenses_form.cloneNode(true);
    clonedForm.id = "form_previous"
    form_copy.append(clonedForm)
    let form_layout = document.getElementById("form_previous")
    form_layout.style.display = "none"
    function getPreviousMonthName() {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 1);

        let monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return monthNames[currentDate.getMonth()];
    }

    document.getElementById("previousmonthname").textContent = `${getPreviousMonthName()} Month Details`
    let togle = document.getElementById("togle")
    togle.style.display = "block"
    togle.addEventListener("click", () => {
        togle.style.display = "none"
        form_layout.style.display = "block"
        form_layout.style.display = ""
    })
    form_layout.addEventListener("submit", (e) => {
        e.preventDefault()
        e.stopImmediatePropagation()
        form_layout.style.display = "none"
        togle.style.display = "block"
        let amount = amountfn1(); let catagory = catagoryfn1(); let date = datefn1()
        if (isNaN(amount) || !catagory || !date) {
            alert("Please fill in all fields correctly.");
            return
        }
        let check = true;
        if (!Monthcheck(new Date(date))) {
            alert("date not belongs to this month")
            check = confirm("are you want to add belonging month")
        }
        if (check) {
            saveExpenses_data({ "expense_amount": amount, "expense_category": catagory, "expense_date": date })
            update_expenses_items1()
            update_expenses_summary1("expense_chart1")
            alert("data added successfully")
            setTimeout(() => {
                form_layout.reset();
            }, 0);
            return
        }
        else {
            alert("data not added")
            form_layout.reset()
            return 
        }
        
        
    })

}

function update_expenses_summary1(elementid) {
    let expense_data = expensegetuserfn()
    if (expense_data.length <= 0 ) {
        defultsummarytablefn1()
    }
    else {
        expense_data = expense_data[0].expenses
        let catagory_summary = {}
        expense_data.forEach(expense => {
            if (Monthcheck(new Date(expense.expense_date))) {
                if (!catagory_summary[expense.expense_category]) {
                    catagory_summary[expense.expense_category] = 0
                }
                catagory_summary[expense.expense_category] += expense.expense_amount
            }
        })
        expense_summary1.innerHTML = ""
        k=0
        for (let catagory in catagory_summary) {
            k=1
            let item = document.createElement("li")
            item.className = "list-group-item"
            item.innerHTML = `
           <span>${catagory}</span>
           <span>${catagory_summary[catagory].toFixed(2)}</span>
           `
            expense_summary1.appendChild(item)
        }
        if(k==0)
            defultsummarytablefn1()
        update_expenses_piechart(catagory_summary, elementid)
    }
}


function amountfn1() {
    return Number(document.getElementById("form-copy").getElementsByTagName("input")[0].value)
}
function catagoryfn1() {
    return document.getElementById("form-copy").getElementsByTagName("select")[0].value
}
function datefn1() {
    return document.getElementById("form-copy").getElementsByTagName("input")[1].value
}
function rowcreatefn1(item, index, count) {
    let row = document.createElement("tr")
    row.innerHTML = `
        <td>${count + 1}</td>
        <td>${item.expense_amount}</td>
        <td>${item.expense_category}</td>
        <td>${item.expense_date}</td>
        <td>
            <button class="btn btn-sm btn-warning edit_btn">Edit</button>
            <button class="btn btn-sm btn-danger delete_btn">Delete</button>
        </td>
    `
    row.querySelector(".edit_btn").addEventListener("click", () => EditExpense1(index))
    row.querySelector(".delete_btn").addEventListener("click", () => DeleteExpense1(index))
    return row
}
function EditExpense1(index)
{
    let data = DeleteExpense_item1(index)
    document.getElementById("form_previous").style.display="block"
    document.getElementById("form_previous").style.display=""
    document.getElementById("togle").style.display="none"
    document.getElementById("form-copy").getElementsByTagName("input")[0].value = data.expense_amount
    document.getElementById("form-copy").getElementsByTagName("select")[0].value = data.expense_category
    document.getElementById("form-copy").getElementsByTagName("input")[1].value = data.expense_date
}

function DeleteExpense1(index) {
    if (confirm("are you sure?")) {
        DeleteExpense_item1(index)
        alert("data removed successfully")
    }
    else {
        alert("data not removed")
    }
}
function DeleteExpense_item1(index) {
    let data = expensegetuserfn()
    let editdata = data[0].expenses[index]
    data[0].expenses.splice(index, 1)
    updateexpensedata(data)
    expensesetfn(data)
    update_expenses_items1()
    update_expenses_summary1("expense_chart1")
    return editdata
}

function update_expenses_items1() {
    let tabledata = expensegetuserfn()
    if (tabledata.length && tabledata[0].expenses.length) {
        tabledata = tabledata[0].expenses
        expenses_items1.innerHTML = ""
        i = 0
        tabledata.forEach((item, index) => {
            if (Monthcheck(new Date(item.expense_date))) {
                expenses_items1.appendChild(rowcreatefn1(item, index, i++))
            }
        })
        if(i==0)
        {
                defultexpensetablefn1()
        }
    }
    else
        defultexpensetablefn1()
}

function Monthcheck(dateprevious) {
    let currentDate = new Date()
    if (currentDate.getMonth() == 0) {
        return (dateprevious.getMonth() == 11 && dateprevious.getFullYear() == (currentDate.getFullYear() - 1))
    }
    else {
        return (dateprevious.getMonth() == (currentDate.getMonth() - 1) && dateprevious.getFullYear() == currentDate.getFullYear())
    }
}
function defultexpensetablefn1() {
    expenses_items1.innerHTML = ""
    expenses_items1.textContent = "add expense to get details"
}
function defultsummarytablefn1()
{
    expense_summary1.innerHTML = ""
    expense_summary1.textContent = "data not available please add expenses"
}