import { MigrationInterface, QueryRunner } from 'typeorm';

export class Datas1708951699246 implements MigrationInterface {
  name = 'Datas1708951699246';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`person_model\` (\`id\`, \`name\`, \`health_max\`, \`strength\`, \`dexterity\`, \`dodge\`, \`description\`, \`url_image\`, \`difficulty\`, \`category\`, \`created_at\`, \`updated_at\`)
        VALUES 
          ('1a1e17d3-9f9d-4c48-8c5a-928b0fe8d84d', 'Dragon', 500, 100, 50, 20, 'A fierce dragon guarding its treasure.', 'https://example.com/dragon-image.jpg', 3, 'ELEMENTAL', DEFAULT, DEFAULT),
          ('2b2f28e1-c443-4a78-bb23-456c78901234', 'Goblin', 30, 10, 15, 5, 'A mischievous goblin causing trouble.', 'https://example.com/goblin-image.jpg', 1, 'GOLEM', DEFAULT, DEFAULT),
          ('3c3d39f8-76a5-4d72-aaf7-987654321abc', 'Wizard', 50, 20, 30, 10, 'A wise wizard casting powerful spells.', 'https://example.com/wizard-image.jpg', 2, 'MAGIC', DEFAULT, DEFAULT);`,
    );
    await queryRunner.query(
      `INSERT INTO \`item\` (\`id\`, \`name\`, \`price\`, \`url_image\`, \`stat_affected\`, \`value\`, \`type\`, \`created_at\`, \`updated_at\`) 
        VALUES 
    ('1d654e6a-9326-4c88-a6bd-7f103e537db1', 'Sword of Power', 100, 'https://example.com/sword-image.jpg', 'STRENGTH', 10, 'HAND', DEFAULT, DEFAULT),
    ('2a3b5d76-8c14-40ab-bc6c-fdc5ac2a9f87', 'Health Potion', 50, 'https://example.com/potion-image.jpg', 'HEALTH', 20, 'POTION', DEFAULT, DEFAULT),
    ('3f8c59b2-7e18-45ea-82f5-9c3b4fe04f65', 'Leather Armor', 75, 'https://example.com/armor-image.jpg', 'NOTHING', 0, 'BODY', DEFAULT, DEFAULT);`,
    );
    await queryRunner.query(
      `INSERT INTO \`person\` (\`id\`, \`gold\`, \`health\`, \`userId\`, \`created_at\`, \`updated_at\`, \`personModelId\`)
      VALUES
        ('4d4e16a2-9af9-43a6-b4c8-c5a0e8d84d1a', 100, 100, 'user1', DEFAULT, DEFAULT, '1a1e17d3-9f9d-4c48-8c5a-928b0fe8d84d'),
        ('5e5f27b3-8c21-4b89-bc32-789012345678', 50, 80, 'user2', DEFAULT, DEFAULT, '2b2f28e1-c443-4a78-bb23-456c78901234'),
        ('6f6a38c4-758e-4d74-a7a5-321abc987654', 200, 120, 'user3', DEFAULT, DEFAULT, '3c3d39f8-76a5-4d72-aaf7-987654321abc');`,
    );
    await queryRunner.query(
      `INSERT INTO \`statistic\` (\`id\`, \`nb_win\`, \`nb_lose\`, \`kills\`, \`userId\`, \`created_at\`, \`updated_at\`)
        VALUES 
          ('10m10n4a2-4cf8-487e-8a5a-9a1ea4dbfd60', 15, 5, '{"Animate": 2, "Elemental": 1}', 'user1', DEFAULT, DEFAULT),
          ('11o11p5b3-8c21-4b89-bc32-789012345678', 10, 8, '{"Golem": 3, "Magic": 1}', 'user2', DEFAULT, DEFAULT),
          ('12q12r6c4-758e-4d74-a7a5-321abc987654', 20, 3, '{"Undead": 4, "Wolf": 2}', 'user3', DEFAULT, DEFAULT);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
