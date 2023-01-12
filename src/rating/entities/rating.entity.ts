import { Product } from 'src/product/entities/product.entity';
import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Rating extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    userId: number;

    @ManyToOne(type => Product, product => product.ratings, { eager: false })
    products: Product;

    @Column()
    productId: number;
}