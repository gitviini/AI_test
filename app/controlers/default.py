# importando
from app import app, render_template, json, jsonify, request as req
from app.models.orm import init_db, db_session
from app.models.user import User

infos = [
    'version : 1.0.0',
    'name : chat_bot',
]

init_db()

# Rota inicial
@app.route("/", methods=['GET','POST'])
def home():
    print(User.query.all())
    if req.method == 'POST':
        name = req.form['name']
        password = req.form['password']
        if name and password:
            # print(name,password)
            user = User(name=name,email=password)
            db_session.add(user)
            db_session.commit()
        else : print("\033[31;3mfaill request\033[m")
    # Retornando html e informações
    return render_template("index.html", infos=infos)

@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()