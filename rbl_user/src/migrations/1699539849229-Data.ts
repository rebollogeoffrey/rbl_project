import { MigrationInterface, QueryRunner } from 'typeorm';

export class Data1699539849229 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`user\` (\`id\`,\`role\`,\`name\`,\`email\`,\`password\`,\`url_image\`,\`created_at\`,\`updated_at\`)
      VALUES
      ('5c0eda5f-306d-4a6e-8f7a-6b3bf841420b','admin','William Brunelle','william.brunelle@gmail.com','Pa55w0Rd!','',DEFAULT,DEFAULT),
      ('c90e1467-a6d7-4a75-a544-c86a0e29e7a2','basic','Laurent Pomin','laurent.pomin@gmail.com','Pa55w0Rd!','',DEFAULT,DEFAULT),
      ('c90e1467-a6d7-4a75-b666-c86a0e29e7a2','basic','Martin Martin','martin2@gmail.com','Pa55w0Rd!','',DEFAULT,DEFAULT)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`user\` (\`id\`,\`role\`,\`name\`,\`email\`,\`password\`,\`url_image\`,\`created_at\`,\`updated_at\`) VALUES ('5c0eda5f-306d-4a6e-8f7a-6b3bf841420b','admin','William Brunelle','william.brunelle@gmail.com','Pa55w0Rd!','',DEFAULT,DEFAULT), ('c90e1467-a6d7-4a75-a544-c86a0e29e7a2','basic','Laurent Pomin','laurent.pomin@gmail.com','Pa55w0Rd!','',DEFAULT,DEFAULT)`,
    );
  }
}
