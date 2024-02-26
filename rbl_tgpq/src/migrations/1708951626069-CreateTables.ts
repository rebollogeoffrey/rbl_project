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
      `CREATE TABLE \`item\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(80) NOT NULL, \`price\` int NOT NULL DEFAULT '0', \`url_image\` varchar(255) NULL, \`stat_affected\` enum ('Dexterity', 'Dodge', 'Gold', 'Current health', 'Health maximum', 'Nothing', 'Strength') NOT NULL COMMENT 'Define what is affected by the item' DEFAULT 'Nothing', \`value\` int NOT NULL COMMENT 'Value of the stat_affected' DEFAULT '0', \`type\` enum ('0', '1', '2', '3', '4') NOT NULL COMMENT 'Define what is the item', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`statistic\` (\`id\` varchar(36) NOT NULL, \`nb_win\` int NOT NULL DEFAULT '0', \`nb_lose\` int NOT NULL DEFAULT '0', \`kills\` json NOT NULL DEFAULT '{}', \`userId\` varchar(255) NOT NULL DEFAULT '0', \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
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
