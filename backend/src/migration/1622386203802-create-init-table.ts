import {MigrationInterface, QueryRunner} from "typeorm";

export class createInitTable1622386203802 implements MigrationInterface {
    name = 'createInitTable1622386203802'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `positions` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, `map` varchar(255) NULL, `address` varchar(255) NULL, `status` char(1) NOT NULL DEFAULT 'y', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `location_id` int NULL, UNIQUE INDEX `IDX_5c70dc5aa01e351730e4ffc929` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `locations` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NULL, `map` varchar(255) NULL, `address` varchar(255) NULL, `status` char(1) NOT NULL DEFAULT 'y', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_227023051ab1fedef7a3b6c7e2` (`name`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `products` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `price` float(10,2) NOT NULL DEFAULT '0.00', `description` varchar(255) NULL, `status` char(1) NOT NULL DEFAULT 'y', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `machine_stock_product` (`id` int NOT NULL AUTO_INCREMENT, `stocks` int NOT NULL DEFAULT '0', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `machine_id` int NULL, `product_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `machines` (`id` int NOT NULL AUTO_INCREMENT, `code` varchar(255) NOT NULL, `description` varchar(255) NULL, `status` char(1) NOT NULL DEFAULT 'y', `min` int NOT NULL DEFAULT '0', `max` int NOT NULL DEFAULT '0', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `position_id` int NULL, UNIQUE INDEX `IDX_dafffa18dcdfbab2fb17ea2bd8` (`code`), UNIQUE INDEX `REL_c416ee00cd0869bac74ea00258` (`position_id`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `full_name` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `status` char(1) NOT NULL DEFAULT 'y', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `role_id` int NULL, UNIQUE INDEX `IDX_fe0bb3f6520ee0469504521e71` (`username`), UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `roles` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `slug` varchar(255) NOT NULL, `status` char(1) NOT NULL DEFAULT 'y', `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_881f72bac969d9a00a1a29e107` (`slug`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `positions` ADD CONSTRAINT `FK_f99d5576e023db7ef58faca28cb` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `machine_stock_product` ADD CONSTRAINT `FK_4c8042a6c902a908cda13fc5821` FOREIGN KEY (`machine_id`) REFERENCES `machines`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `machine_stock_product` ADD CONSTRAINT `FK_c26e25c1525ef6a8a5ad244bea5` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `machines` ADD CONSTRAINT `FK_c416ee00cd0869bac74ea00258b` FOREIGN KEY (`position_id`) REFERENCES `positions`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_a2cecd1a3531c0b041e29ba46e1` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_a2cecd1a3531c0b041e29ba46e1`");
        await queryRunner.query("ALTER TABLE `machines` DROP FOREIGN KEY `FK_c416ee00cd0869bac74ea00258b`");
        await queryRunner.query("ALTER TABLE `machine_stock_product` DROP FOREIGN KEY `FK_c26e25c1525ef6a8a5ad244bea5`");
        await queryRunner.query("ALTER TABLE `machine_stock_product` DROP FOREIGN KEY `FK_4c8042a6c902a908cda13fc5821`");
        await queryRunner.query("ALTER TABLE `positions` DROP FOREIGN KEY `FK_f99d5576e023db7ef58faca28cb`");
        await queryRunner.query("DROP INDEX `IDX_881f72bac969d9a00a1a29e107` ON `roles`");
        await queryRunner.query("DROP TABLE `roles`");
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_fe0bb3f6520ee0469504521e71` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP INDEX `REL_c416ee00cd0869bac74ea00258` ON `machines`");
        await queryRunner.query("DROP INDEX `IDX_dafffa18dcdfbab2fb17ea2bd8` ON `machines`");
        await queryRunner.query("DROP TABLE `machines`");
        await queryRunner.query("DROP TABLE `machine_stock_product`");
        await queryRunner.query("DROP TABLE `products`");
        await queryRunner.query("DROP INDEX `IDX_227023051ab1fedef7a3b6c7e2` ON `locations`");
        await queryRunner.query("DROP TABLE `locations`");
        await queryRunner.query("DROP INDEX `IDX_5c70dc5aa01e351730e4ffc929` ON `positions`");
        await queryRunner.query("DROP TABLE `positions`");
    }

}
