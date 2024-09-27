# importando
from app import app, render_template, json, jsonify, request as req

infos = [
    'version : 1.0.0',
    'name : chat_bot',
]

# Rota inicial
@app.route("/")
def home():
    if req.method == 'POST':
        print(req.form)
    # Retornando html e informações
    return render_template("index.html", infos=infos)