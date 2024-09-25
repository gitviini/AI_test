from app.__init__ import app, render_template

@app.route("/")
def home():
    return render_template("index.html")