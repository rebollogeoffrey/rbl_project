import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTables1708951626069 implements MigrationInterface {
  name = 'CreateTables1708951626069';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`person_model\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL COMMENT 'PersonModel''s name', \`health_max\` int NULL COMMENT 'Maximum health points this personage can have', \`strength\` int NULL COMMENT 'Strength is used to calculate damage this PersonModel deal', \`dexterity\` int NULL COMMENT 'Dexterity is used to calculate chance to deal damage to an opponent', \`dodge\` int NULL COMMENT 'Dodge is used to calculate chance to dodge an opponent''s attack', \`description\` varchar(255) NULL COMMENT 'This text appears on the loading screen for monsters and in selection for character', \`url_image\` varchar(255) NULL, \`difficulty\` int NULL COMMENT 'Difficulty is used to sort PersonModel by their difficulty to be beaten' DEFAULT '1', \`category\` enum ('Animate', 'Blob', 'Daemon', 'Elemental', 'Golem', 'Hero', 'Magic', 'Merchant', 'Partner', 'Plant', 'Thief', 'Undead', 'Wolf') NOT NULL COMMENT 'Category of PersonModel', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`person\` (\`id\` varchar(36) NOT NULL, \`gold\` int NOT NULL DEFAULT '0', \`health\` int NOT NULL DEFAULT '100', \`userId\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`personModelId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`item\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`price\` int NOT NULL DEFAULT '0', \`url_image\` varchar(255) NULL, \`stat_affected\` enum ('Dexterity', 'Dodge', 'Gold', 'Current health', 'Health maximum', 'Nothing', 'Strength') NOT NULL COMMENT 'Define what is affected by the item' DEFAULT 'Nothing', \`value\` int NOT NULL COMMENT 'Value of the stat_affected' DEFAULT '0', \`type\` enum ('HAND', 'BODY', 'LEGS', 'POTION', 'OTHER') NOT NULL COMMENT 'Define what is the item', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`statistic\` (\`id\` varchar(36) NOT NULL, \`nb_win\` int NOT NULL DEFAULT '0', \`nb_lose\` int NOT NULL DEFAULT '0', \`kills\` json NOT NULL, \`userId\` varchar(255) NOT NULL DEFAULT '0', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`person_items_item\` (\`personId\` varchar(36) NOT NULL, \`itemId\` varchar(36) NOT NULL, INDEX \`IDX_5f4f9bbac014f99a1ea4dbfd60\` (\`personId\`), INDEX \`IDX_3d7c1074a36f5538ad88230e38\` (\`itemId\`), PRIMARY KEY (\`personId\`, \`itemId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`person\` ADD CONSTRAINT \`FK_7fd7219f59f736f1ee2efd49e47\` FOREIGN KEY (\`personModelId\`) REFERENCES \`person_model\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`person_items_item\` ADD CONSTRAINT \`FK_5f4f9bbac014f99a1ea4dbfd602\` FOREIGN KEY (\`personId\`) REFERENCES \`person\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`person_items_item\` ADD CONSTRAINT \`FK_3d7c1074a36f5538ad88230e38b\` FOREIGN KEY (\`itemId\`) REFERENCES \`item\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `INSERT INTO \`person_model\` (\`id\`, \`name\`, \`health_max\`, \`strength\`, \`dexterity\`, \`dodge\`, \`description\`, \`url_image\`, \`difficulty\`, \`category\`, \`created_at\`, \`updated_at\`)
        VALUES 
          ('1a1e17d3-9f9d-4c48-8c5a-928b0fe8d84d', 'Dragon', 500, 100, 50, 20, 'A fierce dragon guarding its treasure.', 'monsters/tgpq_monster_dragon.png', 3, 'ELEMENTAL', DEFAULT, DEFAULT),
          ('2b2f28e1-c443-4a78-bb23-456c78901234', 'Goblin', 70, 10, 15, 5, 'A mischievous goblin causing trouble.', 'monsters/tgpq_monster_goblin.png', 1, 'GOLEM', DEFAULT, DEFAULT),
          ('2b2f28e1-c443-4a78-bb23-456c78901269', 'Gobltwo', 70, 10, 15, 5, 'A second mischievous goblin causing trouble.', 'monsters/tgpq_monster_gobltwo.png', 1, 'GOLEM', DEFAULT, DEFAULT),
          ('2b2f28e1-c443-4a78-bb23-456c78901288', 'Goblthird', 70, 10, 15, 5, 'A third mischievous goblin causing trouble.', 'monsters/tgpq_monster_goblthird.png', 1, 'GOLEM', DEFAULT, DEFAULT),
          ('3c3d39f8-76a5-4d72-aaf7-987654321abc', 'Wizard', 50, 20, 30, 10, 'A wise wizard casting powerful spells.', 'wizard-image.jpg', 2, 'MAGIC', DEFAULT, DEFAULT),
          ('3c3d39f8-76a5-4d72-aaf7-987654321def', 'Hero', 100, 30, 25, 25, 'Your hero which is going to defeat everything.', 'heroes/tgpq_character_peasant.png', 10, 'HERO', DEFAULT, DEFAULT);`,
    );
    await queryRunner.query(
      `INSERT INTO \`item\` (\`id\`, \`name\`, \`price\`, \`url_image\`, \`stat_affected\`, \`value\`, \`type\`, \`created_at\`, \`updated_at\`) 
        VALUES 
    ('1d654e6a-9326-4c88-a6bd-7f103e537db1', 'Small Sword', 100, '../../../assets/images/tgpq/items/tgpq_item_sword-small.png', 'STRENGTH', 10, 'HAND', DEFAULT, DEFAULT),
    ('3f8c59b2-7e18-45ea-82f5-9c3b4fe04f65', 'Leather Armor', 100, '../../../assets/images/tgpq/items/tgpq_item_shield.png', 'DODGE', 10, 'BODY', DEFAULT, DEFAULT);`,
    );
    await queryRunner.query(
      `INSERT INTO \`person\` (\`id\`, \`gold\`, \`health\`, \`userId\`, \`created_at\`, \`updated_at\`, \`personModelId\`)
      VALUES
        ('4d4e16a2-9af9-43a6-b4c8-c5a0e8d84d1a', 100, 100, 'c90e1467-a6d7-4a75-a544-c86a0e29e7a2', DEFAULT, DEFAULT, '3c3d39f8-76a5-4d72-aaf7-987654321def');`,
    );
    await queryRunner.query(
      `INSERT INTO \`statistic\` (\`id\`, \`nb_win\`, \`nb_lose\`, \`kills\`, \`userId\`, \`created_at\`, \`updated_at\`)
        VALUES 
          ('10m10n4a-4cf8-487e-8a5a-9a1ea4dbfd60', 15, 5, '{"Golem": 2, "Elemental": 1}', 'c90e1467-a6d7-4a75-a544-c86a0e29e7a2', DEFAULT, DEFAULT),
          ('11o11p5b-8c21-4b89-bc32-789012345678', 10, 8, '{"Golem": 3}', 'c90e1467-a6d7-4a75-b666-c86a0e29e7a2', DEFAULT, DEFAULT);`,
    );
    await queryRunner.query(
      `INSERT INTO \`person_items_item\` (\`personId\`, \`itemId\`)
        VALUES 
          ('4d4e16a2-9af9-43a6-b4c8-c5a0e8d84d1a', '1d654e6a-9326-4c88-a6bd-7f103e537db1'),
          ('4d4e16a2-9af9-43a6-b4c8-c5a0e8d84d1a', '3f8c59b2-7e18-45ea-82f5-9c3b4fe04f65');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`person_items_item\` DROP FOREIGN KEY \`FK_3d7c1074a36f5538ad88230e38b\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`person_items_item\` DROP FOREIGN KEY \`FK_5f4f9bbac014f99a1ea4dbfd602\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`person\` DROP FOREIGN KEY \`FK_7fd7219f59f736f1ee2efd49e47\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_3d7c1074a36f5538ad88230e38\` ON \`person_items_item\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_5f4f9bbac014f99a1ea4dbfd60\` ON \`person_items_item\``,
    );
    await queryRunner.query(`DROP TABLE \`person_items_item\``);
    await queryRunner.query(`DROP TABLE \`statistic\``);
    await queryRunner.query(`DROP TABLE \`item\``);
    await queryRunner.query(`DROP TABLE \`person\``);
    await queryRunner.query(`DROP TABLE \`person_model\``);
  }
}
