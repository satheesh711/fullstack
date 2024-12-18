let from_month = document.getElementById("from_month")
let from_year = document.getElementById("from_year")
let to_month = document.getElementById("to_month")
let to_year = document.getElementById("to_year")
let reciepts_form = document.getElementById("reciepts_form")
let receipts_table = document.getElementById("reciepts_table").querySelector("tbody")

function receipts() {
    Create_from_Options()
    reciepts_form.addEventListener("submit",(e)=>{
            e.preventDefault()
            let [date1,date2]=get_form_data()
            fiter_data(date1,date2)
            reciepts_form.reset()
        })
}
function Create_from_Options() {
    [Months, Years] = get_Moths_Years()
    from_month.innerText=""
    to_month.innerHTML=""
    from_month.append(Create_opetion_hidden())
    to_month.append(Create_opetion_hidden())
    for(i=0;i<Months.length;i++){
        from_month.append(Create_opetion(Months[i]))
        to_month.append(Create_opetion(Months[i]))
    }
    if(i==0)
    {
        from_month.append(Create_opetion("Data Not Found"))
        to_month.append(Create_opetion("Data Not Found"))
    }
    from_year.textContent=""
    to_year.textContent=""
    from_year.append(Create_opetion_hidden())
    to_year.append(Create_opetion_hidden())
    for(i=0;i<Years.length;i++)
    {
        from_year.append(Create_opetion(Years[i]))
        to_year.append(Create_opetion(Years[i]))
    }
    if(i==0)
    {
        from_year.append(Create_opetion("Data Not Found"))
        to_year.append(Create_opetion("Data Not Found"))
    }

}
function get_Moths_Years() {
    let data = expensegetuserfn()
    if (data.length) {
        data = data[0].expenses
    }
    if (!data.length) {
        return "No Months avaiable"
    }
    data = sortdata(data)
    let months = []
    let years = []
    for (let i = 0; i < data.length; i++) {
        let [month, year] = get_month_year(data[i].expense_date)
        if (!months.includes(month))
            months.push(month)
        if (!years.includes(year))
            years.push(year)
    }
    return [months, years]
}
let monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]
function get_month_year(month_year) {
    let date = new Date(month_year)
    let year = date.getFullYear()
    let month = monthNames[date.getMonth()]
    return [month, year]
}
function Create_opetion(option) {
    let opt = document.createElement("option")
    opt.value=`${option}`
    opt.textContent=`${option}`
    return opt
}
function Create_opetion_hidden()
{
    let opt = document.createElement("option")
    opt.selected="true"
    opt.value=""
    opt.hidden="true"
    opt.textContent="Choose...."
    return opt
}

function get_form_data()
{
    let year1=from_year.value
    let year2=to_year.value
    let month1=from_month.value
    let month2=to_month.value
    let date1=new Date(year1,monthNames.indexOf(month1),1)
    date1.setHours(0,0,0,0)
    let date2 = new Date(year2,monthNames.indexOf(month2),1)
    date2.setHours(0,0,0,0)
    if(date1.getTime() <= date2.getTime() )
    {
        [date1,date2]=set_dates(date1,date2)
    }
    else
    {
        [date1,date2]=set_dates(date2,date1)
    }
    return [date1,date2]
}
function set_dates(date1,date2)
{
    date2.setMonth(date2.getMonth()+1)
    date2.setDate(new Date(date2).getDate()-1)
    date2.setHours(24,0,0,0)
    return [date1,date2]
}
function fiter_data(date1,date2)
{
    let data = expensegetuserfn()
    if (data.length) {
        data = data[0].expenses
    }
    if (!data.length) {
        return "No data Found"
    }
    data=sortdata(data)
    for(i=0;i<data.length;i++)
    {
        if((new Date(data[i].expense_date)).getTime() >= date1.getTime() && (new Date(data[i].expense_date)).getTime() <= date2.getTime())
        {
            receipts_table.append(overal_row(data[i],i))
        }
    }
}