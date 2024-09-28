from flask import Flask, render_template, jsonify, json, request, redirect, session

app = Flask(__name__)

app.secret_key = '123'

from app.controlers.default import *