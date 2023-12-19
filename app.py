from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
import ssl


# Instantiate
app = Flask(__name__)


# Home
@app.route("/", methods=["GET"])
def home():
    if request.method == "GET":
        return render_template("index.html")
    return


# Favicon
@app.route("/favicon.ico", methods=["GET"])
def fav():
    if request.method == "GET":
        return "./static/favicon_io/favicon.ico"
    return


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000, debug=True, use_reloader=True)
