************
FT-Solidaria
************

Instalação do Ambiente de Desenvolvimento
=========================================

* Procedimento testado nos seguintes SO's:

  * `Ubuntu 16.04 64bits

Atualizar o sistema::
----------------------

 ::

    sudo apt-get update

    sudo apt-get upgrade

Instalar as seguintes dependências do sistema::
----------------------------------------------------------------------------------------

::

    sudo apt-get install git python3-dev libpq-dev graphviz-dev graphviz \
    pkg-config postgresql postgresql-contrib pgadmin3 python-psycopg2 \
    software-properties-common build-essential libxml2-dev libjpeg-dev \
    libmysqlclient-dev libssl-dev libffi-dev libxslt1-dev python3-setuptools \
    python3-pip poppler-utils antiword default-jre python3-venv

Instalar o virtualenv usando python 3 para o projeto.
-----------------------------------------------------

* Para usar `virtualenvwrapper <https://virtualenvwrapper.readthedocs.org/en/latest/install.html#basic-installation>`_, instale com::

    sudo pip3 install virtualenvwrapper

Criar o ambiente virtual de desenvolvimento para o Ajudaê
-------------------------------------------------------
::

    mkvirtualenv -p python3 -r requirements/requirements.txt ajudae


