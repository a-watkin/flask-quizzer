from flask import Flask, render_template, jsonify


from quizzer_db_read import Quizzer

# create application object
app = Flask(__name__)

# enable automatic reload on change and stack trace
# app.config["DEBUG"] = True


q = Quizzer()


@app.route('/')
def country_question():
    return render_template("test.html")


@app.route('/api')
def api_values():
    question = q.get_question_list()
    answer = q.country_capital[q.target_country]

    question_data = {
        'question_text': question[0],
        'answer_a': question[1][0],
        'answer_b': question[1][1],
        'answer_c': question[1][2],
        'answer_d': question[1][3],
        'answer': answer,
        'target_country': q.target_country
    }

    print(question_data)
    return jsonify(question_data)


# search for country of specified capital
@app.route("/api/<search_query>")
def search(search_query):
    print(search_query)
    country_name = q.capital_country[search_query]

    data = {'country_name': country_name}

    return jsonify(data)


if __name__ == '__main__':
    app.run()
