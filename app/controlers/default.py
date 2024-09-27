# importando
try:
    from app import app, render_template, json, jsonify, request as req, redirect
except ModuleNotFoundError as erro:
    print(f"\033[31;3mBiblioteca '{erro.name}' não instalada/encontrada\033[m")
    exit()

infos = [
    'version : 1.0.0',
    '@AI Bot',
]

# Rota inicial
@app.route('/', methods=['GET','POST'])
# Função da rota inicial
def home():
    # Retorna arquivo html e informações adicionais
    return render_template('index.html', infos=infos, state="login", msg="*fase de testes")