// ================================
// jQuery Functions Demo - Script
// Lab 8 - 15 jQuery Functions
// ================================

$(document).ready(function () {

    // ================================
    // 1. fadeIn() & fadeOut()
    // ================================
    $('#fadeInBtn').click(function () {
        $('#fadeBox').fadeIn(500);
    });

    $('#fadeOutBtn').click(function () {
        $('#fadeBox').fadeOut(500);
    });

    $('#fadeToggleBtn').click(function () {
        $('#fadeBox').fadeToggle(500);
    });

    // ================================
    // 2. hide() & show()
    // ================================
    $('#hideBtn').click(function () {
        $('#hideBox').hide();
    });

    $('#showBtn').click(function () {
        $('#hideBox').show();
    });

    // ================================
    // 3. toggle()
    // ================================
    $('#toggleBtn').click(function () {
        $('#toggleBox').toggle(300);
    });

    // ================================
    // 4. slideUp() / slideDown() / slideToggle()
    // ================================
    $('#slideUpBtn').click(function () {
        $('#slideBox').slideUp(400);
    });

    $('#slideDownBtn').click(function () {
        $('#slideBox').slideDown(400);
    });

    $('#slideToggleBtn').click(function () {
        $('#slideBox').slideToggle(400);
    });

    // ================================
    // 5. animate()
    // ================================
    $('#animateLeftBtn').click(function () {
        $('#animateBox').animate({ left: '0px' }, 500);
    });

    $('#animateRightBtn').click(function () {
        $('#animateBox').animate({ left: '200px' }, 500);
    });

    $('#animateGrowBtn').click(function () {
        $('#animateBox').animate({
            width: '300px',
            height: '150px',
            fontSize: '20px'
        }, 500);
    });

    $('#animateResetBtn').click(function () {
        $('#animateBox').animate({
            left: '0px',
            width: '200px',
            height: '100px',
            fontSize: '16px'
        }, 500);
    });

    // ================================
    // 6. addClass() / removeClass() / toggleClass()
    // ================================
    $('#addClassBtn').click(function () {
        $('#classBox').addClass('highlight');
    });

    $('#removeClassBtn').click(function () {
        $('#classBox').removeClass('highlight');
    });

    $('#toggleClassBtn').click(function () {
        $('#classBox').toggleClass('highlight');
    });

    // ================================
    // 7. css()
    // ================================
    $('#cssRedBtn').click(function () {
        $('#cssBox').css('background', 'linear-gradient(135deg, #f5576c, #f093fb)');
    });

    $('#cssBlueBtn').click(function () {
        $('#cssBox').css('background', 'linear-gradient(135deg, #4facfe, #00f2fe)');
    });

    $('#cssGreenBtn').click(function () {
        $('#cssBox').css('background', 'linear-gradient(135deg, #43e97b, #38f9d7)');
    });

    $('#cssPurpleBtn').click(function () {
        $('#cssBox').css('background', 'linear-gradient(135deg, #667eea, #764ba2)');
    });

    // ================================
    // 8. text() / html() / val()
    // ================================
    $('#setTextBtn').click(function () {
        $('#contentDisplay').text('Text set using text() method!');
    });

    $('#setHtmlBtn').click(function () {
        $('#contentDisplay').html('<strong style="color: #f093fb;">Bold HTML</strong> using html() method!');
    });

    $('#getValBtn').click(function () {
        var inputValue = $('#inputVal').val();
        if (inputValue) {
            $('#contentDisplay').text('Input value: ' + inputValue);
        } else {
            $('#contentDisplay').text('Please type something in the input first!');
        }
    });

    // ================================
    // 9. attr()
    // ================================
    $('#attrGoogleBtn').click(function () {
        $('#attrLink').attr('href', 'https://google.com').text('Click me (Google)');
    });

    $('#attrGithubBtn').click(function () {
        $('#attrLink').attr('href', 'https://github.com').text('Click me (GitHub)');
    });

    $('#attrYoutubeBtn').click(function () {
        $('#attrLink').attr('href', 'https://youtube.com').text('Click me (YouTube)');
    });

    // ================================
    // 10. append() / prepend()
    // ================================
    var appendCount = 1;

    $('#appendBtn').click(function () {
        appendCount++;
        $('#appendList').append('<li>Appended Item ' + appendCount + '</li>');
    });

    $('#prependBtn').click(function () {
        appendCount++;
        $('#appendList').prepend('<li>Prepended Item ' + appendCount + '</li>');
    });

    $('#clearListBtn').click(function () {
        $('#appendList').html('<li>Original Item</li>');
        appendCount = 1;
    });

    // ================================
    // 11. on() - Event Handling
    // ================================
    $('#eventBox').on({
        click: function () {
            $('#eventLog').text('🖱️ Click event triggered at ' + new Date().toLocaleTimeString());
        },
        mouseenter: function () {
            $(this).css('transform', 'scale(1.1)');
            $('#eventLog').text('👆 Mouse entered the box!');
        },
        mouseleave: function () {
            $(this).css('transform', 'scale(1)');
            $('#eventLog').text('👋 Mouse left the box!');
        },
        dblclick: function () {
            $('#eventLog').text('👆👆 Double-click detected!');
        }
    });

    // ================================
    // 12. delay()
    // ================================
    $('#delayBtn').click(function () {
        $('#delayBox')
            .fadeOut(300)
            .delay(1000)
            .fadeIn(300)
            .delay(500)
            .fadeOut(300)
            .delay(500)
            .fadeIn(300);
    });

    // ================================
    // 13. stop()
    // ================================
    var stopAnimRunning = false;

    $('#startAnimBtn').click(function () {
        if (!stopAnimRunning) {
            stopAnimRunning = true;
            animateStopBox();
        }
    });

    function animateStopBox() {
        if (stopAnimRunning) {
            $('#stopBox')
                .animate({ left: '200px' }, 1000)
                .animate({ left: '0px' }, 1000, animateStopBox);
        }
    }

    $('#stopAnimBtn').click(function () {
        stopAnimRunning = false;
        $('#stopBox').stop(true, false);
    });

    // ================================
    // 14. each()
    // ================================
    $('#eachColorBtn').click(function () {
        $('.each-item').each(function (index) {
            $(this).addClass('color-' + index);
        });
    });

    $('#eachResetBtn').click(function () {
        $('.each-item').each(function (index) {
            $(this).removeClass('color-0 color-1 color-2 color-3');
        });
    });

    // ================================
    // 15. Method Chaining
    // ================================
    $('#chainBtn').click(function () {
        $('#chainBox')
            .css('background', 'linear-gradient(135deg, #f5576c, #f093fb)')
            .slideUp(300)
            .delay(200)
            .slideDown(300)
            .css('background', 'linear-gradient(135deg, #4facfe, #00f2fe)')
            .animate({ width: '300px' }, 300)
            .delay(200)
            .animate({ width: '200px' }, 300)
            .css('background', 'linear-gradient(135deg, #667eea, #764ba2)');
    });

});
