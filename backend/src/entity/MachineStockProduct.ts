import { 
    Entity,
    Column,
    ManyToOne,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    JoinColumn
} from "typeorm";
import { Machine } from "./Machine";
import { Product } from "./Product";


@Entity()
export class MachineStockProduct {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ default: 0 })
    public stocks!: number;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Machine, machine => machine.machineStockProducts)
    @JoinColumn([{name: "machine_id", referencedColumnName: "id"}])
    public machine!: Machine;

    @ManyToOne(() => Product, product => product.machineStockProducts)
    @JoinColumn([{name: "product_id", referencedColumnName: "id"}])
    public product!: Product;
}