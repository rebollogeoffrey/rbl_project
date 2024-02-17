# How to use Docker with our projet?

## Be sure that each port is free to use

Stop the services or applications which are currently using :

- localhost:80
- mysql

To stop them open the cmd and write :

- `systemctl stop NAME ` (replace NAME with the name of the service).

For example :

> `systemctl stop mysql` > `systemctl stop apache2`

## Remove all images not usefull

In a cmd, execute :

> `docker rmi -f $(docker images -aq)`

## Check the .env

In each microservice there's a .env, be sure to have the right informations and credentials provided.

Paths of the indicated files:

- rbl_project/.env
- rlb_project/rbl_frontend/.env
- rlb_project/rbl_tgpq/.env
- rlb_project/rbl_user/.env

## Docker-Compose

Use docker-compose :

> `docker-compose up -d`
