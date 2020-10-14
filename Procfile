release:  python manage.py collectstatic --no-input
release: python manage.py migrate
web: gunicorn expenses.wsgi --log-file -
