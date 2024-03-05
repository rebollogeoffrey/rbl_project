# Which routes and for what ?

The routes belows have infront of them the following indications : http://localhost:8261/

## Item

### Post

    - To create an item : item

### Get

    - To get all items : item

    - To get a specific item : item/:id

### Patch

    - To update an item : item/:id

### Delete

    - To remove an item : item

## Person

### Post

    - To create a person : person

### Get

    - To get all persons : person

    - To get a spécific person : person/:id

### Patch

    - To update a person : person/:id
    In the body the section "person" will be sent down this route

    - To battle between a Hero and a Monster with a mode (attack or defence) : person/battle/:hero/:monster/:mode

    - To start a battle with a Hero : person/startBattle/:hero

    - To purchase an item for the hero : person/shop/:hero/:item

### Delete

    - To delete a person : person/:id

## PersonModel

### Post

    - To create a personModel : personmodel

### Get

    - To get all the personmodels : personmodel

    - To get a specific personmodel : personmodel/:id

    - To get the personmodel based on their category : personmodel/:category

    - To get the personmodel used for the creation of heroes : personmodel/hero

### Patch

    - To update a personmodel : personmodel/:id

### Delete

    - To delete a personmodel : personmodel/:id

## Statistic

### Post

    - To create a statistic : statistic

### Get

    - To get all the statistic : statistic

    - To get a specific statistic : statistic/:id

### Patch

    - To update a statistic : statistic/:id

    - To update after a battle win the statistic of the user against a certain type of monster : statistic/:idUser/:typeMonster

    - To update the statistic of a user after the campaign whenver successfull or not : statistic/:idUser/:status

### Delete

    - To delete a statistic : statistic/:id
