setInterval(()=> {
    const time = document.querySelector('.display #time')
    const div_date = document.querySelector('.display #day')
    const div_week_day = document.querySelector('.display #week_day')
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let weekDay = date.getDay();
    let diaSemana = [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    let nomesMeses = [
        "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
        "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(hours < 10){
        hours = '0' + hours;
    }

    if(day < 10){
        day = '0' + day
    }

    time.textContent = hours + ':' + minutes + ':' + seconds
    div_date.textContent = day + " | " + nomesMeses[month] + " | " + year
    div_week_day.textContent = diaSemana[weekDay].toUpperCase()
})

setInterval(()=>{
    
    
    
    


})