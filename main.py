#from crypt import methods
from cgitb import html
import re
from cherrypy import url
from flask import Flask, flash, redirect, url_for, render_template, request, session
from graphviz import render
import numpy as np
import pandas as pd
import os, io, csv, sys, pickle, time
from charset_normalizer import from_path
from itertools import chain
from prompt_toolkit import HTML 
from werkzeug.utils import secure_filename




def check_answers(user_input:list, answers:list) -> list:
    correct_answers_idx = []
    for i in range(len(user_input)):
        if user_input[i] == answers[i]:
            correct_answers_idx.append(i)
    return correct_answers_idx



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
        df = pd.read_excel(VOCAB_FILE, sheet_name=session['sheet_name'])
        df.dropna(inplace=True)

        articles = df.loc[:, 'le ou la'].values
        words = df.loc[:, 'word'].values
        user_input = []
        for i in range(len(articles)):
            user_input.append(request.form.get(f"#{i}"))

        correct_answers_idx = check_answers(user_input, articles)

        if len(correct_answers_idx) == len(articles):
            return "Congrads! You got them all right!"
        else: 
            
            return render_template('test.html', sheet_name=session['sheet_name'], words=words,
        enumerate=enumerate, len=len, range=range,
         user_input=user_input, articles=articles,
        correct_answers_idx=correct_answers_idx, mode='check')


    else: 
        df = pd.read_excel(VOCAB_FILE, sheet_name=session['sheet_name'])

        df.dropna(inplace=True)
        words = df.loc[:, 'word']
        return render_template('test.html', sheet_name=session['sheet_name'], words=words,
        enumerate=enumerate, mode='test')


