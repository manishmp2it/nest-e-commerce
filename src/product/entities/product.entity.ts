import { Rating } from 'src/rating/entities/rating.entity';
import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn} from 'typeorm'

@Entity()
export class Product extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    price:number;

    @Column()
    description:string;

    @Column()
    productImage:string;

    @Column()
    lastUpdate:Date;

    @OneToMany(type => Rating, rating => rating.products, {eager: true})
    ratings: Rating[];
}
