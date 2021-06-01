import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm"
import { Role } from "./Role"

@Entity({ name: "users" })
export class User {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    full_name: string;

    @Column({ type: "varchar", length: 255, unique: true })
    username: string;

    @Column({ type: "varchar", length: 255 })
    password: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email: string;

    @Column({ type: "char", length: 1, default: 'y' })
    status: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Role, role => role.users)
    @JoinColumn([{name: "role_id", referencedColumnName: "id"}])
    role: Role;
}
