from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def home():
    # Serve the main portfolio page
    return app.send_static_file('index.html')

# Optional: Serve favicon
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'images'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')

if __name__ == '__main__':
    app.run(debug=True) 