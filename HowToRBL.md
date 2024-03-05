# How To Start RBL ?

## Docker for Starters

### Be sure that each port is free to use

Stop the services or applications which are currently using :

- localhost:80
- mysql

To stop them open the cmd and write :

- `systemctl stop NAME ` (replace NAME with the name of the service).

For example :

> `systemctl stop mysql` > `systemctl stop apache2`

### Remove all images not usefull

In a cmd, execute :

> `docker rmi -f $(docker images -aq)`

### Check the .env

In each microservice there's a .env, be sure to have the right informations and credentials provided.

Paths of the indicated files:

- rbl_project/.env
- rlb_project/rbl_frontend/.env
- rlb_project/rbl_tgpq/.env
- rlb_project/rbl_user/.env

### Docker-Compose

Use docker-compose :

> `docker-compose up -d`

### If you need to rebuild a container

If you made some changes and need to rebuild a container without disrupting the whole project you can use :

> `docker-compose up --detach --build`

## Some Datas

To run the project and test it's functionnality you will need datas.

### Connection to Docker Container

The database are already created but empty, to rectified this problem you need to connect to the two containers using a database.

This will allow you to go inside the container :

> `docker exec -it NAME sh`
> (Replace NAME by the name of the container in this case the two container are "rbl_project_tgpq_1" & "rbl_project_user_1")

### Migration

Now, you can use the command to send the creation of the tables and their content by using this :

> `npm run migration:up`
