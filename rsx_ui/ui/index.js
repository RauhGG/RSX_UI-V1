$(() => {

    window.addEventListener('message', (event) => {
        let data = event.data;

       if (data.health > 30) {
            $('#vida').fadeOut()
        }
       else if (data.health < 30) {
        $('.health').text(Math.round(data.health));
        $('#vida').fadeIn() 
            if (data.health == -100) {
                $('.health').text('0')
            }
        }

        if (data.o2 > 30) {
            $('#aire').fadeOut()
        }
       else if (data.o2 < 30) {
        $('.air').text(Math.round(data.o2));
        $('#aire').fadeIn() 
            if (data.o2 == -100) {
                $('.health').text('0')
            }
        }

        if (data.food > 30) {
            $('#comida').fadeOut()
        }
       else if (data.food < 30) {
        $('.food').text(Math.round(data.food));
        $('#comida').fadeIn()
        }

        if (data.water > 30) {
            $('#agua').fadeOut()
        }
       else if (data.water < 30) {
        $('#agua').fadeIn()
        $('.water').text(Math.round(data.water));
        }

    });
});