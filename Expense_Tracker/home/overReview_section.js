let overall_table_items = document.getElementById("expenses_table_overall").querySelector("tbody")
let overall_summary = document.getElementById("overall_summary")
let overall_chart = document.getElementById("overall_chart")
let bar_chart = document.getElementById("bar_chart")
let chat_summary;
function overReview() {

    overall_expenses_table()
    overall_expenses_summary()
    create_month_details()
}
function overall_expenses_table() {
    let overall_table = expensegetuserfn()
    if (overall_table.length && overall_table[0].expenses.length) {
        overall_table = overall_table[0].expenses
        overall_table_items.innerHTML = ""
        overall_table = sortdata(overall_table)
        overall_table.forEach((element, index) => {
            overall_table_items.appendChild(overal_row(element, index))
        });
    }
    else {
        overall_table_items.textContent = "No data available"
    }
}
function sortdata(overall_data) {
    for (i = 0; i < overall_data.length - 1; i++) {
        for (j = 0; j < overall_data.length - 1 - i; j++) {
            if (new Date(overall_data[j].expense_date) < new Date(overall_data[j + 1].expense_date)) {
                temp = overall_data[j]
                overall_data[j] = overall_data[j + 1]
                overall_data[j + 1] = temp
            }
        }
    }
    return overall_data
}
function overal_row(element, index) {
    let row = document.createElement("tr")
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${element.expense_amount}</td>
        <td>${element.expense_category}</td>
        <td>${element.expense_date}</td>
        `
    return row
}

function overall_expenses_summary() {
    let summary_data = expensegetuserfn()
    if (summary_data.length > 0 && summary_data[0].expenses.length) {
        summary_data = summary_data[0].expenses
        let catagory = {}

        summary_data.forEach(expense => {
            if (!catagory[expense.expense_category])
                catagory[expense.expense_category] = 0
            catagory[expense.expense_category] += expense.expense_amount
        }
        )
        overall_summary.innerHTML = ""
        catagory = sortdata_amount(catagory)
        for (let catagorydata in catagory) {
            let item = document.createElement("li")
            item.className = "list-group-item"
            item.innerHTML = `
            <span>${catagorydata}</span>
            <span>${catagory[catagorydata].toFixed(2)}</span>
            `
            overall_summary.appendChild(item)
        }
        bargraph("overall_bar_chart", catagory)
        update_expenses_piechart(catagory, "overall_chart", chat_summary)
    }
    else {
        document.getElementById("overall_summary_con").innerHTML=""
        document.getElementById("overall_summary_con").innerHTML= "data not available"
    }
}
function sortdata_amount(data) {
    const sortedExpenses = Object.entries(data)
        .sort((a, b) => b[1] - a[1]);
    const sortedExpensesObj = Object.fromEntries(sortedExpenses);
    return sortedExpensesObj
}

function bargraph(elementid, data_catagory) {
    let catagories = []
    let totals = []
    for (let catagory in data_catagory) {
        catagories.push(catagory)
        totals.push(data_catagory[catagory])
    }
    let bar_summary;
    bar_design(elementid,catagories,totals,bar_summary)
}
function bar_design(elementid, catagories, totals, bar) {
    if (bar) {
        bar.destroy();
    }
    const ctx = document.getElementById(`${elementid}`).getContext('2d');
    bar = new Chart(ctx, {
        type: "bar",
        data: {
            labels: catagories,
            datasets: [
                {
                    label: "Expense Amount",
                    data: totals,
                    backgroundColor: ["#007bff", "#28a745", "#dc3545", "#ffc107"], // Bar colors
                    borderColor: ["#0056b3", "#1e7e34", "#bd2130", "#e0a800"], // Optional: Bar border colors
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false,
                    min: 0,
                    title: {
                        display: true,
                        text: "Amount"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Catagories"
                    }
                }
            },
        },
    });
}
function create_month_details() {
    let data = expensegetuserfn()
    if(data.length)
    {
        data=data[0].expenses
    }
    let months = get_Month_names()
    let catagories = ["Food", "Entertainment", "Transport", "Other"]
    for (l = 0; l < catagories.length; l++) {
        let var_cat;
        let var_bar;
        let month_catagory = get_catagory_separate(catagories[l], data)
        month_catagory = get_catagory_update(month_catagory)
        if( month_catagory.reduce(function (x, y) {
            return x + y;
        }, 0)){
        chart_design(months, month_catagory, `${catagories[l]}_chart`, var_cat)
        bar_design(`${catagories[l]}_bar_chart`, months, month_catagory,var_bar)
        table_create(months, month_catagory, catagories[l])
        }
        else
        {
           let element= document.getElementById(`${catagories[l]}_con`)
           element.textContent="data not found for last six months"
        }
    }
}

function table_create(months, month_catagory, catagory) {
    let catagories_var = document.getElementById(`${catagory}`)
    catagories_var.innerHTML = ""
    // bargraph("bar_chart", catagory)
    for (let a = 0; a < months.length; a++) {
        let item = document.createElement("li")
        item.className = "list-group-item"
        item.innerHTML = `
            <span>${months[a]}</span>
            <span>${month_catagory[a].toFixed(2)}</span>
            `
        catagories_var.appendChild(item)
    }
}
function get_Month_names() {
    let monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    let res = []
    for (i = 0; i < 6; i++) {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - i);
        let year = currentDate.getFullYear()
        res.push(monthNames[currentDate.getMonth()] + " " + year);
    }
    return res
}
function get_catagory_separate(cat, data) {
    res = []
    for (i = 0; i < data.length; i++) {
        if (data[i].expense_category == cat)
            res.push(data[i])
    }
    return res
}
function get_catagory_update(month_catagory) {
    let currentDate = new Date();
    let res = []
    for (j = 0; j < 6; j++) {
        const endmonth = new Date()
        endmonth.setMonth(endmonth.getMonth() - j);
        endmonth.setDate(1)
        endmonth.setHours(0, 0, 0, 0)
        let amount = 0;
        for (i = 0; i < month_catagory.length; i++) {
            if (new Date(month_catagory[i].expense_date) >= endmonth && new Date(month_catagory[i].expense_date) <= currentDate)
                amount += month_catagory[i].expense_amount;
        }
        res.push(amount)
        currentDate = new Date(endmonth)
    }
    return res
}

