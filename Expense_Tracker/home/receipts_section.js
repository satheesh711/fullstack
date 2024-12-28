let from_month = document.getElementById("from_month")
let from_year = document.getElementById("from_year")
let to_month = document.getElementById("to_month")
let to_year = document.getElementById("to_year")
let reciepts_form = document.getElementById("reciepts_form")
let receipts_table = document.getElementById("reciepts_table").querySelector("tbody")
let pdf_btn = document.getElementById("pdf_btn")
let pdf_data
function receipts() {
    let data_items=false
    Create_from_Options()
    reciepts_form.addEventListener("submit",async (e)=>{
            e.preventDefault()
            let [date1,date2]=get_form_data();
            setTimeout(() => {
                data_items=fiter_data(date1,date2)
                document.getElementById("month_name").textContent=`${pdf_data} Expenses`
                reciepts_form.reset()
            }, 100);
        })
        pdf_btn.addEventListener("click",()=>{
            if(!data_items)
                sweetAlert("please Select Expenses months..","error")
            else
            {
            createPdf()
            }
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
    getpdf_month_data(month1,year1,month2,year2)
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
        // return "No data Found";
        return false;
    }
    data=sortdata(data)
    k=0
    receipts_table.textContent=""
    for(i=0;i<data.length;i++)
    {
        if((new Date(data[i].expense_date)).getTime() >= date1.getTime() && (new Date(data[i].expense_date)).getTime() <= date2.getTime())
        {
            receipts_table.append(overal_row(data[i],k++))
        }
    }
    return true
}
function createPdf()
{
    let {jsPDF} = window.jspdf;
    let doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Expenses", 100, 20);
    doc.setFontSize(12);
    doc.text(`${pdf_data} Expenses`, 14, 30);

    doc.autoTable({
        html:'#reciepts_table',
        startY: 40,
        theme:'striped',
        styles:{fontSize:10}
    })

    doc.save("expenses data.pdf")
    sweetAlert("Expenses Downloanded..","success")

}
function getpdf_month_data(m1,y1,m2,y2)
{
    if(m1 == m2 && y1 == y2)
    {
        pdf_data=`${m1} ${y1} Month`
        return
    }
    else
    {
        let date1=new Date(y1,monthNames.indexOf(m1),1)
        let date2=new Date(y2,monthNames.indexOf(m2),1)
        if(date1.getTime()>date2.getTime())
        {
            pdf_data=`From ${m2} ${y2} To ${m1} ${y1} Months`
            return 
        }
        else
        {
            pdf_data=`From ${m1} ${y1} To ${m2} ${y2} Months`
            return
        }
    }

}