from flask import Flask
from api.blueprints import wellness_blueprint

app = Flask("Origin Challenge API by André Bolina")

app.register_blueprint(wellness_blueprint.blueprint, url_prefix='/wellness')

if __name__ == '__main__':
    app.run(debug=True)