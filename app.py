from flask import Flask
from flask import render_template
from flask import request
from flask import redirect
import ssl


# Instantiate
app = Flask(__name__)

# Cert
context = ssl.SSLContext(ssl.PROTOCOL_TLS)
context.load_cert_chain("./https/cert.pem", "./https/key.pem")


# Enforce HTTPS
@app.before_request
def checkProtocol():
    if not request.is_secure:
        url = request.url.replace("http://", "https://")
        return redirect(url, code=302)


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


if __name__ == "_main_":
    app.run(host="0.0.0.0", port=4550, debug=True, ssl_context=context)
