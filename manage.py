# importações
try:
    from app import app
    from sys import argv
except ModuleNotFoundError as erro: 
    print(f"\033[31;3mBiblioteca '{erro.name}' não instalada/encontrada\033[m")
    exit()

# removendo argumento padrão
argv.pop(argv.index("manage.py"))

# verificando cada argumento
for arg in argv:
    if arg == 'runserver':
        app.run(debug=True,port=8080)
    else:
        print(f"\033[31;3mArgumento {arg} não existe\033[m")
        exit()