import random
import sqlite3


class Quizzer:

    def __init__(self):
        # self.country_list = []
        # self.capital_list = []
        self.country_capital = {}
        self.capital_country = {}
        self.target_country = ''

        # connect to the database
        country_db="./country_database.db"
        connection=sqlite3.connect(country_db)
        cursor=connection.cursor()

        # query the database and return all matching values
        cursor.execute('SELECT country_name, capital_city FROM country WHERE has_capital=1')
        rows=cursor.fetchall()

        # populate the country_capital dict with country and capital data
        for country, capital_city in rows:
            self.country_capital[country] = capital_city
            self.capital_country[capital_city] = country



    def get_question_list(self):
        question_list = []
        country_capital = self.country_capital
        self.target_country = random.choice(list(country_capital.keys()))

        question_list.append(country_capital[self.target_country])

        x = random.choice(list(country_capital.values()))
        # print(len(question_list))
        while len(question_list) < 4:
            x = random.choice(list(country_capital.values()))
            if x in question_list:
                pass
            else:
                question_list.append(x)

        random.shuffle(question_list)

        question_string = 'What is the capital of {}?'.format(self.target_country)

        return question_string, question_list 



def main():
    """
    gets the countries puts them into a list

    gets the capitals and puts them into a list

    then forms the question by randomly selecting a country
    """

    q = Quizzer()

    print(q.get_question_list())
    print(q.target_country)

    print(q.country_capital)

    # if I have the value 'Port Louis', how can i get the country name?
    print(q.capital_country['Port Louis'])

    # provides the string for the target country
    # print(q.target_country)
    # lookup the target country in country_capital to get the answer
    # print(q.country_capital[q.target_country])





if __name__ == '__main__':
    main()
