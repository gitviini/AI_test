# importando
try:
    from app import app, render_template, json, jsonify, request as req, redirect, session
    from app.controlers.api import ask
    from app.config import INFOS
except ModuleNotFoundError as erro:
    print(f"\033[31;3mBiblioteca '{erro.name}' não instalada/encontrada\033[m")
    exit()

# Rota inicial
@app.route('/', methods=['GET','POST'])
@app.route('/login', methods=['GET','POST'])
# Função da rota inicial
def home():
    # Mensagens de aviso
    msg="*fase de testes"
    # Atribuindo informações do usuário
    user = session.get('user',None)
    # Se usuário já estiver logado mostra página de usuário
    if user != None:
        # Retorna página de perfil do usuário e informações do projeto + mensagem
        return render_template('perfil.html',infos=INFOS,msg=msg,user=user)
    else:
    # Se não estiver mas houver um requisição "POST"
        if req.method == "POST":
            # Definindo sessão do novo usuário
            session['user'] = req.form.get('name')
            # Retorna página de perfil do novo usuário e informações do projeto + mensagem
            return render_template('perfil.html',infos=INFOS,msg=msg,user=user)
    # Retorna página de login e informações do projeto + mensagem
    return render_template('index.html', infos=INFOS, state="login", msg=msg)

# Rota do bot
@app.route('/bot', methods=['GET','POST'])
def bot():
    # Mensagem de aviso
    msg = "*fase de testes"
    # Atribuindo informações do usuário
    user = session.get('user',None)
    # Se houver requisição "POST" e conter json
    print(req.is_json)
    if req.method == 'POST' and req.is_json:
        # Resposta padrão
        status = 'Pergunta recebida'
        resp = ''
        try:
            text = req.json['text']
            resp = ask(text,'web')
        # Se não houver a chave json desejada
        except KeyError as erro:
            print(f"\033[31;3mChave json {erro} não encontrada\033[m")
            status = 'Erro interno'
        return jsonify(status,resp)
    return render_template('bot.html', infos=INFOS, msg=msg, user=user)

@app.route('/logout')
def logout():
    session.pop('user',None)
    return redirect('/')