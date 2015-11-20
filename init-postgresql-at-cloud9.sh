#!/bin/bash

sudo service postgresql start
sudo sudo -u postgres psql -c 'CREATE DATABASE "database_dev";'
sudo sudo -u postgres psql -c "CREATE USER dev PASSWORD 'dev' LOGIN;"
