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
    match arg:
        case 'runserver':
            app.run(debug=True,port=8080)
            continue
        case "version":
            print("version : 1.0.0")
            continue
        case _:
            print(f"\033[31;3mArgumento {arg} não existe\033[m")
            exit()
            break