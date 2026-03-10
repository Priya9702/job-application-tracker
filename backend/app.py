from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
host="localhost",
user="root",
password="",
database="job_tracker"
)

@app.route("/applications", methods=["GET"])
def get_applications():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM applications")
    result = cursor.fetchall()
    return jsonify(result)

@app.route("/applications", methods=["POST"])
def add_application():
    data = request.json

    cursor = db.cursor()

    query = """
    INSERT INTO applications (company, position, status, notes)
    VALUES (%s,%s,%s,%s)
    """

    cursor.execute(query,(
        data["company"],
        data["position"],
        data["status"],
        data["notes"]
    ))

    db.commit()

    return {"message":"Application added"}

@app.route("/applications/<int:id>", methods=["DELETE"])
def delete_application(id):

    cursor = db.cursor()
    cursor.execute("DELETE FROM applications WHERE id=%s",(id,))
    db.commit()

    return {"message":"Deleted"}

if __name__ == "__main__":
    app.run(debug=True)
