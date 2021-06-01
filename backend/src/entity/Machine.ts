import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
    JoinTable
} from "typeorm";
import { Position } from "./Position"
import { MachineStockProduct } from "./MachineStockProduct"

@Entity({ name: "machines" })
export class Machine {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, unique: true })
    code: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    description: string;

    @Column({ type: "char", length: 1, default: 'y' })
    status: string;

    @Column({ default: 0 })
    min: number;

    @Column({ default: 0 })
    max: number;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @OneToOne(() => Position)
    @JoinColumn([{name: "position_id", referencedColumnName: "id"}])
    position: Position;

    @OneToMany(() => MachineStockProduct, machineStockProduct => machineStockProduct.machine)
    public machineStockProducts!: MachineStockProduct[];
}
