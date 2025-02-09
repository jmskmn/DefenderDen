import sqlite3
from datetime import datetime

import click
from flask import current_app, g

@click.command('test-add')
def test_add():
    add_class("Programming I","An introduction to...",True)
    click.echo('Success.')




def add_class(class_name, description,current=True):

    db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
    db.execute('''
        INSERT INTO class (name, description, current) 
        VALUES (?, ?, ?)
    ''', (class_name, description, current))
    db.commit()
def add_class_code(class_name,code,number):
    db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
    g.db.execute('''
            INSERT INTO class_code (class_name, code, number) 
            VALUES (?, ?, ?)
        ''', (class_name, code, number))
    g.db.commit()
    
