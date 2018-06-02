                // reset colours
                $('#answer-one').addClass('btn-primary').removeClass('btn-warning');
                $('#answer-two').addClass('btn-primary').removeClass('btn-success');
                $('#answer-three').addClass('btn-primary').removeClass('btn-warning');
                $('#answer-four').addClass('btn-primary').removeClass('btn-success');











                    // adds the correct message, removes the other
                    $('#correct').removeAttr('hidden');
                    var successText = 'Well done! ' + correctAnswer + ' is the capital of ' + targetCountry + '!';
                    $('#correct').text(successText)
                    $('#incorrect').attr('hidden', 'true');

                    $('#answer-two').text('Next');

                    // disable other buttons
                    // $('#answer-three').attr('disabled', true);

                    // btn-primary
                    $('#answer-one').addClass('btn-warning').removeClass('btn-primary');
                    $('#answer-two').addClass('btn-success').removeClass('btn-primary');

                    $('#answer-one').text('Go back');
                    $('#answer-two').text('Next');


                    $('#answer-three').addClass('btn-warning').removeClass('btn-primary');
                    $('#answer-four').addClass('btn-success').removeClass('btn-primary');

                    $('#answer-three').text('Go back');
                    $('#answer-four').text('Next');
                    // $('#answer-four').text('Next');
                    // $('#answer-two').text('Next');
                    // 
                    // 
                    // 
                    // 
                    // 
                    // 
                    // 



// go back 


            else if ( $(this).text() === 'Go back' ) {
                console.log('goldfish');
                $('#correct').attr('hidden', 'true');
                $('#incorrect').attr('hidden', 'true');

                // reset colours
                $('#answer-one').addClass('btn-primary').removeClass('btn-warning');
                $('#answer-two').addClass('btn-primary').removeClass('btn-success');
                $('#answer-three').addClass('btn-primary').removeClass('btn-warning');
                $('#answer-four').addClass('btn-primary').removeClass('btn-success');

                getData();

            }