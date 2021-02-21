from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('base.html')


@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/post')
def post():
    return render_template('post.html')


@app.route('/post1')
def post1():
    return render_template('post1.html')


@app.route('/about')
def about():
    return render_template('about.html')


if __name__ == '__main__':
    app.run(debug=True)
