from flask import Flask
from flask import render_template, request, make_response
import datetime


# Instantiate
app = Flask(__name__)


# Home
@app.route("/", methods=["GET"])
def home():
    if request.method == "GET":
        current_tab = request.cookies.get("current_tab")
        if not current_tab:
            response = make_response(render_template(
                "index.html", current_tab="Home"), 200)
            response.set_cookie(
                "current_tab", "Home", expires=datetime.datetime.now() + datetime.timedelta(days=1), samesite="Strict")
            return response
        else:
            return render_template("index.html", current_tab=current_tab)
    return


# Favicon
@app.route("/favicon.ico", methods=["GET"])
def fav():
    if request.method == "GET":
        return "./static/favicon_io/favicon.ico"
    return


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000, debug=True, use_reloader=True)
