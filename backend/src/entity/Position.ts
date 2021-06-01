import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { Location } from "./Location"

@Entity({ name: "positions" })
export class Position {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255, unique: true })
    name: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    description: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    map: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    address: string;

    @Column({ type: "char", length: 1, default: 'y' })
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Location, location => location.positions)
    @JoinColumn([{name: "location_id", referencedColumnName: "id"}])
    location: Location;
}