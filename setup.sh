#!/bin/bash -e

# virtualenv folder name
ENV='env'

# Where it's being installed
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Set up a virtualenv
virtualenv $ENV

# Install django and dependencies
$ENV/bin/pip install django djangorestframework

# Update the project's folder path in productgallery/settings.py
ESCAPED_DIR=$(sed 's/\//\\\//g' <<< "$DIR")
sed -i -e "s/INSERT_PROJECT_FOLDER/$ESCAPED_DIR\//g" $DIR/productgallery/settings.py

# Generate a secret key in the same way as in: https://github.com/django/django/blob/master/django/core/management/commands/startproject.py
SECRET_KEY="$( echo -e "from django.utils.crypto import get_random_string\nchars='abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'\nprint(get_random_string(50,chars))" | $ENV/bin/python )"
# Escape &
SECRET_KEY=$(sed 's/\&/\\\&/g' <<< $SECRET_KEY)

# Insert secret key into productgallery/settings.py
sed -i -e "s/INSERT_SECRET_KEY/$SECRET_KEY/g" $DIR/productgallery/settings.py

# Syncdb
$ENV/bin/python manage.py syncdb

# Insert some sample data into the DB
chmod u+x $DIR/insert_sample_db_data.py
$ENV/bin/python $DIR/insert_sample_db_data.py
