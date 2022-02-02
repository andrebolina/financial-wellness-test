from uuid import UUID
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class ScoreHistory(db.Model):
    created_at = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    id = db.Column(db.Integer, primary_key=True)
    income = db.Column(db.Float, nullable=False)
    costs = db.Column(db.Float, nullable=False)
    score = db.Column(db.String(10), nullable=False)
    user_id = db.Column(db.Integer, nullable=False)