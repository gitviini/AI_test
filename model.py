import google.generativeai as genai
import os

class Model:
    def __init__(self):
        KEY = ""#os.environ["API_KEY"]
        if KEY:
            genai.configure(api_key=KEY)
        else:
            while True:
                KEY = input("API_KEY:")
                if(KEY != ""): break
        
        self.model = genai.GenerativeModel("gemini-1.5-flash")

    def example(self):
        response = self.model.generate_content("Liste 3 nomes brasileiros")
        input("\033[33;3mClick [Enter] para Sair :\033[m\n"+response.text)

    def response(self, ask):
        response = self.model.generate_content(ask)
        input("\033[33;3mClick [Enter] para Sair :\033[m\n"+response.text)

    def clear(self):
        os.system("clear")