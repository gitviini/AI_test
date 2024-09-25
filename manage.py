from app.__init__ import app
import sys

args = sys.argv

for arg in args:
    if arg == 'runserver':
        app.run(debug=True,port=8080)