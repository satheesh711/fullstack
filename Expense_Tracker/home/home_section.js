function home_page() {
    catagorydata=update_expenses_summary("home_chart1",document.getElementById("home_summary1"))
    update_expenses_summary1("home_chart2",document.getElementById("home_summary2"))
    let chart_home;
    let summary_data=expensegetuserfn()
    if(summary_data.length > 0 && summary_data[0].expenses.length){
        document.getElementById("no_data_home").style.display="none";
        document.getElementById("Home_con").style.display="block";
        [catagory,chat_summary]=sumary_data_calcutation(summary_data,document.getElementById("home_summary3"))
        update_expenses_piechart(catagory,"home_chart3",chart_home)
    }
    else
    {
        document.getElementById("home_summary3").innerHTML=""
        document.getElementById("no_data_home").style.display="block";
        document.getElementById("Home_con").style.display="none";
    }

}