# How to use Docker with our projet on linux?

## Be sure that each port is free to use

### Stop the services or applications which are currently using :

- localhost:80
- mysql

---
To know which port is already used, open a cmd and write ONE OF THE FOLLOWING :

To see all the applications using a port :

- `sudo lsof -i -P -n | grep LISTEN`

To see a specific port *such as 80 here* :

- `sudo lsof -i:80`

---

To stop them open the cmd and write :

>- `systemctl stop NAME ` (replace NAME with the name of the service).

*For example :*

`systemctl stop mysql`
`systemctl stop apache2`

## Remove all images not usefull

In a cmd, execute :

> `docker rmi -f $(docker images -aq)`

## Check the .env completion

In each microservice there's a .env, be sure to have the right informations and credentials provided.

Paths of the indicated files:

- rbl_project/.env
- rlb_project/rbl_frontend/.env
- rlb_project/rbl_tgpq/.env
- rlb_project/rbl_user/.env

## Let Docker go

Use docker-compose :

>- `docker-compose up -d`
