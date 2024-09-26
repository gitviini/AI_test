# importando
from app import app, render_template

infos = [
    'version : 1.0.0',
    'name : chat_bot',
]

# Rota inicial
@app.route("/")
def home():
    # Retornando html e informações
    return render_template("index.html", infos=infos)