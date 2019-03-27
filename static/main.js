console.log('js')

$(document).ready(function () {

    $('#mc-embedded-subscribe-form').on('change', (event) => {
        event.preventDefault();
        var datastring = $("#mc-embedded-subscribe-form").serializeArray();
        console.log(datastring)



        if(!(/^[a-zA-Z]+$/.test(datastring[1].value))){
            // alert('Please Type a valid name1')
            $( ".first_name" ).show( )
            $(".clear").hide()
            $(".clear").attr("disabled", true);
        }

        else if(!(/^[a-zA-Z]+$/.test(datastring[2].value))){
            // alert('Please Type a valid name1')
            $( ".last_name" ).show( )
            $(".clear").hide()
            $(".clear").attr("disabled", true);

        } 


        // else if((/^[a-zA-Z]+$/.test(datastring[1].value) && /^[a-zA-Z]+$/.test(datastring[2].value))){
        //     $( ".success" ).show( )
        // }

        

       else {
            $(".clear").show()
            $( ".success").show( )
        }
        
    })


});