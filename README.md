# AI test Web

<img src="/img/image.png" alt='Imagem de exemplo' width="100%">

> Projeto feito para melhor compreensão de IA generativa em diferentes âmbitos.

## Navegação:
* [Instalando](#instalando)
* [Instalando no Windows](#windows)
* [Instalando no Linux](#linux)
* [Comandos](#comandos)

<a id="instalando"></a>
### $ Instalando
_**OBS** : é requerido **python3.9** ou superior_

***Step-by-Step (Windows e Linux):***

<a id="windows"></a>
### $ Windows🪟:

* `python -m venv dev`
* `dev/Script/activate`
* `pip install -r requirements.txt`
* faça uma conta em [gemini api key](https://aistudio.google.com/app/apikey?hl=pt-br)
* Crie uma chave de API
* Copie ela (será usada posteriormente)
* `python manage.py runserver`
* Prontinho! 😎

<a id="linux"></a>
### $ Linux🐧:

* `python3 -m venv dev`
* `source ./dev/bin/activate`
* `pip install -r requirements.txt`
* faça uma conta em [gemini api key](https://aistudio.google.com/app/apikey?hl=pt-br)
* Crie uma chave de API
* Copie ela (será usada posteriormente)
* `python3 manage.py runserver`
* Prontinho! 😎

<a id="comandos"></a>
## Comandos:

`manage.py [arg]`

***Lista de arg***
* `runserver` → roda o servidor na porta 8000
* `debug` → roda o servidor em modo de debug na porta 8080
* `version` → mostra versão do projeto
