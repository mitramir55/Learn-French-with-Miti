#from crypt import methods
from cgitb import html
import re
from cherrypy import url
from flask import Flask, flash, redirect, url_for, render_template, request, session
import numpy as np
import pandas as pd
import os, io, csv, sys, pickle, time
from charset_normalizer import from_path
from itertools import chain
from prompt_toolkit import HTML 
from werkzeug.utils import secure_filename

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
        return "this is if "

    else: 
        df = pd.read_excel(VOCAB_FILE, sheet_name=session['sheet_name'])
        return f"{df}"


