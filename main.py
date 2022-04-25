
from flask import Flask, redirect, url_for, render_template, request, session
import numpy as np
import pandas as pd




def check_answers(user_input:list, answers:list) -> list:
    correct_answers_idx = []
    for i in range(len(user_input)):
        if user_input[i] == answers[i]:
            correct_answers_idx.append(i)
    return correct_answers_idx

def get_links(words):
    links = []
    for word in words:
        url = 'https://www.wordreference.com/fren/' + word
        links.append(url)
    return links


app = Flask(__name__)

# config------------------------------------------------
VOCAB_FILE = 'Vocabulary.xlsx'
ALLOWED_EXTENSIONS = {'txt'}

app.config['SECRET_KEY'] = '12345'

#------------------------------------------------------
@app.route('/', methods=['POST', 'GET'])
def index(**kwargs):
    
    if request.method=='POST':
        session['sheet_name'] = request.form['submit']
        return redirect(url_for('test'))

    else:
        vocab_file_sheets = pd.read_excel(VOCAB_FILE, None)
        return render_template('index.html', sheets_dict = vocab_file_sheets)
        


@app.route('/test', methods=['POST', 'GET'])
def test(**kwargs):
  
    if request.method=='POST': 
        if request.form['submit']:
            checkbox_bool = request.form.get('checkbox_bool')
            
            df = pd.read_excel(VOCAB_FILE, sheet_name=session['sheet_name'])
            df.dropna(subset=['word', 'le ou la'], inplace=True)

            articles = df.loc[:, 'le ou la'].values
            words = df.loc[:, 'word'].values
            user_input = []
            samples = None
            links = None
            confetti_bool= None

            if checkbox_bool: 
                df.loc[:, 'sample'].fillna('', inplace=True)
                links = get_links(words)
                samples = df.loc[:, 'sample'].values
            
            for i in range(len(articles)):
                user_input.append(request.form.get(f"#{i}"))

            correct_answers_idx = check_answers(user_input, articles)

            if len(correct_answers_idx) == len(articles):
                confetti_bool = True

            return render_template('test.html', sheet_name=session['sheet_name'], words=words,
                    checkbox_bool=checkbox_bool, confetti_bool=confetti_bool, 
                    samples=samples, links=links, user_input=user_input, articles=articles, 
                    enumerate=enumerate, len=len, range=range,
                    correct_answers_idx=correct_answers_idx,
                    mode='check')

        elif request.form['replay']:
            return redirect(url_for('test'))

    else: 
        df = pd.read_excel(VOCAB_FILE, sheet_name=session['sheet_name'])

        df.dropna(subset=['word', 'le ou la'], inplace=True)
        words = df.loc[:, 'word']
        return render_template('test.html', sheet_name=session['sheet_name'], words=words,
        enumerate=enumerate, mode='test')


