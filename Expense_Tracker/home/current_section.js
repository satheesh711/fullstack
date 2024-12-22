let expenses_form = document.getElementById("expenses_form")
let expenses_items = document.getElementById("expenses_table").querySelector("tbody")
let expense_summary = document.getElementById("expense_summary")
let expense_chart = document.getElementById("expense_chart")
let expenseChart;

function currentMonth() {
    update_expenses_items()
    update_expenses_summary("expense_chart",expense_summary)
    expenses_form.addEventListener("submit", (e) => {
        e.preventDefault()
        e.stopImmediatePropagation()
        let amount = amountfn(); let catagory = catagoryfn(); let date = datefn()
        if (isNaN(amount) || !catagory || !date) {
            alert("Please fill in all fields correctly.");
            return
        }
            let check = true;
            if (!CurrentMonthcheck(new Date(date))) {
                alert("date not belongs to this month")
                check = confirm("are you want to add belonging month")
            }
            if (check) {
                saveExpenses_data({ "expense_amount": amount, "expense_category": catagory, "expense_date": date })
                update_expenses_items()
                update_expenses_summary("expense_chart",expense_summary)
                alert("data added successfully")
                setTimeout(() => {
                    expenses_form.reset();
                }, 0);
                return
            }
            else {
                alert("data not added")
                expenses_form.reset()
                return 
            }
            
    })
}

function saveExpenses_data(data) {
    if (!expensegetuserfn().length) {
        let expen = expensegetfn()
        expen.push({ "username": username, "expenses": [data] })
        expensesetfn(expen)
    }
    else {
        let expen = expensegetuserfn()
        expen[0].expenses.push(data)
        updateexpensedata(expen[0])
    }
}

function update_expenses_items() {
    let tabledata = expensegetuserfn()
    if (tabledata.length && tabledata[0].expenses.length) {
        document.getElementById("expenses_table").style.display="block"
        document.getElementById("expenses_table").style.display=""
        tabledata = tabledata[0].expenses
        expenses_items.innerHTML = ""
        i = 0
        tabledata.forEach((item,index) => {
            if (CurrentMonthcheck(new Date(item.expense_date))) {
                
                expenses_items.appendChild(rowcreatefn(item, index,i++))
            }
        })
        if(i==0)
        {
            defultexpensetablefn()
        }
    }
    else
        defultexpensetablefn()
}

function update_expenses_summary(elementid,expense_summary) {
    let expense_data = expensegetuserfn()
    if (! (expense_data.length)  ) {
        defultsummarytablefn()
    }
    else {
        expense_data = expense_data[0].expenses
        let catagory_summary = {}
        expense_data.forEach(expense => {
            if (CurrentMonthcheck(new Date(expense.expense_date))) {
                if (!catagory_summary[expense.expense_category]) {
                    catagory_summary[expense.expense_category] = 0
                }
                catagory_summary[expense.expense_category] += expense.expense_amount
            }
        })
        expense_summary.innerHTML = ""
        k=0
        for (let catagory in catagory_summary) {
            k=1
            let item = document.createElement("li")
            item.className = "list-group-item"
            item.innerHTML = `
       <span>${catagory}</span>
       <span>${catagory_summary[catagory].toFixed(2)}</span>
       `
            expense_summary.appendChild(item)
        }
        if(k==0)
            defultsummarytablefn()
        update_expenses_piechart(catagory_summary, elementid)
        return catagory_summary
    }
}

function update_expenses_piechart(summary_data, elementid) {
    let catagories = []
    let totals = []
    for (let catagory in summary_data) {
        catagories.push(catagory)
        totals.push(summary_data[catagory])
    }
    
    chart_design(catagories, totals, elementid,expenseChart)
}
function chart_design(catagories, totals, elementid,expenseChart) {
    if (expenseChart) {
        expenseChart.destroy();
    }
    const ctx = document.getElementById(`${elementid}`).getContext('2d');
    expenseChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: catagories,
            datasets: [
                {
                    data: totals,
                    backgroundColor: ["#007bff", "#28a745", "#dc3545", "#ffc107"]
                },
            ],
        },
    })
}

function EditExpense(index) {
    let data = DeleteExpense_item(index)
    document.getElementById("expense_amount").value = data.expense_amount
    document.getElementById("expense_category").value = data.expense_category
    document.getElementById("expense_date").value = data.expense_date
}
function DeleteExpense(index) {
    if (confirm("are you sure?")) {
        DeleteExpense_item(index)
        alert("data removed successfully")
    }
    else {
        alert("data not removed")
    }
}
function DeleteExpense_item(index) {
    let data = expensegetuserfn()
    let editdata = data[0].expenses[index]
    data[0].expenses.splice(index, 1)
    updateexpensedata(data)
    expensesetfn(data)
    update_expenses_items()
    update_expenses_summary("expense_chart",expense_summary)
    return editdata
}

function amountfn() {
    return Number(document.getElementById("expense_amount").value)
}
function catagoryfn() {
    return document.getElementById("expense_category").value
}
function datefn() {
    return document.getElementById("expense_date").value
}
function updateexpensedata(updateData) {
    let expense_data = expensegetfn()
    for (let i = 0; i < expense_data.length; i++) {
        if (expense_data[i].username == username) {
            expense_data[i] = updateData
        }
    }
    expensesetfn(expense_data)
}
function expensegetfn() {
    return JSON.parse(localStorage.getItem("expenses")) || []
}
function expensegetuserfn() {
    return expensegetfn().filter(x => x.username == username) || []
}
function expensesetfn(expenses) {
    localStorage.setItem("expenses", JSON.stringify(expenses))
}
function defultexpensetablefn() {
    expenses_items.innerHTML = ""
    document.getElementById("expenses_table").style.display="none"
    // expenses_items.textContent = "add expense to get details"
}
function defultsummarytablefn()
{
    expense_summary.innerHTML = ""
    expense_summary.textContent = "data not available please add expenses"
}
function rowcreatefn(item, index,count) {
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
    row.querySelector(".edit_btn").addEventListener("click", () => EditExpense(index))
    row.querySelector(".delete_btn").addEventListener("click", () => DeleteExpense(index))
    return row
}

function CurrentMonthcheck(dataDate) {
    let currentDate = new Date();
    return (dataDate.getFullYear() === currentDate.getFullYear() && dataDate.getMonth() === currentDate.getMonth());
}