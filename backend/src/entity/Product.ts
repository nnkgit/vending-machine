import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany
} from "typeorm";
import { Machine } from "./Machine"
import { MachineStockProduct } from "./MachineStockProduct"

@Entity({ name: "products" })
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: 'float', precision: 10, scale: 2, default: 0 })
    price: number;

    @Column({ type: "varchar", length: 255, nullable: true })
    description: string;

    @Column({ type: "char", length: 1, default: 'y' })
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @OneToMany(() => MachineStockProduct, machineStockProduct => machineStockProduct.product)
    public machineStockProducts!: MachineStockProduct[];
}
