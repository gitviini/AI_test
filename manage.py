# importações
try:
    from app import app
    from app.config import NAME, VERSION
    from sys import argv
    from os import system
    from asgiref.wsgi import WsgiToAsgi
except ModuleNotFoundError as erro:
    print(f"\033[31;3mBiblioteca '{erro.name}' não instalada/encontrada\033[m")
    exit()

# removendo argumento padrão
if argv.count("manage.py") != 0 :argv.pop(argv.index("manage.py"))

list_arg = [
    "runserver : run server in port 8080",
    "version : show version of project",
]

asgi_app = WsgiToAsgi(app)

# verificando cada argumento
if len(argv) == 1 :
    match argv[0]:
        case "runserver":
            system("gunicorn app:app")
        case "debug":
            app.run(debug=True,port=8080)
        case "version":
            print(f'\033[32;3mPACKAGE\033[m: {NAME}\n\033[32;3mVERSION:\033[m {VERSION}')
        case _:
            print(f"\033[31;3mArgumento {argv[0]} não existe\033[m")
            print("python3 manage.py [arg]\nlist of args:")
            for i in list_arg: print(f"\033[30;3m{i}\033[m")
            exit()
else :
    print("python3 manage.py [arg]\nlist of args:")
    for i in list_arg: print(f"\033[30;3m{i}\033[m")