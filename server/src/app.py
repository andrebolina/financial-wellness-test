from flask import Flask
from flask_cors import CORS
from api.blueprints import wellness_blueprint

app = Flask("Origin Challenge API by André Bolina")

cors = CORS(app)

app.register_blueprint(wellness_blueprint.blueprint, url_prefix='/wellness')

if __name__ == '__main__':
    app.run(debug=True)