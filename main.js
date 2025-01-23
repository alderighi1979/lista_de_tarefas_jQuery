$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        // trim elimina espaços em branco
        const taskName = $('#taskName').val().trim();
        const startDate = $('#startDate').val();
        const formattedDate = formatDate(startDate);

        const addTask = $('<li style="display: none"></li>').text(`Inicio: ${formattedDate} - Atividade: ${taskName} `)

        $('#taskList').append(addTask);

        addTask.fadeIn();

        $('#taskName').val("");

        addTask.on('click', function(){
            $(this).toggleClass('complete');
        })


    });
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Obtém o dia e adiciona zero à esquerda se necessário
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Obtém o mês (0-11) e adiciona 1
    const year = date.getFullYear(); // Obtém o ano

    return `${day}/${month}/${year}`; // Retorna a data formatada
}