from flask import Flask, render_template, request, redirect, url_for
import requests
import time

app = Flask(__name__)
pip = None
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/execute', methods=['POST'])
def execute():
    ip = request.form['ip']
    user = request.form['user']
    password = request.form['password']
    port = request.form['port']
    application = request.form['application']
    domain = request.form['domain']
    global pip
    pip = request.form['ip']
    response = requests.post(
        'http://backend-app:3000/execute-command',
        json={
            'ip': ip,
            'user': user,
            'password': password,
            'port': port,
            'application': application,
            'domain': domain,  # Modify this with your actual domain
        }
    )

    if response.status_code == 200:
        return redirect(url_for('countdown'))
    else:
        return render_template('error.html', error=response.json()['error'])

@app.route('/countdown')
def countdown():
    global pip
    return render_template('countdown.html',pip=pip )

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)