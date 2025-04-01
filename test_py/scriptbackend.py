import eel

eel.init('web', allowed_extensions=['.js', '.html'])

@eel.expose()
def test(x):
    print(type(x))

@eel.expose
def my_python_function(a, b):
    print(a, b, a + b)

if __name__ == '__main__':
    # eel.init('front')
    eel.start('test.html', mode='default')