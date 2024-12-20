function home_page() {
    update_expenses_summary("home_chart1",document.getElementById("home_summary1"))
    update_expenses_summary1("home_chart2",document.getElementById("home_summary2"))
    let chart_home;
    let summary_data=expensegetuserfn()
    if(summary_data.length > 0 && summary_data[0].expenses.length){
    [catagory,chat_summary]=sumary_data_calcutation(summary_data,document.getElementById("home_summary3"))
    update_expenses_piechart(catagory,"home_chart3",chart_home)
    }
    else
    {
        document.getElementById("home_overall").innerHTML=""
        document.getElementById("home_overall").innerHTML= "data not available"
    }

}