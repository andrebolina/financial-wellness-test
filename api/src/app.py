from flask import Flask
from flask_cors import CORS
from api.blueprints import wellness_blueprint
from flask_sqlalchemy import SQLAlchemy
from api.models.score_history import db

app = Flask("Financial Wellness Test API")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db.app = app
db.init_app(app)

cors = CORS(app)

app.register_blueprint(wellness_blueprint.blueprint, url_prefix='/wellness')

if __name__ == '__main__':
    app.run(debug=True)
