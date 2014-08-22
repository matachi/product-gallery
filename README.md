# Product gallery

Simple HTML5 single-page AngularJS application with a REST backend implemented
in Django.

Copyright (C) 2013 Daniel 'MaTachi' Jonsson  
License: [MIT License](LICENSE)

## YouTube video

If you don't want to download the application but still want to check it out,
you can instead click on the image below to watch it in action on YouTube.

[![YouTube thumbnail](youtube-thumbnail.jpg "Watch on
YouTube")](http://youtu.be/hf9UK7WmRD0)

## Setup

### Arch Linux based distributions

1. Install python-virtualenv: `sudo pacman -S python-virtualenv`
2. Run `./setup.sh` to install dependencies, populate the database, config the
   settings file, etc.

### Debian and Ubuntu based distributions

1. Install python3-pip: `sudo apt-get install python3-pip`
2. Install virtualenv for Python 3 with pip: `sudo pip-3.3 install virtualenv`
3. Run `./setup.sh` to install dependencies, populate the database, config the
   settings file, etc.

## Run local server

1. `$ source env/bin/activate`
2. `$ ./manage.py runserver`
3. Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in a web browser to
   play with the app.

## Libraries & frameworks

* [AngularJS](http://www.angularjs.org/) licensed under the [MIT
  License](https://docs-angularjs-org-dev.appspot.com/misc/contribute)
* [Django](https://www.djangoproject.com/) licensed under the [Modified BSD
  License](https://github.com/django/django/blob/master/LICENSE)
* [Django REST framework](http://django-rest-framework.org/) licensed under [a
  modified BSD License](http://django-rest-framework.org/#license).
* [Twitter Bootstrap](http://getbootstrap.com/) licensed under [Apache License
  2.0](http://getbootstrap.com/getting-started/)
* Twitter Bootstrap depends on [jQuery](http://jquery.com/) licensed under the
  [MIT license](https://jquery.org/license/)

