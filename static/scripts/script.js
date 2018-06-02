$( document ).ready(function() {
    $.noConflict();
    jQuery(document).ready(function($){

        var correctAnswer = '';
        var targetCountry = '';

        function getData() {

            var apiUrl = "https://calm-reaches-91520.herokuapp.com/api";

            $.ajax({url: apiUrl,

                success: function(response) {
                    // console.log(response);

                    var data = response;
                    
                    console.log(data['answer'])

                    correctAnswer = data['answer'];
                    targetCountry = data['target_country'];

                    $('#question-text').text(data['question_text'])

                    $('#answer-one').text(data['answer_a'])
                    $('#answer-two').text(data['answer_b'])
                    $('#answer-three').text(data['answer_c'])
                    $('#answer-four').text(data['answer_d'])


                    console.log(data)
                    return response;
                },

                error: function(error, response) {
                    console.log('error ', error, response);
                }

            });
        }

        // gets and sets initial question
        getData();

        // listens to all button clicks
        $('.btn').click(function() {

            if ( $(this).text() === 'Continue' ) {

                // hide the alert
                $('#correct').attr('hidden', 'true');
                $('#incorrect').attr('hidden', 'true');

                // hide all buttons
                $('.answers').attr('hidden', false);

                // hide continue button
                $('#continue').attr('hidden', true);

                getData();


            } else {

                // correct answer
                var currentValue = $(this).text();

                if ( currentValue === correctAnswer ) {

                    // hide all buttons
                    $('.answers').attr('hidden', true);

                    // un-hide continue button
                    $('#continue').removeAttr('hidden');

                    // adds the correct message, removes the other
                    $('#correct').removeAttr('hidden');
                    var successText = 'Well done! ' + correctAnswer + ' is the capital of ' + targetCountry + '!';
                    $('#correct').text(successText)
                    $('#incorrect').attr('hidden', 'true');


                } else {

                    // incorrect answer

                    // Shows an error alert
                    $('#incorrect').removeAttr('hidden');
                    $('#correct').attr('hidden', 'true');
                    
                    // gets the actual country of the selected capital
                    // and displays it
                    $.ajax({url: 'https://calm-reaches-91520.herokuapp.com/api/' + currentValue,
                        success: function(response) {
                            console.log(response);

                            var incorrectText = 'Wrong, ' + currentValue + 
                                                        ' is the capital of ' + response['country_name'] + '.';

                            $('#incorrect').text(incorrectText)
                            $('#incorrect').effect( "shake" );
                        },
                        error: function(error, response) {
                            console.log('error ', error, response);
                        }
                    });
                }

            }

        });

    });
});
