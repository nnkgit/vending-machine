import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany
} from "typeorm";
import { Position } from "./Position"

@Entity({ name: "locations" })
export class Location {

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

    @OneToMany(() => Position, position => position.location)
    positions: Position[];
}
