import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany
} from "typeorm";
import { User } from "./User"

@Entity({ name: "roles" })
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255, unique: true })
    slug: string;

    @Column({ type: "char", length: 1, default: 'y' })
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @OneToMany(() => User, user => user.role)
    users: User[];
}
