# Tentando executar as importações
try:
    # Importando
    from google import genai
    import os

# Excessão por falta de modulo instalados/encontrados
except ModuleNotFoundError as erro: 
    print(f"\033[33;3mA biblioteca '{erro.name}' não instalado/encontrado\033[m")

# Classe Modelo de API IA generativa
class Model:

    # Construtor
    def __init__(self):

        # Atribui chave de API a constante KEY através da variável de ambiente API_KEY
        KEY = os.environ["API_KEY"]
        
        # Verificando/Definindo/Configurando a constante KEY
        if KEY:
            self.client = genai.Client(api_key=KEY)
        else:
            while True:
                KEY = input("API_KEY:")
                if(KEY != ""): break
            self.clent = genai.Client(api_key=KEY)

        # Definindo modelo de IA a ser utilizado        
        self.model = "gemini-2.0-flash"


    # Exemplo de prompt
    def example(self):
        print("\033[33;3mClick [Enter] para Sair :\033[m\n> (PROMPT) Liste 3 nomes brasileiros:\n")
        response = self.client.models.generate_content(model=self.model, contents="Liste 3 nomes brasileiros")
        input(response.text)

    # Faz requisição de prompt do usuário
    def response(self, ask):
        response = self.client.models.generate_content(model=self.model, contents=ask)
        input("\033[33;3mClick [Enter] para Sair :\033[m\n"+response.text)

    # Limpa o console
    def clear(self):
        os.system("clear")
