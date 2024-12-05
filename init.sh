#!/bin/bash

echo "Attente de MongoDB..."
sleep 10

echo "Création de la base de données"
mongo --host localhost -u root -p rootpassword --authenticationDatabase admin <<EOF
use nuitInfo


EOF

echo "Base de données créée."
