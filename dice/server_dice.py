import dice
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hell0():
    return "Hello World!"

@app.route("/dice")
def attempt_one():
    return str(dice.main(6, 12))


if __name__ == "__main__":
    app.run()
