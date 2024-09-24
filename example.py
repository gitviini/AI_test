# Importando bibliotecas e modulos
from model import Model
from time import sleep 

try:
    # Instanciando novo Modelo
    api = Model()

    # Sistema de navegação
    while True:
        # Limpa a tela no fim de toda ação
        api.clear()

        # Atribui a escolha a variável
        choose = int(input("0) Perguntar\n1) Exemplo\n2) Sair\n:"))
        match (choose):
            case 0:
                api.clear()
                ask = input("Digite a pergunta\n:")
                api.response(ask)
                continue
            case 1:
                api.clear()
                api.example()
                continue
            case 2:
                print("\033[31;3mSaindo...\033[m")
                break

except Exception as erro: print(erro)
except KeyboardInterrupt: print("\n\033[31;3mSaindo...\033[m")