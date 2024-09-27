from flask import Flask, render_template, jsonify, json, request

app = Flask(__name__)

from app.controlers.default import *