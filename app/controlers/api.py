try:
    import google.generativeai as genai
    import os
    from app.config import MODEL_AI
except ModuleNotFoundError as erro:
    print(f"\033[31;3mBiblioteca '{erro.name}' não instalada/encontrada\033[m")
    exit()

try:
    api_key=os.environ["API_KEY"]
except KeyError as erro:
    print(f"\033[31;3mVariável de ambiente {erro} não configurada\033[m")
    exit()

genai.configure(api_key=api_key) if api_key else print(f"\033[31;3mVariável de ambiente 'API_KEY' vázia\033[m")

model = genai.GenerativeModel(MODEL_AI)

def ask(text='', mode='web'):
    match mode:
        case 'console':
            pass
        case 'web':
            response = model.generate_content(f'{text} \n utilize tags html (h1,h2,h3,ul,ol e li) para responder')
            return response.text